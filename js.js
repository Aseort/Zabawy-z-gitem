
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var deleteBtn = document.getElementById("delete1");
var sticker = document.querySelector(".sticker");
var btnAdd = document.getElementById("plus");
var addItem = document.querySelector(".add-items");
var body = document.querySelector("body");
var btnDel1 = document.getElementById("enter1");

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

function addNewBtn(){
	
	var random = Math.floor(Math.random()*500);
	var new1 = document.createElement("div");
	new1.classList.add("sticker");
	new1.style.display="block";
	new1.style.top =`${random}px`;
	new1.style.left =`${random}px`;
	var new2 = document.createElement("div");
	new2.classList.add("bar");
	var new3 = document.createElement("button");
	new3.id = "delete1";
	new3.innerText = "X";
	var new4 = document.createElement("form");
	new4.classList.add("add-items");
	var new5 = document.createElement("input");
	new5.setAttribute("type", "text");
	new5.setAttribute("placeholder", "treść notatki");
	new5.id = "userInput";
	var new6 = document.createElement("ul");
	var new7 = document.createElement("div");
	new7.classList.add("save");
	var new8 = document.createElement("button");
	new8.id = "enter";
	new8.innerText = "Save";
	var new9 = document.createElement("button");
	new9.id = "enter1";
	new9.setAttribute("type","submit");
	new9.innerText="Delete";
	
	new7.appendChild(new8);
	new7.appendChild(new9);
	new4.appendChild(new5);
	new2.appendChild(new3);
	new2.appendChild(new4);
	new2.appendChild(new6);
	new2.appendChild(new7);
	new1.appendChild(new2);
	body.appendChild(new1);

	if (true == true)/*takie małe trolowanie XD */{
		sticker.style.display="block";
		sticker.style.top = `${random}px`;
		sticker.style.left = `${random}px`;
	}
	
}
function deleteFun(){
	sticker.style.display = "none";
}
function submit(e){
	e.preventDefault();
}

function clearAll(){
		item.classList.add("delete")
	}
btnDel1.addEventListener("click", clearAll);
addItem.addEventListener("submit", submit)
enterButton.addEventListener("click",addListAfterClick);
deleteBtn.addEventListener("click", deleteFun);
btnAdd.addEventListener("click", addNewBtn);
