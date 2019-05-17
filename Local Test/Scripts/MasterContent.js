//sets up cookie and notice for first visit
var first_visit = getCookie("is-first-visit");

function loadFirstMessage() {
    if (first_visit == "") {
        if (langselect == "English") {
            $("#first-message-place").load("../Content.html #en-cookie-message-content");
        }
        else if (langselect == "Italian") {
            $("#first-message-place").load("../Content.html #it-cookie-message-content");
        }
        else if (langselect == "Russian") {
            $("#first-message-place").load("../Content.html #ru-cookie-message-content");
        }
        else if (langselect == "French") {
            $("#first-message-place").load("../Content.html #fr-cookie-message-content");
        }
        else if (langselect == "Spanish") {
            $("#first-message-place").load("../Content.html #sp-cookie-message-content");
        }
        else {
            $("#first-message-place").load("..Content.html #en-cookie-message-content");
        }
    }
    else if (first_visit == "1") {
        return;
    }
    
}

function acceptButton() {
    setCookie("is-first-visit", "1", 365);
    $("#first-message-place").css("display", "none");
}

//sets up cookie management for language selection
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var langselect = getCookie("langval");

//language switchers
function enswitch() {
    document.cookie="langval=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("langval", "English", 365);
    location.reload();
    return;
}
function itswitch() {
    document.cookie="langval=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("langval", "Italian", 365);
    location.reload();
    return;
}
function ruswitch() {
    document.cookie="langval=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("langval", "Russian", 365);
    location.reload();
    return;
}
function spswitch() {
    document.cookie="langval=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("langval", "Spanish", 365);
    location.reload();
    return;
}
function frswitch() {
    document.cookie="langval=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("langval", "French", 365);
    location.reload();
    return;
}

//this loads menu
function load_menu() {
    if (langselect == "English") {
        $("#menuplace").load("../Content.html #enmenucontent");
    }
    else if (langselect == "Italian") {
        $("#menuplace").load("../Content.html #itmenucontent");
    }
    else if (langselect == "Russian") {
        $("#menuplace").load("../Content.html #rumenucontent");
    }
    else if (langselect == "Spanish") {
        $("#menuplace").load("../Content.html #spmenucontent");
    }
    else if (langselect == "French") {
        $("#menuplace").load("../Content.html #frmenucontent");
    }
    else{
        $("#menuplace").load("../Content.html #enmenucontent");
    }
}

//this loads footers
function load_footer() {
    if (langselect == "English") {
        $("#footerplace").load("../Content.html #enfooter");
    }
    else if (langselect == "Italian") {
        $("#footerplace").load("../Content.html #itfooter");
    }
    else if (langselect == "Russian") {
        $("#footerplace").load("../Content.html #rufooter");
    }
    else if (langselect == "Spanish") {
        $("#footerplace").load("../Content.html #spfooter");
    }
    else if (langselect == "French") {
        $("#footerplace").load("../Content.html #frfooter");
    }
    else {
        $("#footerplace").load("../Content.html #enfooter");
    }
}


//this loads homepages
function load_home() {
    if (langselect == "English") {
        $("#homeplace").load("../Content.html #enhome");
    }
    else if (langselect == "Italian") {
        $("#homeplace").load("../Content.html #ithome");
    }
    else if (langselect == "Russian") {
        $("#homeplace").load("../Content.html #ruhome");
    }
    else if (langselect == "Spanish") {
        $("#homeplace").load("../Content.html #sphome");
    }
    else if (langselect == "French") {
        $("#homeplace").load("../Content.html #frhome");
    }
    else{
        $("#homeplace").load("../Content.html #enhome");
    }
}
//this loads about pages
function load_about() {
    if (langselect == "English") {
        $("#aboutplace").load("../Content.html #enabout");
    }
    else if (langselect == "Italian") {
        $("#aboutplace").load("../Content.html #itabout");
    }
    else if (langselect == "Russian") {
        $("#aboutplace").load("../Content.html #ruabout");
    }
    else if (langselect == "Spanish") {
        $("#aboutplace").load("../Content.html #spabout");
    }
    else if (langselect == "French") {
        $("#aboutplace").load("../Content.html #frabout");
    }
    else{
        $("#aboutplace").load("../Content.html #enabout");
    }
}
//this loads the language proficiency pages
function load_lp() {
    if (langselect == "English") {
        $("#lpplace").load("../Content.html #enlp");
    }
    else if (langselect == "Italian") {
        $("#lpplace").load("../Content.html #itlp");
    }
    else if (langselect == "Russian") {
        $("#lpplace").load("../Content.html #rulp");
    }
    else if (langselect == "Spanish") {
        $("#lpplace").load("../Content.html #splp");
    }
    else if (langselect == "French") {
        $("#lpplace").load("../Content.html #frlp");
    }
    else{
        $("#lpplace").load("../Content.html #enlp");   
    }
}
//this loads the tutoring services pages
function load_ts() {
    if (langselect == "English") {
        $("#tsplace").load("../Content.html #ents");
    }
    else if (langselect == "Italian") {
        $("#tsplace").load("../Content.html #itts");
    }
    else if (langselect == "Russian") {
        $("#tsplace").load("../Content.html #ruts");
    }
    else if (langselect == "Spanish") {
        $("#tsplace").load("../Content.html #spts");
    }
    else if (langselect == "French") {
        $("#tsplace").load("../Content.html #frts");
    }
    else{
        $("#tsplace").load("../Content.html #ents");
    }
}
//this loads contact pages
function load_contact() {
    if (langselect == "English") {
        $("#contactplace").load("../Content.html #encontact");
    }
    else if (langselect == "Italian") {
        $("#contactplace").load("../Content.html #itcontact");
    }
    else if (langselect == "Russian") {
        $("#contactplace").load("../Content.html #rucontact");
    }
    else if (langselect == "Spanish") {
        $("#contactplace").load("../Content.html #spcontact");
    }
    else if (langselect == "French") {
        $("#contactplace").load("../Content.html #frcontact");
    }
    else{
        $("#contactplace").load("../Content.html #encontact");
    }
}