// loading page
var myVar;

function loading() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.getElementById('footer').style.display = 'block';
}

// responsive
let width = $(window).width();
let height = $(window).height();
console.log(width);
console.log(height);

// max tablet
if (width <= 1024) {
  $('#mobile-ver').show();
  $('.mobile').show();
  $('#nav-mobile-ver').show();
  $('#desktop-ver').hide();
  $('.desktop').hide();
  $('#nav-desktop-ver').hide();
} else {
  $('#mobile-ver').hide();
  $('.mobile').hide();
  $('#nav-mobile-ver').hide();
  $('#desktop-ver').show();
  $('.desktop').show();
  $('#nav-desktop-ver').show();
}

// auto refresh when resize
$(window).bind('resize', function (e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function () {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});

// submit form
$('#desktop-ver .bt-submit, #mobile-ver .bt-submit').each(function () {
  $(this).on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('form').submit();
  });
});
