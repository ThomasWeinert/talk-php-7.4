var RevealPrint = window.RevealPrint || (function() {

  var getRevealPath = function() {
    var src, match;
    var scriptNodes = document.querySelectorAll('script[src*="js/reveal.js"]');
    for (var i = 0, c = scriptNodes.length; i < c; i++) {
      src = scriptNodes[i].getAttribute('src');
      if (match = src.match(/(.*)\/js\/reveal\.js/)) {
        return match[1];
      }
    }
    return null;
  };

  var getDefaultPrintCSS = function() {
    var path;
    if (path = getRevealPath()) {
      return path + '/css/print/pdf.css';
    }
    return null;
  };

  var materializeFragmentSlide = function(fragment) {
    var section, siblings, i, c;
    // find the section the fragment is in
    section = fragment.parentNode;
    while (section && section.tagName.toLowerCase() !== 'section') {
      section = section.parentNode;
    }
    if (section) {
      // fetch all fragment in that section
      siblings = section.querySelectorAll('.fragment');
      // if we got more then one and the fragment is not the first one
      if (siblings.length > 0) {
        if (fragment !== siblings[0]) {
          // mark the current fragment
          fragment.setAttribute('is-current-fragment', 'true');
          // clone the slide
          var slide = section.parentNode.insertBefore(
              section.cloneNode(true),
              section.nextElementSibling
          );
          fragment.removeAttribute('is-current-fragment');
          // fetch the fragments in the new slide
          var fragments = slide.querySelectorAll('.fragment');
          var isFollowing = false;
          for (i = 0, c = fragments.length; i < c; i++) {
            if (isFollowing) {
              fragments[i].parentNode.removeChild(fragments[i]);
            } else if (fragments[i].getAttribute('is-current-fragment')) {
              isFollowing = true;
            }
          }
        } else {
          // the slide was cloned for all other fragments, remove them
          for (i = 1, c = siblings.length; i < c; i++) {
            siblings[i].parentNode.removeChild(siblings[i]);
          }
        }
      }
    }
  };

  var config = Reveal.getConfig() || {};
  config.print = config.print || {};
  config.print.trigger = config.print.trigger || {};
  var options = {
    trigger: {
      print: config.print.trigger.print || 'print-pdf',
      expand: config.print.trigger.expand || 'print-pdf-expand'
    },
    css: config.print.css || getDefaultPrintCSS() || ''
  };

  var queryString = window.location.search.toLowerCase();
  var triggerPrint = queryString.indexOf(
      options.trigger.print.toLowerCase()
  ) !== -1;
  var triggerPrintExpanded = queryString.indexOf(
      options.trigger.expand.toLowerCase()
  ) !== -1;

  if (triggerPrint || triggerPrintExpanded) {
    if (options.css !== '') {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = options.css;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    if (triggerPrintExpanded) {
      // fetch any fragment
      var fragments = document.querySelectorAll('.slides .fragment');
      // iterate backwards to avoid problems with the modified DOM
      for (var i = fragments.length - 1; i >= 0; i--) {
        materializeFragmentSlide(fragments[i]);
      }
    }
  }
})();