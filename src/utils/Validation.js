export const checkValidation = (email, password) => {

   const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // const checkName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)

   if(!checkEmail) return "❌ Please enter a valid email address or phone number.";
   if(!checkPassword) return "❌ Invalid password. Please try again!";
   // if(!checkName) return "❌ Enter your full name."
         
   return null;
}