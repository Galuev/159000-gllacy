var product_preview = document.querySelectorAll(".product-box .btn");



// убираю переходы по ссылкам (быстрый просмотр) Д-18
for (var i = 0; i < product_preview.length; i++) {
    product_preview[i].addEventListener('click', function(event) {
       event.preventDefault();
    });
}