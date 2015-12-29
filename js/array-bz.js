window.addEventListener('focus', function() {
  document.title = "ARRAY.BZ";
});

window.addEventListener('blur', function() {
  document.title = "ARRAY.BZ: Don't hang up!";
});

$(document).ready(function () {
  array_bz.init();
});

array_bz = {
  init: function () {
    localStorage.setItem(window.location, "read");

    $("a.readable").each(function() {
      if (localStorage.getItem(this.href) !== "read") {
        $(this).addClass("unread");
      }
    });
  }
};
