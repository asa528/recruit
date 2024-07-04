const modalBtns = document.querySelectorAll('.js-modal-open'),
      closeBtns = document.querySelectorAll('.js-modal-close');

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  };
});

closeBtns.forEach(function (btn) {
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  console.log(event.target.className);
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};