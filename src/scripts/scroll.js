window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("slide").style.backgroundColor = "#bedbbf";
    document.getElementById("slide").style.opacity = "1";
    document.getElementById("slide").style.transition = "0.5s";
  } else {
    document.getElementById("slide").style.backgroundColor = "";
    document.getElementById("slide").style.opacity = "";
    document.getElementById("slide").style.transition = "0.5s";
  }
}
