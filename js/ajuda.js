$(document).ready(function () {
    $('select').formSelect();
    $('.sidenav').sidenav();

    if ($(window).width() > 990) {
        $("#slide-out").addClass("hide");
        $(".sidenav-trigger").addClass("hide");
        $('.sidenav').sidenav();
    }

    if ($(window).width() < 960) {
        $("#slide-out").removeClass("hide");
        $(".sidenav-trigger").removeClass("hide");
    }

    $(window).resize(function () {
        if ($(window).width() > 990) {
            $("#slide-out").addClass("hide");
            $(".sidenav-trigger").addClass("hide");
            $('.sidenav').sidenav();
        }
        if ($(window).width() < 960) {
            $("#slide-out").removeClass("hide");
            $(".sidenav-trigger").removeClass("hide");
        }
    });
}); 