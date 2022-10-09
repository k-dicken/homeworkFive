import * as MODEL from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  trace("app.js 7", hashTag + " " + pageID);

  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, buyNow);
  } else if (pageID == "blog") {
    MODEL.changePage(pageID, blogListeners);
  } else if (pageID == "account") {
    MODEL.changePage(pageID, accountListeners);
  } else {
    MODEL.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function buyNow() {
  $("button").on("click", function (e) {
    let bookID = e.currentTarget.id;

    MODEL.addToCart(bookID);
  });
}

function initSubmitListener() {
  $("#submit").on("click", function (e) {
    trace("app.js 19", "submit");

    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#email").val();
    let pw = $("#pw").val();

    if (fn == "") {
      alert("enter first name");
    } else if (ln == "") {
      alert("enter last name");
    } else if (em == "") {
      alert("enter email");
    } else if (pw == "") {
      alert("enter password");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };
      MODEL.setUserInfo(userObj);
    }

    trace("#app 44", `${fn} ${ln} ${email} ${pw}`);
  });
}

function accountListeners() {
  $("#submitLogIn").on("click", function (e) {
    let em = $("#emailLogin").val();
    let pw = $("#passwordLogin").val();

    if (em == "") {
      alert("Please enter your email.");
    } else if (pw == "") {
      alert("Please enter your password.");
    } else {
      // log the user in.

      $("#emailLogin").val("");
      $("#passwordLogin").val("");
    }
  });

  $("#submitSignUp").on("click", function (e) {
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#emailSignUp").val();
    let pw = $("#passwordSignUp").val();

    if (fn == "") {
      alert("Please provide your first name.");
    } else if (ln == "") {
      alert("Please provide your last name.");
    } else if (em == "") {
      alert("Please provide your email.");
    } else if (pw == "") {
      alert("Please provide a password.");
    } else {
      // sign up the user.

      $("#fName").val("");
      $("#lName").val("");
      $("#emailSignUp").val("");
      $("#passwordSignUp").val("");
    }
  });
}

function blogListeners() {
  $("#feb").on("click", function (e) {
    // e.preventDefault();
    console.log("hi");
  });

  $("#club").on("click", function (e) {
    // e.preventDefault();
    console.log("hi2");
  });

  $("#eReading").on("click", function (e) {
    // e.preventDefault();
    console.log("hi3");
  });
}

function trace(fileName, log) {
  console.log(fileName, log);
}

$(document).ready(function () {
  initURLListener();
});
