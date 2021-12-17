// This is a JavaScript file

function changeColor(idname){

  let colorSelect = document.getElementById('color1'); //セレクトボックスを指定

  console.log('選択されているのは ' + colorSelect.value + ' です');
  const textbox = document.getElementById("taskName"); //タスク名を参照
  const taskNameValue = textbox.value; //タスク名を取得する

  const num = colorSelect.selectedIndex; //セレクトボックスのインデックスを取得
  const str = colorSelect.options[num].value; //インデックスを参照して色の値を取得
  var obj = document.getElementById(idname); //タスク名を表示させる領域
  obj.textContent = taskNameValue; //タスク名を表示させる
  obj.style.color = str;            //文字色をセレクトボックスのvalueが持つ値の色に
  obj.style.border = str;  //背景色を赤にする
}