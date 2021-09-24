// The Teachable Machine AI Link Is -: https://teachablemachine.withgoogle.com/models/ElIAPE6Ip/model.json
function startGif() {
    document.getElementById("hearing").style.display = "block";
    console.log('Hearing is started')
}
function stopGif() {
    document.getElementById("hearing").style.display = "none";
    console.log("Hearing Is Over")
}
function startAudio() {
    setTimeout(startGif, 0000);
    setTimeout(stopGif, 2000);

    navigator.mediaDevices.getUserMedia({audio: true});
    var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0jnux8wSi/model.json', modelReady)
}
function modelReady() {
    classifier.classify(gotResult)
}
function gotResult(error, result) {
    console.log('got result')
}