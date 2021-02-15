const cheerio = require('cheerio');
const fetch = require('node-fetch');
const channels = require('./channels-code.json');
const express = require('express');
const abDate = require('./abDate.js');

const app = express();


const makeStartTIme = (hour, min) => new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour + 1, min, 0, 0);

const now = () => new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() + 1, new Date().getMinutes(), 0, 0);


/**
 * @name getHoursMinutesFromString
 * @description parse a string like "4h" 4h10, 30min to an obect containing Ints
 * @param {string} hourMinute either "4h" 4h10, 30min
 * @returns {object} {minutes : 30, hour : 1}
 */
const getHoursMinutesFromString = (hourMinute) => {


    if (hourMinute.includes("min")) {

        const HourMinArray = hourMinute.split('min').map(t => parseInt(t));

        return {
            minutes: HourMinArray[0],
            hour: 0
        }

    }



    if (hourMinute.includes("h")) {

        const HourMinArray = hourMinute.split('h').map(t => parseInt(t));

        return {
            hour: HourMinArray[0],
            minutes: isNaN(HourMinArray[1]) ? 00 : HourMinArray[1]
        }

    }
}

/**
 * @name getEndTime
 * @description 
 * @param {time object} startTime 
 * @param {object} duration {hour: 3, minutes : 20}
 */
const getEndTime = (startTime, duration) => {

    if (Object.prototype.toString.call(startTime) !== '[object Date]') {
        throw new Error("StartTime should be an time object");
    }

    if (typeof duration.hour === "undefined") {
        throw new Error(`duration.hour should be defined we got ${typeof duration.hour}`);
    }

    if (typeof duration.minutes === "undefined") {
        throw new Error(`duration.minutes should be defined we got ${typeof duration.minutes}`);
    }

    return startTime.addHours(duration.hour).addMinutes(duration.minutes);

}

let channelList = null;

/**
 * @name channelCodesFactory
 * @description Parse the JSON file containing all the chhannel and create a clean list with slug and channel code needed to query the API 
 */
const channelCodesFactory = () => {

    if (channelList !== null) {
        return channelList;
    }

    const realChannels = channels.filter(c => c.link.includes('.html'));

    const channelswithCode = realChannels.map(c => {

        const code = c.link.split('.html')[0].split('-').slice(-1)[0];

        const slug = c.link.split('-' + code)[0].split('/').slice(-1)[0].replace('programme-', '');

        return {
            name: c.name.toLocaleLowerCase(),
            link: c.link,
            code: code,
            slug: slug,
            program: `/channel/${slug}`
        }

    })

    channelList = channelswithCode;

    return channelList;

}


/**
 * @name makeEnpoint
 * @param {string} channel Should be a channel slug included in the channelList created by channelCodesFactory()
 * @param {string | optional} date 
 */
const makeEnpoint = (channel, date = null) => {

    const channelCodes = channelCodesFactory();

    if (typeof channel !== "string") throw new Error(`We received a ${typeof channel} instead of a string for the channel parameter`);

    const channelInfo = channelCodes.find(c => c.slug === channel);

    if (!channelInfo) throw new Error('No Channel infos / coordinates found');

    return `https://www.programme-tv.net/programme/chaine/${date ? date+"/" : ""}programme-${channelInfo.slug}-${channelInfo.code}.html`;

}


const getProgram = async (channel, date = null) => {

    const endpoint = makeEnpoint(channel, date);

    const response = await fetch(endpoint);

    // reponse is not correct
    if (!response.ok) throw new Error(`We received an invalid response  ${await response.text()}`);

    const reponseText = await response.text();

    const $ = cheerio.load(reponseText);

    const program = [];

    let currently = [];

    $('.singleBroadcastCard').each((i, elem) => {

        const title = $(elem).find('.singleBroadcastCard-title').text().trim();

        const hour = $(elem).find('.singleBroadcastCard-hour').text().trim();

        const subtitle = $(elem).find('.singleBroadcastCard-subtitle').text().trim();

        const duration = $(elem).find('.singleBroadcastCard-durationContent').text().trim();


        if (duration === "") throw new Error(`We didn't find the duration from the page : ${endpoint}`);

        if (hour === "") throw new Error(`We didn't find the hour from the page : ${endpoint}`);

        if (title === "") throw new Error(`We didn't find the title from the page : ${endpoint}`);


        const hourInt = getHoursMinutesFromString(hour).hour;

        const minutesInt = getHoursMinutesFromString(hour).minutes;

        const startTime = makeStartTIme(hourInt, minutesInt);

        const endTime = getEndTime(makeStartTIme(hourInt, minutesInt), getHoursMinutesFromString(duration));



        if (startTime.getTime() < now() && endTime.getTime() > now()) {

            currently.push({
                title,
                hour,
                startTime,
                endTime,
                subtitle,
                duration
            })
        }

        program.push({
            title,
            hour,
            startTime,
            endTime,
            subtitle,
            duration
        });

    });


    return {
        channel,
        date: date ? date : "today",
        endpoint,
        currently,
        program
    };

};


const searchChannel = (query) => {

    const channels = channelCodesFactory();

    return channels.filter(ch => ch.name.includes(query.toLocaleLowerCase()));

}


app.get('/channel/:channelName', async (req, res) => {

    if (!req.params.channelName) {

        return res.send("Missing channel parameter");

    }


    try {
        const json = await getProgram(req.params.channelName);
        res.send(json);

    } catch (e) {

        res.send(e);
    }

});


app.get('/search/:query', async (req, res) => {

    try {

        res.send(searchChannel(req.params.query));

    } catch (e) {

        res.send(e);
    }

});


app.get('/channels', (req, res) => {

    res.send(channelCodesFactory());
})



const server = app.listen(process.env.PORT || 3008, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});