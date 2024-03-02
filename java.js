var a1=document.getElementById('homebar')
var a2=document.getElementById('namebar1')
var a3=document.getElementById('profilepic')
var a4=document.getElementById('category1')

// anotherpage//

var a5=document.getElementById('personal')
var a6=document.getElementById('work')
var a7=document.getElementById('shopping')
var a8=document.getElementsByClassName('coding')
var a9=document.getElementById('personalmain')
var a10=document.getElementById('arrow')
var a11=document.getElementById('dot')
var a12=document.getElementById('newtaskbar')
var a13=document.getElementById('xmark')
var a14=document.getElementById('plus')


// personal
document.addEventListener("submit", myFunction);

function myFunction() {
  a5.style.display = ""
  a10.style.display=''
  a11.style.display=''
  a12.style.display = "block"
  a1.style.display = "none"
  a2.style.display = "none"
  a3.style.display = "none"
  a4.style.display = "none"
  a6.style.display = "none"
  a7.style.display = "none"
  a8.style.display = "none"
  a9.style.display = "none"
  a14.style.display="block"
}

// work
document.addEventListener("submit", work);

function work() {
  a5.style.display = "none"
  a10.style.display=''
  a11.style.display=''
  a1.style.display = "none"
  a2.style.display = "none"
  a3.style.display = "none"
  a4.style.display = "none"
  a6.style.display = "block"
  a7.style.display = "none"
  a8.style.display = "none"
  a9.style.display = "none"
  
}

// shopping
document.addEventListener("submit", shopping);

function shopping() {
  a5.style.display = "none"
  a10.style.display=''
  a11.style.display=''
  a1.style.display = "none"
  a2.style.display = "none"
  a3.style.display = "none"
  a4.style.display = "none"
  a6.style.display = "none"
  a7.style.display = "block"
  a8.style.display = "none"
  a9.style.display = "none"
  
}

document.addEventListener("submit", newtaskbar);
function newtaskbar(){
  a4.style.display = "none"
  a5.style.display = "block"
  a6.style.display = "none"
  a7.style.display = "none"
  a12.style.display = "block"
  a8.style.display = "none"
  a10.style.display='none'

}

document.addEventListener("submit", xmark);
function xmark(){
  a10.style.display='none'
  a11.style.display='none'
  a1.style.display = "block"
  a2.style.display = "block"
  a3.style.display = "block"
  a4.style.display = "block"
  a5.style.display = "none"
  a6.style.display = "none"
  a7.style.display = "none"
  a12.style.display = "none"
  a8.style.display = "block"
  a9.style.display='none'
  


}





document.addEventListener("submit", arrow);

function arrow(){
    a5.style.display = "none"
  a10.style.display='none'
  a12.style.display='none'
  a11.style.display='none'
  a1.style.display = "block"
  a2.style.display = "block "
  a3.style.display = "block "
  a4.style.display = "block "
  a6.style.display = "none "
  a7.style.display = "none "
  a8.style.display = "block "
  a9.style.display = "block "
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}