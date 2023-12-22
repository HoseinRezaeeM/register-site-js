const email =document.getElementById("input-email");
const password =document.getElementById("input-password");
const confirmpassword =document.getElementById("input-Confirm-password");
const button =document.getElementById("form-button");
const form =document.getElementById("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault()
const obj ={
  email:email.value,
  password:password.value,
  confirmpassword:confirmpassword.value
}
console.log(obj);
})
