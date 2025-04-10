function myFunction2(){
    document.getElementById('demo').innerText = Date();
}

let x, y, z;
x = 5;
y = 6;
z = x + y;
console.log(z);

function myFunction1(){
    alert(z);
}

let string1 = "2" + 1 + 2, string2 = 2 + 1 + "2";
console.log(string1);
console.log(string2);

function myfunction3(){
    let x = [
        "John",
        "Doe",
        30
    ];
    let text = "";
    x.forEach(myFunction4);
    function myFunction4(value){
        text += value + "<br>";
    }
    document.getElementById("demo2").innerHTML = text;
}

let person = {
    fullName : function(firstName, lastName){
        return this.firstName + " " + this.lastName;
    }
}

let rasen = person.fullName("Rasen", "dria");
document.getElementById("demo3").innerHTML = rasen;

function myFunction4(){
    window.alert("halo");
}

let pidio = document.getElementById("pidio");
let mulai = document.getElementById("mulai");
let berhenti = document.getElementById("berhenti");
let stop = document.getElementById("stop");

pidio.addEventListener("ended", function(){
    mulai.src="/mini_project/assets/Play Button Silhouette PNG Images, Black Vector Play Button Icon, Play Icons, Button Icons, Black Icons PNG Image For Free Download.jpg";
})

function playIt(){
    if(pidio.paused){
        pidio.play(); 
        mulai.src="/mini_project/assets/Download - Icon Design - Pause Button Transparent PNG.jpg";
    } else{
        pidio.pause();
        mulai.src="/mini_project/assets/Play Button Silhouette PNG Images, Black Vector Play Button Icon, Play Icons, Button Icons, Black Icons PNG Image For Free Download.jpg";
    }
}

function stopIt(){
    pidio.currentTime = 0;
}

const domain = document.getElementById("dom1");
const p1 = document.createElement("p");
const pIsi = document.createTextNode("Dingin tetapi tidak kejam");
p1.appendChild(pIsi);
domain.appendChild(p1);