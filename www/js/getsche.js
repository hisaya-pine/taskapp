// This is a JavaScript file
console.log("Started loading getsche.js now.");

const API_KEY = 'AIzaSyDkW_9wB74gKLPrlmFu_nMfGvWafUqBlJ4'
const CALENDAR_ID = 'm8h4.3910sh@keio.jp';
//const CALENDAR_ID = 'v97ubr9ndnbu7canvgmf0rrt98@group.calendar.google.com';
const params = {
  timeMin: '2021-12-15T00:00:00+09:00',
  timeMax: '2021-12-17T00:00:00+09:00'
};
const queryString = Object.keys(params).map(name => `${name}=${encodeURIComponent(params[name])}`).join('&');


function start(resultID) {
  //
  /*
  setTimeout(function(){
    console.log("I am the third log after 1 seconds");
  },1000);
  */

  gapi.client.init({
    'apiKey': API_KEY,
  }).then(function () {
    return gapi.client.request({
      'path': 'https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(CALENDAR_ID) + '/events?' + queryString
    })
  }).then(function (response) {
    let resultArea = document.getElementById(resultID);
    let items = response.result.items;

/*
    //日付順にソート
    var sf = 1.3;
    var gap = items.length;
    var flag = true;
    while (flag || (gap > 1)) {
      gap = Math.floor(gap / sf);
      if (gap < 1) gap = 1;
      //if ((gap = 9) || (gap = 10)) gap = 11; // コムソート11の場合はこのコメントを外す
      flag = true;
      for (var i = 0; i < items.length - gap; i++) {
        var j = i + gap;
        console.log(j);
        var text1 = new Date(items[i].start.dateTime);
        var text2 = new Date(items[j].start.dateTime);
        if (text1 > text2) {
          var n = items[i];
          items[i] = items[j];
          items[j] = n;
          flag = false;
        }
      }
    }
*/

    //resultArea.insertAdjacentHTML('beforeend', '<div class="taskbox"><p>' + items.length + '</p></div>');

    for (let i = 0; i < items.length; i++) {
      //resultArea.insertAdjacentHTML('beforeend', (i+1) + "." + items[i].id);
      /*
      if(items[i].id == undefined) {
        resultArea.insertAdjacentHTML('beforeend', '<div class="taskbox"><p>' + "error!" + '</p></div>');
        break;
      }
      */
      //"year"-"month"-"day"T"hh":"mm":"ss""timezone" -> [[year,month day],[hh,mm]]
      items[i].start.dateTime = items[i].start.dateTime.split('T');
      items[i].start.dateTime[0] = items[i].start.dateTime[0].split('-');
      items[i].start.dateTime[1] = items[i].start.dateTime[1].slice(0, -9);
      items[i].start.dateTime[1] = items[i].start.dateTime[1].split(':');
      items[i].end.dateTime = items[i].end.dateTime.split('T');
      items[i].end.dateTime[0] = items[i].end.dateTime[0].split('-');
      items[i].end.dateTime[1] = items[i].end.dateTime[1].slice(0, -9);
      items[i].end.dateTime[1] = items[i].end.dateTime[1].split(':');
      var tasktime = ((((items[i].end.dateTime[1][0] * 60)) - (items[i].start.dateTime[1][0] * 60)) / 60) + (items[i].end.dateTime[1][1] - items[i].start.dateTime[1][1]) / 60;
      if(tasktime < 0) {
        tasktime += 24;
      }
      resultArea.insertAdjacentHTML('beforeend', '<div class="taskbox"><p>' + items[i].summary + ": " + items[i].start.dateTime[0][1] + "月" + items[i].start.dateTime[0][2] + "日" + " " + items[i].start.dateTime[1][0] + ":" + items[i].start.dateTime[1][1] + "~ (" + tasktime.toFixed(1) + "h)" + '</p></div>')
      
    }

  }, function (reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
gapi.load('client', start);

console.log("Finished loading getsche.js now.")