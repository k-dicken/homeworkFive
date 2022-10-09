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
  let user = MODEL.getUserInfo();

  if (user.loggedIn == true) {
    SwitchAccountView(user.firstName, user.email);
  }

  $("#submitLogIn").on("click", function (e) {
    let user = MODEL.getUserInfo();

    let em = $("#emailLogin").val();
    let pw = $("#passwordLogin").val();

    if (em == "") {
      alert("Please enter your email.");
    } else if (pw == "") {
      alert("Please enter your password.");
    } else {
      if (jQuery.isEmptyObject(user)) {
        alert("No account found. Try signing up first.");
      } else if (em == user.email && pw == user.password) {
        $("#emailLogin").val("");
        $("#passwordLogin").val("");

        user.loggedIn = true;

        SwitchAccountView(user.firstName, user.email);
      }
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
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
        loggedIn: true,
      };

      MODEL.setUserInfo(userObj);

      $("#username").html(fn);

      SwitchAccountView(fn, em);

      $("#fName").val("");
      $("#lName").val("");
      $("#emailSignUp").val("");
      $("#passwordSignUp").val("");
    }
  });
}

function SwitchAccountView(firstName, email) {
  $(".loginForm").css("display", "none");
  $(".signUpForm").css("display", "none");
  $(".loggedInView").css("display", "block");

  $("#welcomeText").html(`Welcome, ${firstName}!`);
  $("#emailText").html(`${email}`);

  $("#logOut").on("click", function (e) {
    MODEL.logOutUser();
    $("#username").html("Account");

    $(".loginForm").css("display", "block");
    $(".signUpForm").css("display", "block");
    $(".loggedInView").css("display", "none");
  });
}

function blogListeners() {
  let user = MODEL.getUserInfo();

  $("#feb").on("click", function (e) {
    if (jQuery.isEmptyObject(user) || user.loggedIn == false) {
      e.preventDefault();
      alert("Please log in to view this page.");
    }
  });

  $("#club").on("click", function (e) {
    if (jQuery.isEmptyObject(user) || user.loggedIn == false) {
      e.preventDefault();
      alert("Please log in to view this page.");
    }
  });

  $("#eReading").on("click", function (e) {
    if (jQuery.isEmptyObject(user) || user.loggedIn == false) {
      e.preventDefault();
      alert("Please log in to view this page.");
    }
  });
}

function trace(fileName, log) {
  console.log(fileName, log);
}

$(document).ready(function () {
  initURLListener();
});
