
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function root(){
    var p = document.getElementById("result").value;
    var q = Math.sqrt(p);
    if(Number.isNaN(q)){
        document.getElementById("result").value = "šaknis iš neigiamo negalima";
    }
   else{
    document.getElementById("result").value = q;
   } 
}
function binary(){
    var p = document.getElementById("result").value;
    let bin = (p%2).toString();
    for(; p>1;){
        p=parseInt(p/2);
        bin=(p%2)+(bin);
    }
    document.getElementById("result").value = bin;
}
function kosinusas(){
    var p = document.getElementById("result").value;
    var q = Math.cos(p*Math.PI/180);
    if(q<0.000000000001){
        q=0;
    }
    document.getElementById("result").value =q;
}
function apvalinimas(){
    var p = document.getElementById("result").value;
  var q=Math.round(p)
    document.getElementById("result").value =q;
}