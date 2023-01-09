let btn = document.getElementById("btn1");
btn.addEventListener('click',GetFlag)
let ThoughtOutofBox = false;
function GetFlag(){
    if (ThoughtOutofBox == true) {
        window.location.href="./Folder/2.html";
      } else {
        window.location.href="./Folder/1.html";
    }
    
}

