var level01 = ["Shall", "!", "Not", "You", "Pass"];
var level02 = ["Can't", "Truth", "Handle", "You", "The"];
var finish = false;

var correctOrder = [0, 1, 2, 3, 4];
var userOrder = [];
var mistake = false;

var video = document.getElementsByTagName("video")[0];
var getVideo = document.getElementsByTagName("source")[0];

var option00 = document.getElementById("options").getElementsByTagName("li")[0];
var option01 = document.getElementById("options").getElementsByTagName("li")[1];
var option02 = document.getElementById("options").getElementsByTagName("li")[2];
var option03 = document.getElementById("options").getElementsByTagName("li")[3];
var option04 = document.getElementById("options").getElementsByTagName("li")[4];

var input00 = document.getElementById("input").getElementsByTagName("li")[0];
var input01 = document.getElementById("input").getElementsByTagName("li")[1];
var input02 = document.getElementById("input").getElementsByTagName("li")[2];
var input03 = document.getElementById("input").getElementsByTagName("li")[3];
var input04 = document.getElementById("input").getElementsByTagName("li")[4];

var reset = document.getElementsByTagName("button")[0];

var startIntro = function(){
    video.style.zIndex = "10";
    video.style.opacity= "1"
    getVideo.src = "media/movieCounter.webm";
    video.load();

    // TIMER HEB IK VAN W3SCHOOLS!
    setTimeout(function(){
        video.style.zIndex = "-10";
        video.style.opacity= "0"
        video.pause();
    }, 5000);
}

var createLevel01 = function(){ 
    option00.innerHTML = level01[0];
    option01.innerHTML = level01[1]; 
    option02.innerHTML = level01[2]; 
    option03.innerHTML = level01[3]; 
    option04.innerHTML = level01[4]; 
}

var createLevel02 = function(){ 
    option00.innerHTML = level02[0];
    option01.innerHTML = level02[1]; 
    option02.innerHTML = level02[2]; 
    option03.innerHTML = level02[3]; 
    option04.innerHTML = level02[4]; 
}

startIntro();
createLevel01();
console.log("create lvl 1");

option00.onclick = function() { //zodra je klikt, start een functie
    var input = document.getElementById("input").getElementsByTagName("li"); // Hier stop je een id uit de dom in je userOrder array.
    userOrder.push(option00.id); // HOORT BIJ ELKAAR 
 
    for(var i = 0; i < correctOrder.length; i++){
        if(!input[i].innerHTML){ // als er geen innerhtml van document.getElementById("input").getElementsByTagName("li"); 
            if(finish){
                input[i].innerHTML = level02[0]; // dit is level 2
                i = correctOrder.length; // `verander i in 5 en functie afbreken.
            }
            else{
                input[i].innerHTML = level01[0]; // dit is level 1
                i = correctOrder.length;
            }
        }        
    }
    
    console.log(userOrder);
    checkOrder();
}

option01.onclick = function() {
    var input = document.getElementById("input").getElementsByTagName("li");
    userOrder.push(option01.id);
 
    for(var i = 0; i < correctOrder.length; i++){
        if(!input[i].innerHTML){
            if(finish){
                input[i].innerHTML = level02[1];
                i = correctOrder.length;
            }
            else{
                input[i].innerHTML = level01[1];
                i = correctOrder.length;
            }
        }        
    }
    
    console.log(userOrder);
    checkOrder();
}

option02.onclick = function() {
   var input = document.getElementById("input").getElementsByTagName("li");
    userOrder.push(option02.id);
 
    for(var i = 0; i < correctOrder.length; i++){
        if(!input[i].innerHTML){
            if(finish){
                input[i].innerHTML = level02[2];
                i = correctOrder.length;
            }
            else{
                input[i].innerHTML = level01[2];
                i = correctOrder.length;
            }
        }        
    }
    
    console.log(userOrder);
    checkOrder();
}

option03.onclick = function() {
    var input = document.getElementById("input").getElementsByTagName("li");
    userOrder.push(option03.id);
 
    for(var i = 0; i < correctOrder.length; i++){
        if(!input[i].innerHTML){
            if(finish){
                input[i].innerHTML = level02[3];
                i = correctOrder.length;
            }
            else{
                input[i].innerHTML = level01[3];
                i = correctOrder.length;
            }
        }        
    }
    
    console.log(userOrder);
    checkOrder();
}

