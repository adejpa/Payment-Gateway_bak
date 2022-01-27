// hide footer
setTimeout(function () {
  if (width <= 1024) {
    $("footer").hide();
  } else {
    $("footer").show();
  }
}, 550);

$(".inputNoTelp").keypress(function (event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});
$("input").val("");
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
                // $("#content").css("padding-bottom", "22px");
              } else {
                $("#content").css("padding-bottom", "80px");
              }
            }
            form.classList.add("was-validated");
            if (form.checkValidity() == true) {
              event.preventDefault();
              event.stopPropagation();
              window.location.replace("metode-pembayaran.html");
            }
          },
          false
        );
      });
    },
    false
  );
})();
