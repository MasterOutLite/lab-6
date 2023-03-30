$(document).ready(function () {
  var slideIndex = 0;
  showSlides();
  $("#next").click(() => {
    console.log("Click next");
    nextShow();
  });

  $("#back").click(() => {
    console.log("Click back");
    previewShow();
  });

  function nextShow() {
    var slides = $(".slider-item");
    for (var i = 0; i < slides.length; i++) {
      $(slides[i]).removeClass("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    $(slides[slideIndex - 1]).addClass("active");
  }

  function previewShow() {
    var slides = $(".slider-item");
    for (var i = 0; i < slides.length; i++) {
      $(slides[i]).removeClass("active");
    }
    slideIndex--;
    if (slideIndex <= 0) {
      slideIndex = slides.length;
    }
    $(slides[slideIndex - 1]).addClass("active");
  }

  function showSlides() {
    nextShow();
    setTimeout(showSlides, 5000); // затримка для автоматичного переходу до наступного слайда
  }

  $(".thumbnails img").click(function () {
    // Отримуємо шлях до зображення
    var src = $(this).attr("src");

    // Змінюємо зображення в блоку з прев'ю
    $(".preview img").attr("src", src);
  });
});
