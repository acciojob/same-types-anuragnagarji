function isSameType(value1, value2) {
  if( typeof value1===typeof value2){
	  return true;
  }
	return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
//console.log(typeof value1);
let value2 = prompt("Enter End Of the Range.");
if(value1[0]>=48&&value1[0]<=57){
	value1=Number(value1);
}
if(value2[0]>=48&&value2[0]<=57){
	value2=Number(value2);
}

alert(isSameType(value1,value2);
//alert(typeof value1);