option04.onclick = function() {
var input = document.getElementById("input").getElementsByTagName("li");
    userOrder.push(option04.id);
 
    for(var i = 0; i < correctOrder.length; i++){
        if(!input[i].innerHTML){
            if(finish){
                input[i].innerHTML = level02[4];
                i = correctOrder.length;
            }
            else{
                input[i].innerHTML = level01[4];
                i = correctOrder.length;
            }
        }        
    }
    
    console.log(userOrder);
    checkOrder();
}

reset.onclick = function() {
    clearInput();
}

video.onclick = function() {
    video.style.zIndex = "-10";
    video.pause();
    video.style.opacity="0";
}

// DOE 5 KEER WHATEVER HIER IN STAAT 

var checkOrder = function() { // Hier maak ik een functie checkOrder aan.
    if  (userOrder.length == correctOrder.length) { // hier vergelijk ik of user en correct gelijk zijn.
        for(var i = 0; i < correctOrder.length; i++) { // is dat niet zo, tel er dan 1 bij op tot het wel zo is.
            console.log(userOrder[i]);
            console.log(correctOrder[i]);
            if(userOrder[i] == correctOrder[i]){  //  hij gaat hier vergelijken of 1 == 1 is en 2 == 2 is etc etc.             
                console.log("HEAAAUH DAT IS GOED!");
                if(mistake == false && i == (correctOrder.length - 1)) { // als er geen fout is gemaakt en of hij alle nummers in de array gehad heeft. Je hebt geen fouten gemaakt en je hebt alles gehad dus dan moet je het goed hebben.
                    console.log("JE BENT EEN BAAAAAAS");
                    if(finish == false){ // Je bent niet met het laatste level bezig.
                        video.style.zIndex = "10"; // z index bepaald hier dat mijn video boven mijn game komt te staan.
                        video.style.opacity= "1" // mijn video is onzichtbaar en word hier zichtbaar gemaakt.
                        getVideo.src = "media/theLordOfTheRings_quote.webm"; // veranderd de source van het video element.
                        video.load(); // laad de video.
                        console.log(getVideo.src);
                        
                        confirm("Je hebt het gehaald! Door naar volgende level!"); // pop up window, waar je moet klikken dat je het hebt gehaald.
                        createLevel02(); // roept de functie aan voor het starten van level 2.
                        console.log("create lvl 2");
                        finish = true; // Je hebt beide levels gedaan en bent dus klaar.
                        clearInput(); // Roept clearInput functie aan en zet alles weer op nul.
                    }
                    else{
                        video.style.zIndex = "10";
                        video.style.opacity= "1"
                        getVideo.src = "media/aFewGoodMen_quote.webm";
                        video.load();
                        console.log(getVideo.src);
                        
                        confirm("Je hebt spel uitgespeeld!");
                        createLevel01();
                        finish = false;
                        clearInput();
                    }
                }
                if(mistake == true && i == (correctOrder.length - 1)) { // i staat aan aantal keer dat hij iterate. i checkt hij van userOrder af. 
                    confirm("Je hebt ergens een fout gemaakt!");
                    console.log("JE BENT EEN FOCKING LOSER");
                    console.log("PROBEER HET NOG EEN KEER!");
                    clearInput();
                }
            } 

            else { 
                console.log("NOOB");
                mistake = true;
                if(mistake == true && i == (correctOrder.length - 1)) { // i staat aan aantal keer dat hij iterate. i checkt hij van userOrder af. 
                    confirm("Je hebt ergens een fout gemaakt!");
                    console.log("JE BENT EEN FOCKING LOSER");
                    console.log("PROBEER HET NOG EEN KEER!");
                    clearInput();
                }
                
            } 
        }
    }
}


var clearInput = function() { // functie clearInput
    var input = document.getElementById("input").getElementsByTagName("li");
    for(var i = 0; i < correctOrder.length; i++) {
        input[i].innerHTML = "";
    }
    userOrder = [];
    mistake = 0;
    console.log("INPUT CLEARED");
}

    

