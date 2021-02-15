const express = require('express');
const app = express();
const tvInfos = require('./controller/tvInfos')




app.get('/channel/:channelName', async (req, res) => {

    if (!req.params.channelName) {

        return res.send("Missing channel parameter");

    }


    try {
        const json = await tvInfos.getProgram(req.params.channelName);
        res.send(json);

    } catch (e) {

        res.send(e);
    }

});


app.get('/search/:query', async (req, res) => {

    try {


        res.send(tvInfos.searchChannel(req.params.query));

    } catch (e) {

        res.send(e);
    }

});


app.get('/channels', (req, res) => {

    res.send(tvInfos.channelCodesFactory());
})



const server = app.listen(process.env.PORT || 3008, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});