// This is a JavaScript file

  function combSort(){
    var sf = 1.3;
    var gap = items.length;
    var flag = true;
    while(flag || (gap > 1)) {
      gap = Math.floor(gap/sf);
      if (gap < 1) gap = 1;
      //if ((gap = 9) || (gap = 10)) gap = 11; // コムソート11の場合はこのコメントを外す
      flag = true;
      for (var i=0; i<=items.length-gap; i++) {
        var j = i + gap;
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
  }