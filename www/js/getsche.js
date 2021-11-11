// This is a JavaScript file
    const API_KEY = 'AIzaSyDkW_9wB74gKLPrlmFu_nMfGvWafUqBlJ4'
    const CALENDAR_ID = 'v97ubr9ndnbu7canvgmf0rrt98@group.calendar.google.com';

    function start() {
      gapi.client.init({
        'apiKey': API_KEY,
      }).then(function() {
        return gapi.client.request({
          'path': 'https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(CALENDAR_ID) + '/events'
        })
      }).then(function(response) {
        let resultArea = document.getElementById('resultArea');
        let items = response.result.items;
        for(let i = 0; i < items.length; i++){
          
          //[[year,month day],[hh,mm]]
          items[i].start.dateTime = items[i].start.dateTime.split('T');
          items[i].start.dateTime[0] = items[i].start.dateTime[0].split('-');
          items[i].start.dateTime[1] = items[i].start.dateTime[1].slice(0, -9);
          items[i].start.dateTime[1] = items[i].start.dateTime[1].split(':');

          items[i].end.dateTime = items[i].end.dateTime.split('T');
          items[i].end.dateTime[0] = items[i].end.dateTime[0].split('-');
          items[i].end.dateTime[1] = items[i].end.dateTime[1].slice(0, -9);
          items[i].end.dateTime[1] = items[i].end.dateTime[1].split(':');

          var tasktime = ((((items[i].end.dateTime[1][0] * 60)) - (items[i].start.dateTime[1][0] * 60)) / 60) + (items[i].end.dateTime[1][1] - items[i].start.dateTime[1][1]) / 60;

          resultArea.insertAdjacentHTML('beforeend', '<div class="taskbox"><p>' + items[i].summary + ": " + items[i].start.dateTime[0][1] + "月" + items[i].start.dateTime[0][2] + "日" + " " + items[i].start.dateTime[1][0] + ":" + items[i].start.dateTime[1][1] + "~ (" + tasktime.toFixed(1) + "h)" + '</p></div>')

        }
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };

    gapi.load('client', start);
