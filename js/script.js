$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.bar_mobile').toggleClass('active');
        $('body').toggleClass('lock');
    });
})