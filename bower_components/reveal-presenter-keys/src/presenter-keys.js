var RevealPresenterKeys = window.RevealPresenterKeys || (function() {

  /*
   Presenters send some specific key codes, but that does not always match
   up with the default shortcuts.

   This plugin keeps profiles for different presenters, allowing to attach
   functions to the key code sent by specific presenters.
   */

  var profiles = {
    "_default": {
      keyboard: {
        /*
          reveal.js maps PageUp/PageDown to prev/next so this profile is only
          for reference
         */
        //33: 'prev', // PageUp
        //34: 'next'  // PageDown
      }
    },
    "_arrows": {
      keyboard: {
        /*
          But some send ArrowUp/ArrowDown for their prev/next buttons.
         */
        38: 'prev', // Arrow Up
        40: 'next' // Arrow Down
      }
    },
    "Lenovo Yoga Mouse": {
      extends: "_default",
      keyboard: {
        /*
          Funny enough, the Lenovo Yoga Mouse upper presentation buttons
          switch between sending ESC and F5, so lets define the same function
          for both.
         */
        27: function() { // ESC
          Reveal.slide(0);
        },
        116: function() { // F5
          Reveal.slide(0);
        }
      }
    },
    "Nobo P2": {
      /*
        Sends arrow up/down
        http://sys-exit.blogspot.de/2015/10/revealjs-presentation-pilot-up-down-left-right.html
       */
      extends: "_arrows"
    }
  };

  var config = Reveal.getConfig() || {};
  config.badges = config.badges || {};
  var options = {
    profile: config.presenter.profile || '_default'
  };

  function applyProfile(name, used) {
    var profile;
    used = used || {};
    if (profiles[options.profile] && !used[name]) {
      used[name] = true;
      profile = profiles[name];
      if (typeof profile.extends === "string") {
        applyProfile(profile.extends, used);
      }
      if (profile.keyboard) {
        try {
          Reveal.configure({keyboard: profile.keyboard});
        } catch (e) {
        }
      }
    }
  }
  applyProfile(options.profile);

})();