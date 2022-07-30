Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.2.0',
  name: "rodcope1:timezone-picker",
  git: 'https://github.com/rodcope1/timezone-picker'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], ['client', 'server']);
  //api.use(['momentjs:moment@2.10.6', 'aldeed:moment-timezone@0.4.0'], ['client', 'server']);

  Npm.depends({
    'moment-timezone': '2.29.4'
  });

  api.addFiles([
    'mapping.js',
    'jstz.js'
  ], ['client', 'server']);
  api.addFiles([
    'picker.html',
    'picker.js'
  ], 'client');

  api.export(['TimeZonePicker']);
});


