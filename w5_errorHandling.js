const form=document.getElementById("form")
const password=document.getElementById("password")
const errorElement= document.getElementById("error")

form.addEventListener("submit", (e)=>{
  let message=[]
  if (password.value.length <=6){
    messages.push("Password must be longer than 6 characters")
  }
  if (password.value.length <=15){
    messages.push("Password must be less than 15 characters")
  }
  if (password.toUppercase()) === "PASSWORD"){
    messages.push("Password cannot be password")
  }
  if (messages.length >0){
    e.preventDefault()
    errorElement.innertext = messages.join(',')
  }
}
)