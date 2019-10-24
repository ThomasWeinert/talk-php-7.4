# reveal-presenter-keys

Presenter key profiles for reveal.js

This addon adds keyboard mappings depending on the selected presenter
profile. 

Sure I could do that in the presentation directly, but then I would have to
remember the key codes. 

```
bower install --save reveal-presenter-keys
```

After that add it to the dependencies section in your HTML file.

```javascript
dependencies: [
  { src: 'bower_components/reveal-presenter-keys/src/presenter-keys.js' },
  //... 
]
```

## Options

```javascript
presenter: {
  profile: 'Presenter Name'
}
```

### Profile

`@var {string} profile`

The name of the presenter profile. Here are two generic profiles. "_default" adds nothing, you will have the
standard reveal.js mappings. "_arrows" maps the arrow up/down keys to prev/next actions.

#### Named Profiles

* Lenovo Yoga Mouse
* Nobo P2

#### Add Profiles

If you have another presenter and want a profile for it, please open an issue or a merge request.
A profile can extend another.

```javascript
var profiles = {
  // ...
  "Profile Name": {
    extends: "Parent Profile Name",
    keyboard: {
      // ... reveal.js keyboard mappings
    }
  }
  // ...
}
```

