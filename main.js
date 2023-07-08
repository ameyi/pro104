//https://teachablemachine.withgoogle.com/models/KnjUM5YrU/
Webcam.set({
    height: 300,
    width: 350,
    image_format: png,
    image_quality: 90, 
})
camera=document.getElementById("camera");
webcam.attach(camera)
function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5 Version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KnjUM5YrU/model.json',modelLoaded);
function modelLoaded(){
    console.log("The model succeeded.")
}