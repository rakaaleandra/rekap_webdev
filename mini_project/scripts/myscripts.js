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