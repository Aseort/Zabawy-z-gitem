
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = ""; 
}
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

enterButton.addEventListener("click",addListAfterClick);


