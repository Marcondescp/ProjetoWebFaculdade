let listaBinario = [];
let showResult = $("#inputShowResult");
let btnExecutar = $("#inputExecute");
let btnLimpar = $("#inputCleanUp");
let result;
let valor = $("#valueInput");


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

    $(btnExecutar).on("click", function () {
        if ($("#r1").is(":checked")) {
            if ($.isNumeric(valor.val())) {
                return showResult.text(decimalParaBinario(valor.val()));
            }
            else {
                console.log("not a number!");
                return;
            }
        }
        if ($("#r2").is(":checked")) {
            if ($.isNumeric(valor.val())) {
                return showResult.text(decimalParaHex(valor.val()));
            }
            else {
                console.log("not a number!");
                return;
            }
        }
        if ($("#r3").is(":checked")) {
            if ($.isNumeric(valor.val())) {
                return showResult.text(binarioParaDecimal(valor.val()));
            }
            else {
                console.log("not a number!");
                return;
            }
        }
        if ($("#r4").is(":checked")) {
            if (valor.val()) {
                return showResult.text(hexParaDecimal(valor.val()));
            }
            else {
                console.log("not a number!");
                return;
            }
        }
    });
    $(btnLimpar).on("click", function () {
        showResult.text("");
        valor.val("");
        $("input:radio").prop("checked", false);
    });
});

function decimalParaBinario(num) {
    return parseInt(num, 10).toString(2);
}
function decimalParaHex(num) {
    return parseInt(num, 10).toString(16).toUpperCase();
}

function binarioParaDecimal(num) {
    return parseInt(num, 2).toString(10);
}

function hexParaDecimal(num) {
    return parseInt(num, 16).toString(10);
}