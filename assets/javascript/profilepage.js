var body=document.querySelector("body");
var navname=document.querySelector("#navname");
var keyword=document.querySelector("#keyword");
var header=document.querySelector("#header");
var picture=document.querySelector("#picture");
var profileName=document.querySelector("#profileName");
var bio=document.querySelector("#bio");
var follow=document.querySelector("#follow"); 
var check=document.querySelector("#check");
var input=document.querySelector("#write");
var comments=document.querySelector("#comments");
var submit=document.querySelector("#submit");
var address=document.querySelector("#address");
var email=document.querySelector("#email");
var sendMail=document.querySelector("#sendMail");
var number=document.querySelector("#number");
var phoneLink=document.querySelector("#phoneLink");
var website=document.querySelector("#website");
var dob=document.querySelector("#dob");
var editName=document.querySelector("#editName");
var nameValid=document.querySelector("#nameValid");
var editEmail=document.querySelector("#editEmail");
var emailValid=document.querySelector("#emailValid");
var editNumber=document.querySelector("#editNumber");
var numberValid=document.querySelector("#numberValid");
var dobEdit=document.querySelector("#dobEdit");
var dobValid=document.querySelector("#dobValid");
var editAddress=document.querySelector("#editAddress");
var editWebsite=document.querySelector("#editWebsite");
var profilePicture=document.querySelector("#profilePicture");
var editBio=document.querySelector("#editBio");
var submitForm=document.querySelector("#submitForm");
var copyrightText=document.querySelector("#copyrightText");
var count=0;
var checkedValid=false;

//find a keyword
function searchKeyword(event){
	window.find(keyword.value);
}

//follow button
follow.addEventListener("click",function(){
	if(follow.value==("follow"))
	{
		follow.innerHTML=("FOLLOWING");
		follow.style.backgroundColor=("green");
		check.style.display=("inline");
		follow.value=("unfollow");
	} 
	else if(follow.value==("unfollow"))
	{
		follow.innerHTML=("FOLLOW");
		follow.style.backgroundColor=("#007bff");
		check.style.display=("none");
		follow.value=("follow");
	}
});

//adding updates
submit.addEventListener("click",function(){
	if(input.value!=(""))
	{
		var node=document.createElement("LI");
		var textnode=document.createTextNode(input.value);
		node.appendChild(textnode);
		var x=document.createElement("LI");
		var timeDate=new Date();
		if(timeDate.getMinutes()<10)
		{
			x.innerHTML=(timeDate.getDate())+("/")+(timeDate.getMonth())+("/")+(timeDate.getFullYear())+(" ")+(timeDate.getHours())+(":")+("0")+(timeDate.getMinutes());

		}
		else
		{
			x.innerHTML=(timeDate.getDate())+("/")+(timeDate.getMonth())+("/")+(timeDate.getFullYear())+(" ")+(timeDate.getHours())+(":")+(timeDate.getMinutes());

		}
		x.classList.add("time");
		node.appendChild(x);
		node.classList.add("list-group-item");
		node.classList.add("rounded");
		node.classList.add("text-break");
		node.style.width=("48%");
		node.style.margin=("10px auto");
		comments.insertBefore(node,comments.childNodes[0]);
		input.value=("");
    }
});

//checking for required numerical format
function testNumberValid(event){
	var charCode=(event.which)?event.which:event.keyCode;
	if(charCode>=48&&charCode<=57)
	{
		if(count<10)
		{
			count++;
			return true;
	    }
	    else
	    {
	    	return false;
	    }
	}
	else if(charCode==8)
	{
		if(count>0)
		{
			count--;
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

//checking for required email format
function testEmailValid(){
	if(editEmail.value.indexOf(".")!=-1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//editing the page
function formSubmit(){
	event.preventDefault();
	checkRequired();
	if(checkedValid==true)
	{
		profileName.innerHTML=(editName.value);
		navname.innerHTML=(editName.value);
		copyrightText.innerHTML=("  "+editName.value);
		website.innerHTML=("  "+editWebsite.value);
		dob.innerHTML=(("  ")+(dobEdit.value.slice(8,10))+("-")+(dobEdit.value.slice(5,7))+("-")+(dobEdit.value.slice(0,4)));
		address.innerHTML=(editAddress.value);
		if(testEmailValid()==true)
		{
			email.innerHTML=("  "+editEmail.value);
		}
		number.innerHTML=("  +91-"+editNumber.value);
		bio.innerHTML=(editBio.value);
		picture.src=(profilePicture.value);
		sendMail.href=("mailto: "+editEmail.value);
		phoneLink.href=("+91"+editNumber.value);
		editName.value=("");
		editEmail.value=("");
		editNumber.value=("");
		profilePicture.value=("");
		dobEdit.value=("");
		editBio.value=("");
		editAddress.value=("");
		editWebsite.value=("");
		count=0;
	}
};

//checking form validity
function checkRequired(){
	if(editName.checkValidity()!=true||editNumber.checkValidity()!=true||editEmail.checkValidity()!=true||dobEdit.checkValidity()!=true||testEmailValid()==false||count!=10)
	{
		checkedValid=false;
		if(editName.checkValidity()!=true)
		{
			nameValid.innerHTML=("Please fill out the required field");
		}
		else
		{
			nameValid.innerHTML=("");
		}
		if(editNumber.checkValidity()!=true||(count!=10))
		{
			numberValid.innerHTML=("Please enter 10 numbers");
		}
		else
		{
			numberValid.innerHTML=("");
		}
		if((editEmail.checkValidity()!=true)||(testEmailValid()==false))
		{
			emailValid.innerHTML=("Please enter a valid email id");
		}
		else
		{
			emailValid.innerHTML=("");
		}
		if(dobEdit.checkValidity()!=true)
		{
			dobValid.innerHTML=("Please fill out the required field");
		}
		else
		{
			dobValid.innerHTML=("");
		}
	}
	else
	{
		checkedValid=true;
		numberValid.innerHTML=("");
		nameValid.innerHTML=("");
		emailValid.innerHTML=("");
		dobValid.innerHTML=("");
	}
}