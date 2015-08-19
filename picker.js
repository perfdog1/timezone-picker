Template.timeZonePicker.helpers({
  timeZones: function(usFirst) {
    var usZones = ['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific'];
    var list = _(TimeZonePicker.mapping()).chain().sortBy('name').sortBy(function(zone) {
      return parseInt(zone.gmtOffset);
    }).value();
    var usList = _(usZones).map(function(tz) {
      return _(list).find(function(ele) {
        return ele.name === tz;
      });
    });
    usList.push({name: "", timeZone: "", gmtOffset: ""});
    return usList.concat(list);
  },
  selected: function() {
    if (Template.parentData(1).selected === this.timeZone)
      return 'selected';
  }
});
