var display=document.querySelector("#display");
var equal=document.querySelector(".equal");
var decimal=document.querySelector(".decimal");
var clear=document.querySelector(".all-clear");
var clearAll=document.querySelector("#header");
var equation=("");
display.innerHTML=("0");
var n0=document.querySelector("#n0");
var n1=document.querySelector("#n1");
var n2=document.querySelector("#n2");
var n3=document.querySelector("#n3");
var n4=document.querySelector("#n4");
var n5=document.querySelector("#n5");
var n6=document.querySelector("#n6");
var n7=document.querySelector("#n7");
var n8=document.querySelector("#n8");
var n9=document.querySelector("#n9");
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var multiply=document.querySelector("#multiply");
var divide=document.querySelector("#divide");
var modulus=document.querySelector("#modulus");
var reverse=document.querySelector("#reverse");
var result=0;

//accept number input
n0.addEventListener("click",function(){
	displayScreen(n0.value);
	calculation(n0.value);
});
n1.addEventListener("click",function(){
	displayScreen(n1.value);
	calculation(n1.value);
});
n2.addEventListener("click",function(){
	displayScreen(n2.value);
	calculation(n2.value);
});
n3.addEventListener("click",function(){
	displayScreen(n3.value);
	calculation(n3.value);
});
n4.addEventListener("click",function(){
	displayScreen(n4.value);
	calculation(n4.value);
});
n5.addEventListener("click",function(){
	displayScreen(n5.value);
	calculation(n5.value);
});
n6.addEventListener("click",function(){
	displayScreen(n6.value);
	calculation(n6.value);
});
n7.addEventListener("click",function(){
	displayScreen(n7.value);
	calculation(n7.value);
});

n8.addEventListener("click",function(){
	displayScreen(n8.value);
	calculation(n8.value);
});
n9.addEventListener("click",function(){
	displayScreen(n9.value);
	calculation(n9.value);
});
//operation input
plus.addEventListener("click",function(){
	displayScreen(plus.value);
	calculation(plus.value);
});
minus.addEventListener("click",function(){
	displayScreen(minus.value);
	calculation(minus.value);
});
multiply.addEventListener("click",function(){
	displayScreen(multiply.value);
	calculation(multiply.value);
});
divide.addEventListener("click",function(){
	displayScreen(divide.value);
	calculation(divide.value);
});
modulus.addEventListener("click",function(){
	displayScreen(modulus.value);
	calculation(modulus.value);
});
reverse.addEventListener("click",function(){
	displayScreen(reverse.value);
	calculation(reverse.value);
});
decimal.addEventListener("click",function(){
	displayScreen(decimal.value);
	calculation(decimal.value);
});
equal.addEventListener("click",function(){
	result=eval(equation);
	equation=(result);
	if((result*10)%10!=0)
	{
	display.innerHTML=(result.toFixed(4));
    }
    else
    {
    	display.innerHTML=(result);
    }
});
//clear single character
clear.addEventListener("click",function(){
	var cut=equation.slice(0,-1);
	display.innerHTML=(cut);
	equation=cut;
});
//clear all
clearAll.addEventListener("click",function(){
	display.innerHTML=("");
	equation=0;
});
//display on screen
function displayScreen(event){
	if(event==reverse.value)
	{
		var sign=equation.charAt(0);
		if(sign==("-"))
		{
			display.innerHTML="+"+display.innerHTML;
		}
		else
		{
			display.innerHTML="-"+display.innerHTML;
		}
	}
	else
	{
	display.innerHTML+=(event);
    }
}
//evaluate string
function calculation(event){
	equation+=(event);
	if(equation.charAt(0)==0)
	{
		equation=equation.substr(1);
	}
	display.innerHTML=(equation);
}