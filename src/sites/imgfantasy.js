(function () {
  'use strict';

  var host = /^(imgfantasy|imagedomino)\.com$/;

  $.register({
    rule: {
      host: host,
      query: /^\?p=/,
    },
    ready: function () {
      var i = $('#container-home img');
      $.openImage(i.src);
    },
  });

  $.register({
    rule: {
      host: host,
      query: /^\?v=/,
    },
    ready: function () {
      if (unsafeWindow.confirmAge) {
        unsafeWindow.confirmAge(1);
        return;
      }
      var i = $('#container-home img');
      $.openImage(i.src);
    },
  });
})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
