
// Toggle FAQ Visibility OnLoad
document.addEventListener("DOMContentLoaded", function () {
    const topFquesElements = document.querySelectorAll(".top-fques");
    const bottomFquesElements = document.querySelectorAll(".bottom-fques");

    topFquesElements.forEach(function (topFques, index) {
        topFques.addEventListener("click", function () {
            const targetId = topFques.getAttribute("data-target");
            const bottomFques = document.getElementById(targetId);

            if (bottomFques) {
                bottomFquesElements.forEach(function (bfElement, bfIndex) {
                    if (index === bfIndex) {
                        bfElement.classList.add("transition-effect");
                        bfElement.style.display = bfElement.style.display === "block" ? "none" : "block";
                        topFques.classList.toggle("top-fques-change");
                        topFques.classList.toggle("fques-icon-change");
                    } else {
                        bfElement.style.display = "none";
                        topFquesElements[bfIndex].classList.remove("top-fques-change");
                        topFquesElements[bfIndex].classList.remove("fques-icon-change");
                    }
                });
            }
        });
    });
    if (topFquesElements.length > 0) {
      bottomFquesElements[0].classList.add("transition-effect");
      bottomFquesElements[0].style.display = "block";
      topFquesElements[0].classList.toggle("top-fques-change");
      topFquesElements[0].classList.toggle("fques-icon-change");
    }
});



// contact form
const contactFormData={
  name:"",
  email:"",
  phoneno:"",
  achieveField:"",
  verificationNo:""
};
const errorMessageOfContactFormField={
  name: "Please enter your Name",
  email: "Please enter a valid email address",
  phoneno: "Please enter your phone number",
  achieveField: "What are you looking to achieve?",
  verificationNo: "Enter the verification code"
}

function addChangeEventForContactForm(inputElement){
    const errorId=inputElement.getAttribute("data-error");
    const fieldDataKey=inputElement.getAttribute("data-key");
    const errorElement=document.getElementById(errorId);

    inputElement.addEventListener("change",(event)=>{
      const ContactInputValue=event.target.value;
      errorElement.textContent=ContactInputValue===""?errorMessageOfContactFormField[fieldDataKey]:"";
      contactFormData[fieldDataKey]=ContactInputValue;
    })
}
const contactFormOfEachAttribute=document.querySelectorAll(`[data-error][data-key]`);
contactFormOfEachAttribute.forEach((inputElement)=>{
  addChangeEventForContactForm(inputElement)
})

// generating 6-digitcode
function generateMixedVerificationCode(length) {
  const codeCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let code = "";
  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * codeCharacters.length);
      code += codeCharacters.charAt(randomIndex);
  }
  return code;
}

window.onload = function() {
  const displayCode=document.getElementById("displayCode");
  const displayIcon=document.getElementById("displayIcon");
  const generatedCode = generateMixedVerificationCode(6);

  displayCode.textContent = generatedCode;
  displayIcon.onclick = function() {
      const generatedCode = generateMixedVerificationCode(6);
      displayCode.textContent = generatedCode;
  };
};

const validateField=[
  {element: document.getElementById("namefield"),errorE1: document.getElementById("nameErrorMsg"),fieldKey:"name"},
  {element: document.getElementById("emailfield"),errorE1: document.getElementById("emailErrorMsg"), fieldKey:"email"},
  {element: document.getElementById("phoneNofield"),errorE1: document.getElementById("phoneErrorMsg"), fieldKey:"phoneno"},
  {element: document.getElementById("achieveTextAreaField"),errorE1: document.getElementById("achieveTextErrorMsg"), fieldKey:"achieveField"},
  {element: document.getElementById("verificationInputfield"),errorE1: document.getElementById("verificationTextErrorMsg"),fieldKey:"verificationNo"}
]

function inputValidateField(element,errorE1,fieldKey){    
    errorE1.textContent=element.value===""?errorMessageOfContactFormField[fieldKey]:"";
}

function validateContactFormData(){
  validateField.forEach((field)=> inputValidateField(field.element,field.errorE1,field.fieldKey));

  const verificationInput=document.getElementById("verificationInputfield");
  const verificationTextErrorMsg=document.getElementById("verificationTextErrorMsg");

  if(Object.values(contactFormData).every((value)=>value!=="")){
    if (verificationInput.value === displayCode.textContent) {
      verificationTextErrorMsg.textContent = "";
      console.log(contactFormData);
    } else {
      verificationTextErrorMsg.textContent = "Verification code does not match.";
    }
  }
}

const getStartedButton=document.getElementById("getStartedButton");
getStartedButton.addEventListener("click",(event)=>{
    event.preventDefault();
    validateContactFormData();
})



// navbar to visible on top while scrolling
const contactNavBg = document.querySelector('.contact-bar-bg');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        contactNavBg.style.backgroundColor = 'white';
        contactNavBg.style.borderBottom="1px solid rgba(0,0,0,.1)"
    } else {
        contactNavBg.style.backgroundColor = '';
        contactNavBg.style.borderBottom="";
    }
});



// shows banner visible while scrolling

document.addEventListener("DOMContentLoaded", function () {
    const showBanner = document.querySelector(".show-banner");
    const closeIcon = document.querySelector(".close-icon");
    let bannerVisible = true;
  
    window.addEventListener("scroll", function () {
        if (bannerVisible && window.scrollY > 100) {
            showBanner.style.display = "block";
        } else {
            showBanner.style.display = "none";
        }
    });
  
    closeIcon.addEventListener("click", function () {
        showBanner.style.display = "none";
        bannerVisible = false; 
    });
});



// user profile view display

const storedUserEmail = localStorage.getItem("userSigninEmail");
const getById = (id) => document.getElementById(id);
const [homeSignin, homeSignup, userProfileContainer, detailUserProfile, railUserName] = ["homeSignin", "homeSignup", "userProfileContainer", "detailUserProfile", "railUserName"].map(getById);

if (storedUserEmail!==""){
  homeSignin.style.display="none";
  homeSignup.style.display="none";
  userProfileContainer.style.display="block";
  railUserName.textContent=storedUserEmail.replace("@gmail.com","");
}else{
  homeSignin.style.display="block";
  homeSignup.style.display="block";
  userProfileContainer.style.display="none";
}

const showUserProfile = () => detailUserProfile.style.display = "block";
const hideUserProfile = () => detailUserProfile.style.display = "none";

userProfileContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  showUserProfile();
});
document.addEventListener("click", (event) => {
  if (!userProfileContainer.contains(event.target)) {
    hideUserProfile();
  }
});