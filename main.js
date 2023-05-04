narizx=0;
narizy=0;
function preload () {
  filtro=loadImage("https://i.postimg.cc/xj3DWvCM/qwertyuiopasdfghjkl-zxcvbnm.webp");
}
function setup () {
canvas = createCanvas (300, 300);
canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modelo_preparado);
  poseNet.on("pose",poses)
}
function draw() {
  image(video,0,0,300,300);
  image(filtro,narizx,narizy,100,100);
}
function take_snapshot (){
save('myFilterImage. png"');
}
function modelo_preparado(){
  console.log("el modelo esta listo")
}
function poses(resultado){
if (resultado.length>0){
  console.log(resultado);
  narizx=resultado[0].pose.nose.x-50;
  narizy=resultado[0].pose.nose.y-50;

}
}