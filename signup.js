function signup(){
   let fname = document.getElementById("fname").value;
   let lname = document.getElementById("lname").value;
   let mobile = document.getElementById("mobile").value;
   let password = document.getElementById("pass").value;
   let email = document.getElementById("email").value;
   
   if(fname.length === 0) {
      alert("Enter first name!");
      return;
   }

   if(fname.length > 10) {
       alert("First name should be less than 10 characters!");
       return;
   }
   
   if(lname.length === 0) {
      alert("Enter last Name!");
      return;
   }
   
   if(lname.length > 10) {
       alert("Last name should be less than 10 characters!");
       return;
   }

   if(mobile.length !== 10) {
       alert("Mobile number should be of 10 digits!");
       return;
   }

   if(mobile.length === 0) {
       alert("Enter Mobile Number!");
       return;
   }

   if(!validateEmail(email)){
       alert("Invalid email address!");
       return;
   }

   if(password.length < 6){
       alert("Invalid password, minimum length should be 6 characters!");
       return;
   }
}

function validateEmail(input) {
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   return validRegex.test(input);
}
