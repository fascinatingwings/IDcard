function idCard () {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let age = parseInt(document.getElementById('age').value);
  let phoneNumber = parseInt(document.getElementById('phoneNumber').value);

document.getElementById("postFullName").innerHTML = firstName +" "+ lastName;
document.getElementById("postAddress").innerHTML = address;
document.getElementById("postAge").innerHTML = 'Age: ' + age;
document.getElementById("postPhoneNumber").innerHTML = 'Phone Number: ' + phoneNumber;

var numberArray = [];
numberArray.push(age, phoneNumber);
for (var i = 0; i < numberArray.length; i++) {
} if (numberArray[i] <=100) {
return numberArray[i];
} else if (numberArray[i] >=100) {
} return numberArray[i];
}