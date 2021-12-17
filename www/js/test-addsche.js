// This is a JavaScript file

function addftask(){

var summary = document.getElementById("summary").value;
var startDateTime = document.getElementById("startdate").value + "T" + document.getElementById("starttime").value + ":00+09:00";
var endDateTime = document.getElementById("enddate").value + "T" + document.getElementById("endtime").value + ":00+09:00";

console.log(summary);
console.log("start=" + startDateTime);

var event = {
  'summary': summary,
  //'location': '800 Howard St., San Francisco, CA 94103',
  //'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    //'dateTime': '2015-05-28T09:00:00-07:00',
    'dateTime': startDateTime,
    'timeZone': 'Asia/Tokyo'
  },
  'end': {
    'dateTime': endDateTime,
    'timeZone': 'Asia/Tokyo'
  }/*,
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ]
  ,
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
  */
};

var request = gapi.client.calendar.events.insert({
  'calendarId': 'm8h4.3910sh@keio.jp',
  'resource': event
});

request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});

}