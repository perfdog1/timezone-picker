Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.1.2',
  name: "rodcope:timezone-picker",
  git: 'https://github.com/rodcope1/timezone-picker'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], 'client');
  api.use(['momentjs:moment', 'aldeed:moment-timezone'], 'client');

  api.addFiles([
    'mapping.js',
    'picker.html',
    'picker.js',
    'jstz.js'
  ], 'client');

  api.export(['TimezonePicker']);
});


