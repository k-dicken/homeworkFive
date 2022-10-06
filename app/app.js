import * as MODEL from './model.js';

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    trace("app.js 7", hashTag + ' ' + pageID);

    if(pageID == "" || pageID == "home") {
        MODEL.changePage(pageID, initSubmitListener);
    } else if (pageID == "books") {
        MODEL.changePage(pageID, buyNow);
    } else {
        MODEL.changePage(pageID);
    }

}   

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

function buyNow() {
    // console.log("buy init");
    $("button").on("click", function (e) {
        let bookID = e.currentTarget.id;

        MODEL.addToCart(bookID);
    })
}

function initSubmitListener() {
    $("#submit").on("click", function (e) {
        trace("app.js 19", "submit");

        let fn = $("#fName").val();
        let ln = $("#lName").val();
        let em = $("#email").val();
        let pw = $("#pw").val();

        if(fn == "") {
            alert("enter first name");
        } else if (ln == "") {
            alert("enter lase name");
        } else if (em == "") {
            alert("enter email");
        } else if (pw == "") {
            alert("enter password");
        } else {
            let userObj = {
                firstName: fn,
                lastName: ln,
                email: em,
                password: pw
            };
            MODEL.setUserInfo(userObj);
        }

        trace("#app 44", `${fn} ${ln} ${email} ${pw}`);
    })
}

function trace(fileName, log) {
    // console.log(fileName, log);
}

$(document).ready(function () {
    initURLListener();
});