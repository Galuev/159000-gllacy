var modal_show = document.querySelector(".show-feedback-modal");
var modal = document.querySelector(".feedback-popup");
var overlay = document.querySelector(".popup-overlay");
var close_modal = modal.querySelector(".close-popup");

var feedback_form = modal.querySelector("form");
var feedback_name = modal.querySelector("[name=name]");
var feedback_email = modal.querySelector("[name=email]");
var feedback_message = modal.querySelector("[name=comment]");

var storage_feedback_name = localStorage.getItem("feedback_name");
var storage_feedback_email = localStorage.getItem("feedback_email");

var blue_labels = modal.querySelector("label");

// открываю модальное окно + проверяю local storage
modal_show.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.add("show-modal");
  overlay.classList.add("show-overlay");
  if (storage_feedback_name) {
    feedback_name.value = storage_feedback_name;
    feedback_email.focus();
  } else if (storage_feedback_email) {
    feedback_email.value = storage_feedback_email;
    feedback_message.focus();
  } else {
    feedback_name.focus();
  }
});

// закрываю модальное окно при клике на крестик
close_modal.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.remove("show-modal");
  modal.classList.remove("modal-error");
  overlay.classList.remove("show-overlay");
});

// закрываю модальное окно при клике на overlay
overlay.addEventListener("click", function() {
  modal.classList.remove("show-modal");
  modal.classList.remove("modal-error");
  overlay.classList.remove("show-overlay");
});

// валидация полей ввода модального окна + сохраняем данные в local storage
feedback_form.addEventListener("submit", function(e) {
  if (!feedback_name.value || !feedback_email.value || !feedback_message.value) {
    e.preventDefault();
    modal.classList.remove("modal-error");
    // modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("storage_feedback_name", feedback_email.value);
    localStorage.setItem("fstorage_feedback_email", feedback_email.value);
  }
});

// закрываю модальное окно + убираю overlay escape'ом
window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains("show-modal")) {
      modal.classList.remove("show-modal");
      modal.classList.remove("modal-error");
      overlay.classList.remove("show-overlay");
    }
  }
});