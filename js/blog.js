$("#menu").on("mouseenter",function(){
    
    $("#menu").addClass('hovered');
    
    
  })

  $("#menu").on("mouseleave",function(){
    
    $("#menu").removeClass('hovered');
    
    
  })

  VANTA.WAVES({
  el: "#vantajs",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x000000,
  shininess: 20.00,
  waveHeight: 10,
  waveSpeed: 1.00,
  zoom: 0.75

})