var Machine = require('./../js/machine.js').MachineModule;
var machine = new Machine();

$(function() {
  machine.createSounds("bass1");
  machine.createSounds("cymbal1");
  for (var i = 1; i <= machine.steps; i++) {
    $("#steps").append('<div class="step-unselected" id="col' + i + 'row1"></div>');
  }
  $("#toggle").click(function() {
    if (machine.playing) {
      machine.stopLoop();
    } else {
      machine.toggleLoop();
    }
  });
});
