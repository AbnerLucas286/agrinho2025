let espaço1;
let alieno;
let espaço;
let nave;
let jogoEmAndamento = false; // Inicializa como false

function preload(){
  espaço2 = loadImage("imagens/espaço2.png");
  alieno = loadImage("imagens/alieno.png");
  espaço = loadImage("imagens/espaço.png");
  nave = loadImage("imagens/nave.png");
}

function setup() {
  createCanvas(600, 600);  
  x = random(600);
  y = random(600);
  x = int(x);
  y = int(y);  
}

function draw() {
  
  if (jogoEmAndamento) {
    background(espaço2);
    inicio();    
  }else {
    background(espaço);
    textSize(15);
    fill(color(255, 255));
    textAlign(CENTER);
    textStyle(BOLD);
    text("Aliens no Espaço: Um Desafio Inesperado \n" +
    "Os Aliens São Mal, \n" +
    "Mas são oportunistas e podem Tentar dominar nosso Planeta \n" +
    "Com sua Pistola a Laser. \n" +
    "Encontre ele Para Salvar a Terra ", 290, 50);
}
  
}

function mousePressed(){
  jogoEmAndamento = true;
}

function inicio(){
  
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  
  // delimitar para não sair da tela
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  
  //circle(x, y, 10);
  let distanciaX; let distanciaY; let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  
  //teorema de Pitágoras - trigonometria
  
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
  console.log(distancia);
  image(nave, mouseX, mouseY, distancia, distancia);
   
    if(  distancia < 3 ){
     text('Encontrei', 200, 200);
      image(alieno, x, y, 100, 100);
      noLoop();
       }
  
}