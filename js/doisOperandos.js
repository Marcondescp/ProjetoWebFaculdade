
let operador;

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

$("#inputExecute").click(function () {
    let x = parseInt($("#valueInput1").val());
    let y = parseInt($("#valueInput2").val());
    if (getOperador() == "+") {
        $("#inputShowResult").text(calcSoma(x, y));
    }
    if (getOperador() == "-") {
        $("#inputShowResult").text(calcSubtracao(x, y));
    }
    if (getOperador() == "/") {
        $("#inputShowResult").text(calcDivisao(x, y));
    }
    if (getOperador() == "*") {
        $("#inputShowResult").text(calcMultiplicacao(x, y));
    }
    if (getOperador() == "mod") {
        $("#inputShowResult").text(calcMod(x, y));
    }
    if (getOperador() == "Selecionar Operador") {
        return;
    }
});

$("#inputCleanUp").click(function () {
    reset();
});

function calcSoma(x, y) {
    if (x && y) {
        return x + y;
    }
    return;
}

function calcSubtracao(x, y) {
    if (x && y) {
        return x - y;
    }
    return;
}

function calcMultiplicacao(x, y) {
    if (x && y) {
        return x * y;
    }
    return;

}

function calcDivisao(x, y) {
    if (x && y) {
        return x / y;
    }
    return;
}

function calcMod(x, y) {
    if (x && y) {
        return x % y;
    }
    return;
}

function getOperador() {
    return $("#selectOperator option:selected").text();
}
function reset() {
    $("#valueInput1").val("");
    $("#valueInput2").val("");
    $("input:radio").prop("checked", false);
}

