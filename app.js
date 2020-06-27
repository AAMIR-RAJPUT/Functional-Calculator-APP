function getNumber(num){

    var output=document.getElementById("output")
    output.value += num;
}
function clearoutput(){
    var output=document.getElementById("output")
    output.value = ""
}
function getoutput(){
    var output=document.getElementById("output")
    output.value = eval(output.value)
}
