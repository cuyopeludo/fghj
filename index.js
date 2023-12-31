
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  
  function preload() {
  classifier=ml5.imageClassifier("DoobleNet");
  
  
  }
  
  
  
  function clearCanvas() {
  
    background("white");
  }
  
  function draw() {
  
    // Establece stroke weight en 13
    strokeWeight(13);
    // Establece stroke color a black
    stroke(0);
    // Si el mouse está presionado, dibuja una línea entre la posición anterior y actual del mouse
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }