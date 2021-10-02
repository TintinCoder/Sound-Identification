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
}
var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ElIAPE6Ip/model.json', modelReady)
function modelReady() {
    classifier.classify(gotResult)
}
function gotResult(error, result) {
    if (error) {
        console.log(error)   
    }
    else {
        const number_r = Math.floor(Math.random() * 255) + 1;
        const number_b = Math.floor(Math.random() * 255) + 1;
        const number_g = Math.floor(Math.random() * 255) + 1;
        // console.log(result)
        document.getElementById('detectedVoice').innerHTML = result[0].label;
        document.getElementById('detectedVoiceAccuracy').innerHTML = ((result[0].confidence) * 100 + 1).toFixed(2) + " %";
        document.getElementById('detection').style.color = "rgb(" + number_r + "," + number_g + "," + number_b + ")"

        if (result[0].label == "Barking") {
            document.getElementById('hearing').style.display = "block";
            document.getElementById('hearing').src = 'bark.gif';
        }
        else if (result[0].label == "Meow") {
            document.getElementById('hearing').style.display = "block";
            document.getElementById('hearing').src = 'meow.gif';
        }
        else {
            document.getElementById('hearing').style.display = "block";
            document.getElementById('hearing').src = 'bn.gif';
        }
    }
}