# TimeZone Picker

A meteor.js package that allows you to detect client-side timezones and gives you an interface for changing those timezones from user inputs.

## Getting started

### Install

Just run

```
meteor add rodcope:timezone-picker
```

### Add the timezone picker calls

Now we just have to add a startup block on the client to detect timezones:

```
// set the user's timezone
Deps.autorun(function() {
  if (!Meteor.user().profile.timeZone) {
    Meteor.users.update(Meteor.userId(), {$set: {
      'profile.timeZone': TimeZonePicker.detectedZone()
    }});
  }
});
```

Then we can add a quick form field to a profile settings form:

```
{{> timeZonePicker class="form-group" selected=timeZone}}
```

This will inject a select element with all the available moment-timezone timezones as options.
If the user's profile is the context for this template, it should pick up the timezone string we set on loading the page.
