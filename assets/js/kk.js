// hide footer
setTimeout(function () {
  if (width <= 1024) {
    $("footer").hide();
  } else {
    $("footer").show();
  }
}, 550);

$("input,select").val("");
$(".inputNoKartu, .inputCVV, .inputExp, .inputExp2").keypress(function (event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              if (width <= 1024) {
                $("#content").css("padding-bottom", "22px");
              } else {
                $("#content").css("padding-bottom", "80px");
              }
              // $('footer').css('position','relative');
            }
            form.classList.add("was-validated");
            if (form.checkValidity() == true) {
              event.preventDefault();
              event.stopPropagation();
              window.location.replace("kartu-kredit-detail.html");
            }
          },
          false
        );
      });
    },
    false
  );
})();

$(".dd-select").click(function () {
  $(this).toggleClass("active");
  $(".dd-options").click(function () {
    $(".dd-select").removeClass("active");
  });
  $("body").click(function () {
    $(".dd-select").removeClass("active");
  });
});
