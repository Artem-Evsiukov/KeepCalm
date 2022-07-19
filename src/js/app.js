// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import tabs from './components/tabs';
import swiperSlider from './components/slider';
import popups from './components/popup';

(($) => {
  // When DOM is ready
  $(() => {
    tabs.init();
    swiperSlider.init();
    popups.init();
  });
})(jQuery);

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  Image: {
    zoom: false,
    click: false,
    wheel: 'slide',
  },
});
