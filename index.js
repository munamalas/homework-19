//Preloader animation
function fade(){
    $(".preloader").fadeOut("slow")
};
setTimeout(fade, 4000);

//Collapsable Menu
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }