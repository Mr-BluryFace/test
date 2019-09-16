window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("perc").className = "test";
    document.getElementById("perc").id = "";
  }
   if (document.body.scrollTop = 50 || document.documentElement.scrollTop < 50) {
    document.getElementsByClassName("test").id = "perc";
  }
}
