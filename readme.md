## TV programm scrapper FR


Create an API to grab all the informations about the tv grid for a channel.


## Usage 

```npm install```

```node app.js ```


## API

Get the current grid and current program for a given channel

``` http://localhost:3008/channel/golfplus ```

Returns : 

```json 
{"channel":"golfplus","date":"today","endpoint":"https://www.programme-tv.net/programme/chaine/programme-golfplus-189.html","currently":[{"title":"Golf : Open de Pebble Beach","hour":"11h00","startTime":"2021-02-15T11:00:00.000Z","endTime":"2021-02-15T15:00:00.000Z","subtitle":"Open de Pebble Beach. 3e tour. Circuit américain 2020/2021.","duration":"4h"}],"program":[{"title":"L'Oeil des pros","hour":"00h30","startTime":"2021-02-15T00:30:00.000Z","endTime":"2021-02-15T01:00:00.000Z","subtitle":"","duration":"30min"},{"title":"Golf : Open de Pebble Beach","hour":"01h00","startTime":"2021-02-15T01:00:00.000Z","endTime":"2021-02-15T06:00:00.000Z","subtitle":"Open de Pebble Beach. 4e tour. Circuit américain 2020/2021. 4e tour.","duration":"5h"},{"title":"Golf : Open de Pebble Beach","hour":"06h00","startTime":"2021-02-15T06:00:00.000Z","endTime":"2021-02-15T10:00:00.000Z","subtitle":"Open de Pebble Beach. 4e tour. Circuit américain 2020/2021.","duration":"4h"},{"title":"Golf : Open de Pebble Beach","hour":"10h00","startTime":"2021-02-15T10:00:00.000Z","endTime":"2021-02-15T11:00:00.000Z","subtitle":"Open de Pebble Beach. Circuit américain 2013.","duration":"1h"},{"title":"Golf : Open de Pebble Beach","hour":"11h00","startTime":"2021-02-15T11:00:00.000Z","endTime":"2021-02-15T15:00:00.000Z","subtitle":"Open de Pebble Beach. 3e tour. Circuit américain 2020/2021.","duration":"4h"},{"title":"Golf : Open de Pebble Beach","hour":"15h00","startTime":"2021-02-15T15:00:00.000Z","endTime":"2021-02-15T15:05:00.000Z","subtitle":"Open de Pebble Beach. 4e tour. Circuit américain 2020/2021.","duration":"5h30min"},{"title":"Golf+, le mag","hour":"20h30","startTime":"2021-02-15T20:30:00.000Z","endTime":"2021-02-15T21:15:00.000Z","subtitle":"","duration":"45min"},{"title":"Golf : Open de Pebble Beach","hour":"21h15","startTime":"2021-02-15T21:15:00.000Z","endTime":"2021-02-16T01:15:00.000Z","subtitle":"Open de Pebble Beach. 4e tour. Circuit américain 2020/2021.","duration":"4h"}]}
```


Search a channel :

``` http://localhost:3008/search/golf ```

Returns :

```json
[{"name":"golf+","link":"https://www.programme-tv.net/programme/chaine/programme-golfplus-189.html","code":"189","slug":"golfplus","program":"/channel/golfplus"},{"name":"golf
channel","link":"https://www.programme-tv.net/programme/chaine/programme-golf-channel-354.html","code":"354","slug":"golf-channel","program":"/channel/golf-channel"}]
```


Get all the channels : 

```http://localhost:3008/channels```

Returns : 

