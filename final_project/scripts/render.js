function render() {
    stats.update();
    TWEEN.update();
    if(trackballControls.enabled){
  		trackballControls.update();
  	}
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
   // manualTour
   if(fpc === true){
  	   controls.update();
  }
  
}
