// hide footer
setTimeout(function () {
  if (width <= 1024) {
    $(".footer-mobile").show();
    $("#footer").hide();
  } else {
    $(".footer-mobile").hide();
    $("#footer").show();
  }
}, 550);

// desktop ver
$("#desktop-ver .btn-salin").tooltip({
  trigger: "click",
  placement: "bottom",
});

function setTooltip(message) {
  $("#desktop-ver .btn-salin")
    .tooltip("hide")
    .attr("data-original-title", message)
    .tooltip("show");
}

function hideTooltip() {
  setTimeout(function () {
    $("#desktop-ver .btn-salin").tooltip("hide");
  }, 1000);
}
var clipboardDesk = new ClipboardJS("#desktop-ver .btn-salin");

clipboardDesk.on("success", function (e) {
  setTooltip("ID bayar disalin!");
  hideTooltip();
});

clipboardDesk.on("error", function (e) {
  setTooltip("Gagal!");
  hideTooltip();
});

// mobile ver
$("#mobile-ver .btn-salin").tooltip({
  trigger: "click",
  placement: "bottom",
});

function setTooltip2(message) {
  $("#mobile-ver .btn-salin")
    .tooltip("hide")
    .attr("data-original-title", message)
    .tooltip("show");
}

function hideTooltip2() {
  setTimeout(function () {
    $("#mobile-ver .btn-salin").tooltip("hide");
  }, 1000);
}
var clipboardMob = new ClipboardJS("#mobile-ver .btn-salin");

clipboardMob.on("success", function (e) {
  setTooltip2("ID bayar disalin!");
  hideTooltip2();
});

clipboardMob.on("error", function (e) {
  setTooltip2("Gagal!");
  hideTooltip2();
});

//   timer
function Timer(duration, display) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt((timer / 3600) % 24, 10);
    minutes = parseInt((timer / 60) % 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(hours + " : " + minutes + " : " + seconds);

    --timer;
  }, 1000);
}

jQuery(function ($) {
  var twentyFourHours = 24 * 60 * 60;
  var display = $(".remainingTime");
  Timer(twentyFourHours, display);
});

$(".card-pembayaran p").css("font-size", "14px");

// hover tooltip
$("#desktop-ver .btn-salin").hover(function () {
  $(".tooltiptext").toggleClass("hover");
  console.log("hover");
});

// debit otp
let inputOTP = "";
$("#modal-otp").on("show.bs.modal", function (e) {
  //focus first input
  setTimeout(function () {
    $("#modal-otp .otp1").focus();
  }, 500);
  inputPIN();
});

// modal otp mobile
$("#modal-otp2").on("show.bs.modal", function () {
  // scroll to bottom
  $("#modal-otp2").animate({ scrollTop: $(document).height() }, 1000);
  $("#modal-otp2").css("overflow", "hidden");
  //focus first input
  setTimeout(function () {
    $("#modal-otp2 .otp1").focus();
  }, 500);
  inputPIN();
});

// get input id
function getInputID(index) {
  let idInput;
  if ($("#desktop-ver").css("display") != "none") {
    // jika desktop
    idInput = $("#modal-otp input").attr("id");
  } else {
    // jika mobile
    idInput = $("#modal-otp2 input").attr("id");
  }
  if (!idInput || !idInput.length) {
    return;
  }
  return idInput.slice(0, -1) + index;
}

function onFocusEvent(index) {
  // ada isi
  if ($("#" + getInputID(index)).val()) {
    $("#" + getInputID(index + 1)).focus();
    return;
  } else {
    // tidak
    for (item = 1; item < index; item++) {
      const currentElement = getInputID(item);
      if (!$("#" + currentElement).val()) {
        $("#" + currentElement).focus();
        break;
      }
    }
  }
}

function inputPIN() {
  let inputsPin;
  if ($("#desktop-ver").css("display") != "none") {
    // jika desktop
    inputsPin = document.querySelectorAll("#modal-otp input");
  } else {
    // jika mobile
    inputsPin = document.querySelectorAll("#modal-otp2 input");
  }
  for (let i = 0; i < inputsPin.length; i++) {
    inputsPin[i].addEventListener("keyup", function (event) {
      if (event.keyCode === 8) {
        // event backspace
        inputsPin[i].value = "";
        inputsPin[i].classList.remove("input-filled");
        if (inputsPin[i - 1] != null) {
          inputsPin[i - 1].classList.remove("pass");
        } else {
          // console.log("KOSONG");
        }

        if (i !== 0) {
          inputsPin[i - 1].classList.remove("input-filled");
          inputsPin[i - 1].value = "";
          inputsPin[i - 1].classList.remove("pass");
          inputsPin[i - 1].focus();
        }
      } else {
        if (event.keyCode > 47 && event.keyCode < 58) {
          // event angka
          inputsPin[i].value = event.key;
          // save value
          inputOTP += inputsPin[i].value;
          // if i belum sama dengan total input
          if (i !== inputsPin.length - 1) {
            inputsPin[i].classList.add("input-filled");
            inputsPin[i + 1].focus();
            setTimeout(function () {
              inputsPin[i].classList.add("pass");
            }, 200);
          } else if (i === inputsPin.length - 1 && inputsPin[i].value !== "") {
            // add class on last input
            inputsPin[i].classList.add("input-filled");
            setTimeout(function () {
              inputsPin[i].classList.add("pass");
            }, 200);
          }
          event.preventDefault();
        }
      }
    });
  }
}
