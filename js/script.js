"use strict";
$(document).ready(function () {
  /*==========  Variables  ==========*/
  const BURGER = document.querySelector(".burger");
  const NAV = document.querySelector(".nav-links");
  const NAVLINKS = document.querySelectorAll(".nav-links li");
  const BODY = document.querySelector("body");
  const BTNHEADER1 = document.getElementById("btn-header1");
  const BTNHEADER2 = document.getElementById("btn-header2");
  const searchInputPhone = document.getElementById("search-input-phone");
  const searchBtn = document.getElementById("search-btn");
  const userBtn = document.getElementById("user");
  const btnSearchClose = document.getElementById("btn-search-close");
  const services = document.querySelector("#services");
  const navMenu = document.querySelector(".nav-menu");
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const emailOrPhone = document.getElementById("email-or-phone");
  const signinPhone = document.getElementById("signin-phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const signinPassword = document.getElementById("signin-password");
  const signUpBtn = document.getElementById("sign-up");
  const LoginSignin = document.getElementById("login-signin");
  const loginCloseBtn = document.getElementById("login-close-btn");
  const loginBtn = document.getElementById("login-btn");
  const siginBtn = document.getElementById("sigin-btn");
  const login = document.querySelector(".login");
  const signin = document.querySelector(".signin");

  /*==========  Nabbar Section  ==========*/

  const burgerClick = function burgerClick() {
    /*==========  Lock and Unlock Scroll  ==========*/
    if (!$(".nav-links").hasClass("nav-active")) {
      $("body").css({ overflow: "hidden" });
      $(document).bind("scroll", function () {
        window.scrollTo(0, 0);
      });
    } else if ($(".nav-links").hasClass("nav-active")) {
      $(document).unbind("scroll");
      $("body").css({ overflow: "visible" });
    }

    NAV.classList.toggle("nav-active");
    BODY.classList.toggle("bg-blur");
    BTNHEADER1.classList.toggle("bg-blur");
    BTNHEADER2.classList.toggle("bg-blur");
    NAVLINKS.forEach(function (link, index) {
      if (link.style.animation == "") {
        // link.style.background = "";
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      } else {
        //   // animate     = () =>{
        link.style.animation = "";
        // }
        //   // setTimeout(animate,300);
      }
    });

    /*==========  Enable/Disable Btns  ==========*/
    if ($(".nav-links").hasClass("nav-active")) {
      searchBtn.disabled = true;
      userBtn.disabled = true;
    } else {
      searchBtn.disabled = false;
      userBtn.disabled = false;
    }
  };
  /*==========  Dropdown  ==========*/

  if (innerWidth > 991.98) {
    services.onclick = () => {
      navMenu.classList.toggle("opacity");
      navMenu.classList.toggle("zindexPos");
    };




  /*==========  Form Validation  ==========*/

  /* Show input error message */

  const showError = function (input, message) {
    const formControl = input.parentElement;
    formControl.classList = "myform-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  };
  /* Show input error message */
  const showSuccess = function (input) {
    const formControl = input.parentElement;
    formControl.classList = "myform-control success";
  };
  /* Check email is valid */
  const CheckEmail = function (input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "ایمیل معتبر نیست");
    }
  };

  /* Check required fields */
  const checkRequired = function (inputArr) {
    inputArr.forEach(function (input) {
      /* input id's to farsi */
      const toPersian = function (inputId) {
        if (inputId === "username") {
          inputId = "نام کاربری";
          return inputId;
        } else if (inputId === "email") {
          inputId = "ایمیل";
          return inputId;
        } else if (inputId === "password") {
          inputId = "رمز عبور";
          return inputId;
        }
      };
      if (input.value.trim() === "") {
        showError(input, `${toPersian(input.id)} مورد نیاز است`);
      } else {
        showSuccess(input);
      }
    });
  };
  /*Check input lenght*/
  const checkLength = function (input, min, max) {
    const toPersian = function (inputId) {
      if (inputId === "username") {
        inputId = "نام کاربری";
        return inputId;
      } else if (inputId === "email") {
        inputId = "ایمیل";
        return inputId;
      } else if (inputId === "password") {
        inputId = "رمز عبور";
        return inputId;
      } else if (inputId === "phone") {
        inputId = "شماره موبایل";
        return inputId;
      }else if(inputId === "signin-phone"){
        inputId = "شماره موبایل";
        return inputId;
      }else if(inputId === "signin-password"){
        inputId = "رمز عبور";
        return inputId;
      }else if(inputId === "email-or-phone"){
        inputId = "ایمیل یا شماره تلفن";
        return inputId;
      }
    };
    if (input.value.length < min) {
      showError(input, `${toPersian(input.id)} باید حداقل  ${min} کاراکتر باشد`);
    } else if (input.value.length > max) {
      showError(input, `${toPersian(input.id)} must be less then ${max} charachters`);
    } else {
      showSuccess(input);
    }
  };

  /*Event listeners*/
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, email, password]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 32);
    checkLength(signinPassword, 8, 32);
    checkLength(signinPhone, 11);
    checkLength(emailOrPhone,9);
    CheckEmail(email);
  });

  }




  /*==========  phone search box  ==========*/

  if (innerWidth < 992) {
    searchBtn.onclick = () => {
      searchInputPhone.style.display = "block";
      document.getElementById("logo").style.display = "none";
      $(".burger").css("display", "none");
      $("#heading-logo").css("display", "none");
      $("#img-logo").css("display", "none");
      $("#search-input-phone").css("display", "block");
      BODY.classList.add("bg-blur");
      BTNHEADER1.classList.add("bg-blur");
      BTNHEADER2.classList.add("bg-blur");
      $("#search-btn").css("display", "none");
      $("#btn-search-close").css("display", "block");
      $("#user").css("cssText", "display: none !important");
    };
    btnSearchClose.addEventListener("click", () => {
      searchInputPhone.style.display = "none";
      btnSearchClose.style.display = "none";
      BODY.classList.remove("bg-blur");
      BTNHEADER1.classList.remove("bg-blur");
      BTNHEADER2.classList.remove("bg-blur");
      $("#search-btn").css("display", "flex");
      $(".burger").css("display", "block");
      $("#img-logo").css("display", "block");
      $("#heading-logo").css("display", "block");
      $("#user").css("display", "block");
    });
  }









  siginBtn.addEventListener("click", () => {
    login.classList.add("hidden");
    signin.classList.remove("hidden");
  });

  loginBtn.addEventListener("click", () => {
    signin.classList.add("hidden");
    login.classList.remove("hidden");
  });

  signUpBtn.addEventListener("click", () => {
    LoginSignin.classList.add("show-login-signin");
    LoginSignin.classList.add("zindexPos");
    LoginSignin.classList.remove("zindexNeg");
  });
  userBtn.addEventListener("click", () => {
    LoginSignin.classList.add("show-login-signin");
    LoginSignin.classList.add("zindexPos");
    LoginSignin.classList.remove("zindexNeg");
  });
  const loginCloseBtnFun = () => {
    LoginSignin.classList.add("hide-login-signin");
    LoginSignin.classList.remove("show-login-signin");
    LoginSignin.classList.remove("hide-login-signin");
    LoginSignin.classList.remove("zindexPos");
    LoginSignin.classList.add("zindexNeg");
  };
  loginCloseBtn.addEventListener("click", loginCloseBtnFun);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      loginCloseBtnFun();
    }
  });




  /*==========  Close Navbar In Big Monitors  ==========*/
  BURGER.addEventListener("click", burgerClick);
  addEventListener("resize", () => {
    if (innerWidth >= 992 && $(".nav-links").hasClass("nav-active")) BURGER.click();
  });
  /*==========  Close Searchbox phone In Big Monitors  ==========*/
  addEventListener("resize", () => {
    if (innerWidth >= 992 && btnSearchClose.classList.contains("block")) {
      btnSearchClose.click();
    }
  });


  /*==========  Slider Section  ==========*/

  /*==========  First Slider  ==========*/
  /* company logo slider */
  const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 7,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor: true,
  });

  /*==========  Second Slider  ==========*/
  /* customer opinions slider */

  const swiper2 = new Swiper(".swiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor: true,
  });
});
