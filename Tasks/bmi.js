function bmi(){
    var x=parseInt(document.getElementById("weight").value)
    var y=parseInt(document.getElementById("height").value)
    var y=y/100
    var z=x/(y*y)
    document.getElementById("result").innerText=z.toFixed(2)
}
