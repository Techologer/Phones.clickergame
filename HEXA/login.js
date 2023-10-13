let phones = 0;
let clear = 0;
document.getElementById("img2").onclick = function(){
    phones += 1;
    if(phones > 1000){
        phones = 0;
        alert("You got new phone")
        alert("Go to  My phone to take the new phone")
    }
    document.getElementById("result").innerHTML = "You have: " + phones + " phones";
    document.getElementById("Enterbtn").onclick = function(){
        if(clear = "Refresh"){
            phones = 0;
        }
        document.getElementById("result").innerHTML = "You have: 0";
    }
}
