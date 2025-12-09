// code for time 

const d = new Date();
let text = d.toLocaleString();
document.getElementById("demo").innerHTML = text;

// code for popup

function showAlert() {
    alert("Message Sent Successfully!");
}


// counter

let finalValue = 5000;
let startValue = 0;
let duration = 5000;
let stepTime = Math.abs(Math.floor(duration / finalValue));

function upValue() {
    if (startValue <= finalValue) {
        document.getElementById("number_up").innerText = startValue;
        startValue++;
        setTimeout(upValue, stepTime);
    }
}
upValue();


