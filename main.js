function start_classification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oo8rqQeEp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(got_results);
}

dog = 0;
cat = 0;
horse = 0; 
cow = 0;
lion = 0;

function got_results(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = 'The detected voice is of - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = ' - '+ 
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color= "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
    }

    if(results[0].label == "Bark"){
        img.src= "bark.gif";
        dog = dog + 1;
    }else if (results[0].label == "Meow"){
        img.src= "meow.gif";
        cat = cat + 1;
    }else if (results[0].label == "Moo"){
        img.src= "moo.gif";
        cow = cow + 1;
    }else if(results[0].label == "Neigh"){
        img.src= "neigh.gif";
    }else if(results[0].label == "Roar"){
        img.src = "roar.gif";
    }else{
        img.src = "listen.gif";
    }
   
}
