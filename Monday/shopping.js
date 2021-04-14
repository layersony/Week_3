// use of forEach() and map()
let shopList = [];

function toShop(){
  let usrshop = prompt("Enter Shopping Item: ");
  shopList.push(usrshop);
  redo();
}

function redo(){
	let retake = prompt("Want to add another: yes or no").toLowerCase();
  if (retake === "yes"){
  	toShop();
  }else{
  	alert("Thank you");
    shopList.map((shplst)=>{shplst});
  }
  
}
toShop();
let y = shopList.sort()
let onOneLine = shopList.forEach((shoplisting)=>{console.log(shoplisting)})


