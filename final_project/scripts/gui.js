// setup the control gui
var controlGUI = new function() {
		  
		  this.showAxisHelper=true;
		  this.trackball = true;
		  this.interazioni = true;
		  this.explode = function() {explode();}
		  this.implode = function() {implode();}
		  this.tourAutomatico = function() {autoTour();}
		  this.tourManuale = manTour;
};

var gui = new dat.GUI();

var axisControl = gui.add(controlGUI, 'showAxisHelper').onChange(function (value) {
			axisHelper.visible = value;
});
gui.add(controlGUI, 'trackball').onChange(function (value) {
			trackballControls.enabled = value;
});
gui.add(controlGUI, 'interazioni').onChange(function (value) {
			interact=value;
});
gui.add(controlGUI, 'explode');
gui.add(controlGUI, 'implode');
gui.add(controlGUI, 'tourAutomatico');
gui.add(controlGUI, "tourManuale");
	  
