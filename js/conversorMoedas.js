let realParaDolar = $("#r1");
let realParaEuro = $("#r2");
let dolarParaReal = $("#r3");
let euroParaReal = $("#r4");

$.ajax({
    type: "GET",
    url: 'https://api.exchangeratesapi.io/latest?base=USD',
    cache: false,
    success: function (data) {
        $("#valueInput2").focus().val((data.rates.BRL).toFixed(2));
    }
});

$.ajax({
    type: "GET",
    url: 'https://api.exchangeratesapi.io/latest?base=EUR',
    cache: false,
    success: function (data) {
        $("#valueInput3").focus().val((data.rates.BRL).toFixed(2));
    }
});





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

    $("#inputExecute").on("click",function () {
        $("#inputShowResult").text("");
        if (realParaDolar.is(":checked")) {
            let result = ($("#valueInput1").val() / $("#valueInput2").val()).toFixed(2);
            return $("#inputShowResult").text("US$"+result);
        }
        else
            if (realParaEuro.is(":checked")) {
                let result = ($("#valueInput1").val() / $("#valueInput3").val()).toFixed(2);
                return $("#inputShowResult").text("€"+result);
            }
            else
                if (dolarParaReal.is(":checked")) {
                    let result = ($("#valueInput2").val() * $("#valueInput1").val()).toFixed(2);
                    return $("#inputShowResult").text("R$"+result);
                }
                else
                    if (euroParaReal.is(":checked")) {
                        let result = ($("#valueInput3").val() * $("#valueInput1").val()).toFixed(2);
                        return $("#inputShowResult").text("R$"+result);
                    }

    });

    $("#inputCleanUp").click(function () {
        $("#inputShowResult").val(" ");
        $("#valueInput1").val("");
        $("input:radio").prop("checked", false);
    })
});