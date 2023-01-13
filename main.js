function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier(https://teachablemachine.withgoogle.com/models/[...]',modelready);
}


function modelready(){
    classifier.classify(gotResuts);
}


function gotResults(error,results){
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = (Math.random()* 255)
        random_number_g = (Math.random()* 255)
        random_number_b = (Math.random()* 255)


        img = document.getElementById('cat')
        img1 = document.getElementById('dog')

        }

         if(results[0].label=="meowing"){
            img.src  =   'cat.jpg';
            img1.src =   'doge.png';

        else (results[0].label=="barking"){
            img.src = 'cat.jpg';
            img1.src = 'doge.png';
        }


    }

}