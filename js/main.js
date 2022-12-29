let btn1=document.getElementById("btn");
btn1.addEventListener("click", myFunct);
function myFunct(){
    let price=parseInt(document.getElementById("billAmount").value);
    let tips=parseInt(document.getElementById("tipPercent").value);
    let tip1=document.getElementById("tipAmount").value=price*tips/100;
    let total=document.getElementById("totalAmount").value=price+tip1;
    console.log("your total bill amount is "+total);
}