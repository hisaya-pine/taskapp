// This is a JavaScript file
console.log("Started loading show_todays_task.js now.");

//const API_KEY = 'AIzaSyDkW_9wB74gKLPrlmFu_nMfGvWafUqBlJ4'
//const CALENDAR_ID = 'm8h4.3910sh@keio.jp';
//const CALENDAR_ID = 'v97ubr9ndnbu7canvgmf0rrt98@group.calendar.google.com';

const paramsToday = {
  timeMin: '2021-12-16T00:00:00+09:00',
  timeMax: '2021-12-17T00:00:00+09:00'
};
const queryStringToday = Object.keys(paramsToday).map(name => `${name}=${encodeURIComponent(paramsToday[name])}`).join('&');


function startToday(resultID) {

  gapi.client.init({
    'apiKey': API_KEY,
  }).then(function () {
    return gapi.client.request({
      'path': 'https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(CALENDAR_ID) + '/events?' + queryStringToday
    })
  }).then(function (response) {
    let resultArea = document.getElementById(resultID);
    let items = response.result.items;

    var hourCheck = Array(24);
    hourCheck.fill(true);
    var hourBox = Array(24);
    hourBox.fill("なし");

    for (let i = 0; i < items.length; i++) {
      //"year"-"month"-"day"T"hh":"mm":"ss""timezone" -> [[year,month day],[hh,mm]]
      items[i].start.dateTime = items[i].start.dateTime.split('T');
      items[i].start.dateTime[0] = items[i].start.dateTime[0].split('-');
      items[i].start.dateTime[1] = items[i].start.dateTime[1].slice(0, -9);
      items[i].start.dateTime[1] = items[i].start.dateTime[1].split(':');
      items[i].end.dateTime = items[i].end.dateTime.split('T');
      items[i].end.dateTime[0] = items[i].end.dateTime[0].split('-');
      items[i].end.dateTime[1] = items[i].end.dateTime[1].slice(0, -9);
      items[i].end.dateTime[1] = items[i].end.dateTime[1].split(':');
      
      /*
      resultArea.insertAdjacentHTML('beforeend', '<div class="taskbox"><p>' + items[i].summary + ": " + items[i].start.dateTime[0][1] + "月" + items[i].start.dateTime[0][2] + "日" + " " + items[i].start.dateTime[1][0] + ":" + items[i].start.dateTime[1][1] + "~ (" + tasktime.toFixed(1) + "h)" + '</p></div>')
      */
      
      for (let j = Number(items[i].start.dateTime[1][0]); j < Number(items[i].end.dateTime[1][0]); j++){
        if(hourCheck[j]) {
          hourBox[j] = items[i].summary;
          hourCheck[j] = false;
        }
      }
    }

    for (let i = 7; i < 24; i++){
      today.appendChild(ons.createElement('<ons-carousel-item class="todaystaskbox">' + i + ":00" + '<div>' + hourBox[i] + '</div></ons-carousel-item>'));
    }

  }, function (reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
gapi.load('client', start);

console.log("Finished loading show_todays_task.js now.")