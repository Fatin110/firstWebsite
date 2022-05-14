window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 15) {
    document.getElementById("navId").className = "test";
  } else {
    document.getElementById("navId").className = "";
  }
}
