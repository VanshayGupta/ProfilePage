var hold=document.querySelector("#hold");
var roll=document.querySelector("#roll");
var reset=document.querySelector("#reset");
var p1Total=document.querySelector("#p1Total");
var p2Total=document.querySelector("#p2Total");
var p1Current=document.querySelector("#p1Current");
var p2Current=document.querySelector("#p2Current");
changeTurn=false;
var p1Roll=0;
var p1Hold=0;
var p2Roll=0;
var p2Hold=0;
var p1Bet=document.querySelector("#p1Bet");
var p2Bet=document.querySelector("#p2Bet");
var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var total=document.querySelector("#choice");
var turn1=document.querySelector("#turn1");
var turn2=document.querySelector("#turn2");
var p1Turn=document.querySelector("#p1Turn");
var p2Turn=document.querySelector("#p2Turn");
var p1TotalWinnings=0;
var p2TotalWinnings=0;
var gif=document.querySelector("#gif");
turn2.style.display=("none");
var p1Display=(prompt("Player 1"));
p1.innerHTML=(p1Display);
var p2Display=(prompt("Player 2"));
p2.innerHTML=(p2Display);
p1Turn.innerHTML=(p1Display);
p2Turn.innerHTML=(p2Display);
var choice=prompt("Winning total");
var p1Winnings=(prompt("Enter the betting amount of "+p1Display));
var p2Winnings=(prompt("Enter the betting amount of "+p2Display));
total.innerHTML=("Winning Total- "+choice);
roll.addEventListener("click",function(){
if(changeTurn==false)
{
	var rollValue1=Math.floor(Math.random()*6+1);
p1Roll+=Number(rollValue1);
if((rollValue1==1)||(rollValue1==4))
{
	changeTurn=true;
	p1Roll=0;
	p1Total.innerHTML=(p1Hold);
	turn1.style.display=("none");
	turn2.style.display=("inline");
}
p1Current.innerHTML=(p1Roll);
}
else if(changeTurn==true)
{
	var rollValue2=Math.floor(Math.random()*6+1);
p2Roll+=Number(rollValue2);
if((rollValue2)==1||(rollValue2==4))
{
	changeTurn=false;
	p2Roll=0;
	p2Total.innerHTML=(p2Hold);
	turn1.style.display=("inline");
	turn2.style.display=("none");
}
p2Current.innerHTML=(p2Roll);
}
});
hold.addEventListener("click",function(){
	if(changeTurn==false)
	{
		p1Hold+=p1Roll;
		if(p1Hold<choice)
	{
p1Total.innerHTML=(p1Hold);
changeTurn=true;
p1Roll=0;
p1Current.innerHTML=("0");
turn1.style.display=("none");
turn2.style.display=("inline");
}
else
{
	p1Total.innerHTML=("Winner!");
	p1Total.style.color=("green");
	p1TotalWinnings+=Number(p1Winnings);
	p2TotalWinnings-=p2Winnings;
	p1Bet.innerHTML=(p1TotalWinnings);
	p2Bet.innerHTML=(p2TotalWinnings);
	gif.setAttribute("src","https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif");
}
}

else if(changeTurn==true)
{
	p2Hold+=p2Roll;
	if(p2Hold<choice)
	{
p2Total.innerHTML=(p2Hold);
changeTurn=false;
p2Roll=0;
p2Current.innerHTML=("0");
turn1.style.display=("inline");
turn2.style.display=("none");
}
else
{
	p2Total.innerHTML=("Winner!");
	p2Total.style.color=("green");
	p2TotalWinnings+=Number(p2Winnings);
	p1TotalWinnings-=p1Winnings;
	p2Bet.innerHTML=(p2TotalWinnings);
	p1Bet.innerHTML=(p1TotalWinnings);
	gif.setAttribute("src","https://media.giphy.com/media/KZd26L2o8QXtK/giphy.gif");
}
}
});
reset.addEventListener("click",function(){
p2Rolll=0;
p2Hold=0;
p1Roll=0;
p1Hold=0;
p1Current.innerHTML=("0");
p2Current.innerHTML=("0");
p1Total.innerHTML=("0");
p2Total.innerHTML=("0");
changeTurn=false;
p1Total.style.color=("black");
p2Total.style.color=("black");
turn1.style.display=("inline");
turn2.style.display=("none");
p1Winnings=0;
p2Winnings=0;
gif.setAttribute("src","#");
p1Winnings=(prompt("Enter the betting amount of "+p1Display));
p2Winnings=(prompt("Enter the betting amount of "+p2Display));
});