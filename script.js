
alert("Dessert is delicious!");

function clickFunction() {
  // code in here
  document.getElementById("title").style.fontSize = "100px";
}

var state = 0;
function changeImage() {
  var current_src = document.getElementById("chococake").src;
  if (state == 0){
    document.getElementById("chococake").src = "chocake.jpg";
    state = 1;
}
  else {
    document.getElementById("chococake").src = "chococake.jpg";
    state = 0;
  }
}

var state2 = 0;
function changePicture() {
  var current_src = document.getElementById("cccookies").src;
  if (state2 == 0){
    document.getElementById("cccookies").src = "chococookies.jpg";
    state2 = 1;
}
  else {
    document.getElementById("cccookies").src = "ccookies.jpg";
    state2 = 0;
  }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
