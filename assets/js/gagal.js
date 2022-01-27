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