```json
[{"name":"tf1","link":"https://www.programme-tv.net/programme/chaine/programme-tf1-19.html","code":"19","slug":"tf1","program":"/channel/tf1"},{"name":"france 2","link":"https://www.programme-tv.net/programme/chaine/programme-france-2-6.html","code":"6","slug":"france-2","program":"/channel/france-2"},{"name":"france 3","link":"https://www.programme-tv.net/programme/chaine/programme-france-3-7.html","code":"7","slug":"france-3","program":"/channel/france-3"},{"name":"canal+","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-2.html","code":"2","slug":"canalplus","program":"/channel/canalplus"},{"name":"france 5","link":"https://www.programme-tv.net/programme/chaine/programme-france-5-9.html","code":"9","slug":"france-5","program":"/channel/france-5"},{"name":"m6","link":"https://www.programme-tv.net/programme/chaine/programme-m6-12.html","code":"12","slug":"m6","program":"/channel/m6"},{"name":"arte","link":"https://www.programme-tv.net/programme/chaine/programme-arte-337.html","code":"337","slug":"arte","program":"/channel/arte"},{"name":"c8","link":"https://www.programme-tv.net/programme/chaine/programme-c8-4.html","code":"4","slug":"c8","program":"/channel/c8"},{"name":"w9","link":"https://www.programme-tv.net/programme/chaine/programme-w9-24.html","code":"24","slug":"w9","program":"/channel/w9"},{"name":"tmc","link":"https://www.programme-tv.net/programme/chaine/programme-tmc-21.html","code":"21","slug":"tmc","program":"/channel/tmc"},{"name":"tfx","link":"https://www.programme-tv.net/programme/chaine/programme-tfx-14.html","code":"14","slug":"tfx","program":"/channel/tfx"},{"name":"nrj 12","link":"https://www.programme-tv.net/programme/chaine/programme-nrj-12-13.html","code":"13","slug":"nrj-12","program":"/channel/nrj-12"},{"name":"la chaîne parlementaire","link":"https://www.programme-tv.net/programme/chaine/programme-la-chaine-parlementaire-11.html","code":"11","slug":"la-chaine-parlementaire","program":"/channel/la-chaine-parlementaire"},{"name":"france 4","link":"https://www.programme-tv.net/programme/chaine/programme-france-4-8.html","code":"8","slug":"france-4","program":"/channel/france-4"},{"name":"bfmtv","link":"https://www.programme-tv.net/programme/chaine/programme-bfmtv-25.html","code":"25","slug":"bfmtv","program":"/channel/bfmtv"},{"name":"cnews","link":"https://www.programme-tv.net/programme/chaine/programme-cnews-30.html","code":"30","slug":"cnews","program":"/channel/cnews"},{"name":"cstar","link":"https://www.programme-tv.net/programme/chaine/programme-cstar-28.html","code":"28","slug":"cstar","program":"/channel/cstar"},{"name":"gulli","link":"https://www.programme-tv.net/programme/chaine/programme-gulli-29.html","code":"29","slug":"gulli","program":"/channel/gulli"},{"name":"tf1 séries films","link":"https://www.programme-tv.net/programme/chaine/programme-tf1-series-films-201.html","code":"201","slug":"tf1-series-films","program":"/channel/tf1-series-films"},{"name":"l'equipe","link":"https://www.programme-tv.net/programme/chaine/programme-lequipe-204.html","code":"204","slug":"lequipe","program":"/channel/lequipe"},{"name":"6ter","link":"https://www.programme-tv.net/programme/chaine/programme-6ter-202.html","code":"202","slug":"6ter","program":"/channel/6ter"},{"name":"rmc story","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-story-203.html","code":"203","slug":"rmc-story","program":"/channel/rmc-story"},{"name":"rmc découverte","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-decouverte-205.html","code":"205","slug":"rmc-decouverte","program":"/channel/rmc-decouverte"},{"name":"chérie 25","link":"https://www.programme-tv.net/programme/chaine/programme-cherie-25-206.html","code":"206","slug":"cherie-25","program":"/channel/cherie-25"},{"name":"lci - la chaîne info","link":"https://www.programme-tv.net/programme/chaine/programme-lci-la-chaine-info-78.html","code":"78","slug":"lci-la-chaine-info","program":"/channel/lci-la-chaine-info"},{"name":"franceinfo","link":"https://www.programme-tv.net/programme/chaine/programme-franceinfo-307.html","code":"307","slug":"franceinfo","program":"/channel/franceinfo"},{"name":"canal+ cinéma","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-cinema-35.html","code":"35","slug":"canalplus-cinema","program":"/channel/canalplus-cinema"},{"name":"canal+ sport","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-sport-37.html","code":"37","slug":"canalplus-sport","program":"/channel/canalplus-sport"},{"name":"canal+ séries","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-series-227.html","code":"227","slug":"canalplus-series","program":"/channel/canalplus-series"},{"name":"canal+ family","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-family-149.html","code":"149","slug":"canalplus-family","program":"/channel/canalplus-family"},{"name":"canal+ décalé","link":"https://www.programme-tv.net/programme/chaine/programme-canalplus-decale-36.html","code":"36","slug":"canalplus-decale","program":"/channel/canalplus-decale"},{"name":"ciné+ premier","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-premier-3.html","code":"3","slug":"cineplus-premier","program":"/channel/cineplus-premier"},{"name":"ciné+ frisson","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-frisson-47.html","code":"47","slug":"cineplus-frisson","program":"/channel/cineplus-frisson"},{"name":"ciné+ emotion","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-emotion-45.html","code":"45","slug":"cineplus-emotion","program":"/channel/cineplus-emotion"},{"name":"ciné+ famiz","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-famiz-46.html","code":"46","slug":"cineplus-famiz","program":"/channel/cineplus-famiz"},{"name":"ciné+ club","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-club-43.html","code":"43","slug":"cineplus-club","program":"/channel/cineplus-club"},{"name":"ciné+ classic","link":"https://www.programme-tv.net/programme/chaine/programme-cineplus-classic-44.html","code":"44","slug":"cineplus-classic","program":"/channel/cineplus-classic"},{"name":"ocs max","link":"https://www.programme-tv.net/programme/chaine/programme-ocs-max-172.html","code":"172","slug":"ocs-max","program":"/channel/ocs-max"},{"name":"ocs city","link":"https://www.programme-tv.net/programme/chaine/programme-ocs-city-173.html","code":"173","slug":"ocs-city","program":"/channel/ocs-city"},{"name":"ocs choc","link":"https://www.programme-tv.net/programme/chaine/programme-ocs-choc-169.html","code":"169","slug":"ocs-choc","program":"/channel/ocs-choc"},{"name":"ocs géants","link":"https://www.programme-tv.net/programme/chaine/programme-ocs-geants-170.html","code":"170","slug":"ocs-geants","program":"/channel/ocs-geants"},{"name":"tcm cinéma","link":"https://www.programme-tv.net/programme/chaine/programme-tcm-cinema-113.html","code":"113","slug":"tcm-cinema","program":"/channel/tcm-cinema"},{"name":"paramount channel","link":"https://www.programme-tv.net/programme/chaine/programme-paramount-channel-226.html","code":"226","slug":"paramount-channel","program":"/channel/paramount-channel"},{"name":"action","link":"https://www.programme-tv.net/programme/chaine/programme-action-32.html","code":"32","slug":"action","program":"/channel/action"},{"name":"altice studio","link":"https://www.programme-tv.net/programme/chaine/programme-altice-studio-398.html","code":"398","slug":"altice-studio","program":"/channel/altice-studio"},{"name":"polar+","link":"https://www.programme-tv.net/programme/chaine/programme-polarplus-401.html","code":"401","slug":"polarplus","program":"/channel/polarplus"},{"name":"warner tv","link":"https://www.programme-tv.net/programme/chaine/programme-warner-tv-403.html","code":"403","slug":"warner-tv","program":"/channel/warner-tv"},{"name":"serieclub","link":"https://www.programme-tv.net/programme/chaine/programme-serieclub-18.html","code":"18","slug":"serieclub","program":"/channel/serieclub"},{"name":"tvbreizh","link":"https://www.programme-tv.net/programme/chaine/programme-tvbreizh-129.html","code":"129","slug":"tvbreizh","program":"/channel/tvbreizh"},{"name":"rtl 9","link":"https://www.programme-tv.net/programme/chaine/programme-rtl-9-17.html","code":"17","slug":"rtl-9","program":"/channel/rtl-9"},{"name":"ab 1","link":"https://www.programme-tv.net/programme/chaine/programme-ab-1-31.html","code":"31","slug":"ab-1","program":"/channel/ab-1"},{"name":"novelas tv","link":"https://www.programme-tv.net/programme/chaine/programme-novelas-tv-400.html","code":"400","slug":"novelas-tv","program":"/channel/novelas-tv"},{"name":"infosport+","link":"https://www.programme-tv.net/programme/chaine/programme-infosportplus-74.html","code":"74","slug":"infosportplus","program":"/channel/infosportplus"},{"name":"eurosport 1","link":"https://www.programme-tv.net/programme/chaine/programme-eurosport-1-5.html","code":"5","slug":"eurosport-1","program":"/channel/eurosport-1"},{"name":"eurosport 2","link":"https://www.programme-tv.net/programme/chaine/programme-eurosport-2-63.html","code":"63","slug":"eurosport-2","program":"/channel/eurosport-2"},{"name":"bein sports 1","link":"https://www.programme-tv.net/programme/chaine/programme-bein-sports-1-183.html","code":"183","slug":"bein-sports-1","program":"/channel/bein-sports-1"},{"name":"bein sports 2","link":"https://www.programme-tv.net/programme/chaine/programme-bein-sports-2-184.html","code":"184","slug":"bein-sports-2","program":"/channel/bein-sports-2"},{"name":"bein sports 3","link":"https://www.programme-tv.net/programme/chaine/programme-bein-sports-3-265.html","code":"265","slug":"bein-sports-3","program":"/channel/bein-sports-3"},{"name":"rmc sport 1","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-sport-1-452.html","code":"452","slug":"rmc-sport-1","program":"/channel/rmc-sport-1"},{"name":"rmc sport 2","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-sport-2-453.html","code":"453","slug":"rmc-sport-2","program":"/channel/rmc-sport-2"},{"name":"rmc sport 3","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-sport-3-454.html","code":"454","slug":"rmc-sport-3","program":"/channel/rmc-sport-3"},{"name":"rmc sport 4","link":"https://www.programme-tv.net/programme/chaine/programme-rmc-sport-4-335.html","code":"335","slug":"rmc-sport-4","program":"/channel/rmc-sport-4"},{"name":"golf+","link":"https://www.programme-tv.net/programme/chaine/programme-golfplus-189.html","code":"189","slug":"golfplus","program":"/channel/golfplus"},{"name":"automoto","link":"https://www.programme-tv.net/programme/chaine/programme-automoto-89.html","code":"89","slug":"automoto","program":"/channel/automoto"},{"name":"equidia","link":"https://www.programme-tv.net/programme/chaine/programme-equidia-59.html","code":"59","slug":"equidia","program":"/channel/equidia"},{"name":"comédie+","link":"https://www.programme-tv.net/programme/chaine/programme-comedieplus-27.html","code":"27","slug":"comedieplus","program":"/channel/comedieplus"},{"name":"olympia tv","link":"https://www.programme-tv.net/programme/chaine/programme-olympia-tv-479.html","code":"479","slug":"olympia-tv","program":"/channel/olympia-tv"},{"name":"non stop people hd","link":"https://www.programme-tv.net/programme/chaine/programme-non-stop-people-hd-241.html","code":"241","slug":"non-stop-people-hd","program":"/channel/non-stop-people-hd"},{"name":"paris première","link":"https://www.programme-tv.net/programme/chaine/programme-paris-premiere-15.html","code":"15","slug":"paris-premiere","program":"/channel/paris-premiere"},{"name":"téva","link":"https://www.programme-tv.net/programme/chaine/programme-teva-23.html","code":"23","slug":"teva","program":"/channel/teva"},{"name":"bet","link":"https://www.programme-tv.net/programme/chaine/programme-bet-299.html","code":"299","slug":"bet","program":"/channel/bet"},{"name":"tv5monde","link":"https://www.programme-tv.net/programme/chaine/programme-tv5monde-128.html","code":"128","slug":"tv5monde","program":"/channel/tv5monde"},{"name":"planète+","link":"https://www.programme-tv.net/programme/chaine/programme-planeteplus-16.html","code":"16","slug":"planeteplus","program":"/channel/planeteplus"},{"name":"planète+ crime investigation","link":"https://www.programme-tv.net/programme/chaine/programme-planeteplus-crime-investigation-151.html","code":"151","slug":"planeteplus-crime-investigation","program":"/channel/planeteplus-crime-investigation"},{"name":"planète+ aventure expérience","link":"https://www.programme-tv.net/programme/chaine/programme-planeteplus-aventure-experience-105.html","code":"105","slug":"planeteplus-aventure-experience","program":"/channel/planeteplus-aventure-experience"},{"name":"museum tv","link":"https://www.programme-tv.net/programme/chaine/programme-museum-tv-474.html","code":"474","slug":"museum-tv","program":"/channel/museum-tv"},{"name":"national geographic","link":"https://www.programme-tv.net/programme/chaine/programme-national-geographic-98.html","code":"98","slug":"national-geographic","program":"/channel/national-geographic"},{"name":"nat geo wild","link":"https://www.programme-tv.net/programme/chaine/programme-nat-geo-wild-207.html","code":"207","slug":"nat-geo-wild","program":"/channel/nat-geo-wild"},{"name":"ushuaïa tv","link":"https://www.programme-tv.net/programme/chaine/programme-ushuaia-tv-132.html","code":"132","slug":"ushuaia-tv","program":"/channel/ushuaia-tv"},{"name":"histoire tv","link":"https://www.programme-tv.net/programme/chaine/programme-histoire-tv-72.html","code":"72","slug":"histoire-tv","program":"/channel/histoire-tv"},{"name":"toute l'histoire","link":"https://www.programme-tv.net/programme/chaine/programme-toute-lhistoire-117.html","code":"117","slug":"toute-lhistoire","program":"/channel/toute-lhistoire"},{"name":"science & vie tv","link":"https://www.programme-tv.net/programme/chaine/programme-science-vie-tv-58.html","code":"58","slug":"science-vie-tv","program":"/channel/science-vie-tv"},{"name":"seasons","link":"https://www.programme-tv.net/programme/chaine/programme-seasons-111.html","code":"111","slug":"seasons","program":"/channel/seasons"},{"name":"chasse et pêche","link":"https://www.programme-tv.net/programme/chaine/programme-chasse-et-peche-42.html","code":"42","slug":"chasse-et-peche","program":"/channel/chasse-et-peche"},{"name":"animaux","link":"https://www.programme-tv.net/programme/chaine/programme-animaux-33.html","code":"33","slug":"animaux","program":"/channel/animaux"},{"name":"piwi+","link":"https://www.programme-tv.net/programme/chaine/programme-piwiplus-104.html","code":"104","slug":"piwiplus","program":"/channel/piwiplus"},{"name":"disney junior","link":"https://www.programme-tv.net/programme/chaine/programme-disney-junior-166.html","code":"166","slug":"disney-junior","program":"/channel/disney-junior"},{"name":"nickelodeon junior","link":"https://www.programme-tv.net/programme/chaine/programme-nickelodeon-junior-199.html","code":"199","slug":"nickelodeon-junior","program":"/channel/nickelodeon-junior"}]
```




Scrape all the channels available on the site : 



https://www.programme-tv.net/plan.html

```JavaScript 
const res = [...$$('.channelList-categoryChannelsItemTitle')].map(e => {

return {'name' : e.text.replace('↵','').trim(), 'link' : e.href}


})

JSON.stringify(res);
```

