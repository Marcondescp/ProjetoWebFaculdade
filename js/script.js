let inputVal = document.getElementById("valueInput");
let inputExecute = document.getElementById("inputExecute");
let inputReset = document.getElementById("inputCleanUp");
let result = document.getElementById("inputShowResult");
let myForm = document.getElementsByTagName("input");

let inputFatorial = document.getElementById("r1");
let inputQuadrado = document.getElementById("r2");
let inputCubo = document.getElementById("r3");
let inputRaiz = document.getElementById("r4");
let inputSeno = document.getElementById("r5");
let inputDivisao = document.getElementById("r6");

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


inputExecute.onclick = function () {
    result.innerText = "";
    if (inputFatorial.checked == true) {
        result.innerText = calcFatorial(inputVal.value);
    }
    else if (inputQuadrado.checked == true) {
        result.innerText = aoQuadrado(inputVal.value);
    }
    else if (inputCubo.checked == true) {
        result.innerText = aoCubo(inputVal.value);
    }
    else if (inputRaiz.checked == true) {
        result.innerText = calcRaiz(inputVal.value);
    }
    else if (inputSeno.checked == true) {
        result.innerText = calcSeno(inputVal.value);
    }
    else if (inputDivisao.checked == true) {
        result.innerText = calcDivisao(inputVal.value);
    }

}

inputReset.onclick = function () {
    for (let i = 0; i < myForm.length; i++) {
        if (myForm[i].type == "text") {
            myForm[i].value = "";
        }
    }
}

function calcFatorial(x) {
    if (x == 0) {
        return 1;
    }
    else if (x < 0) {
        return -1;
    }
    else {
        return x * calcFatorial(x - 1);
    }
}

function aoQuadrado(x) {
    return x * x;
}

function aoCubo(x) {

    return x * x * x;
}

function calcRaiz(x) {
    return Math.sqrt(x);
}

function calcSeno(x) {
    return Math.sin(x);
}

function calcDivisao(x) {
    return 1 / x;
}