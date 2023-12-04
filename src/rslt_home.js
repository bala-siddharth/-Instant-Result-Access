
// get started trail in result page using DOM Manipulations

let leftRailForm=document.getElementById("leftRailForm");
let myFormContainer=document.createElement("form");
myFormContainer.id="myForm";
leftRailForm.appendChild(myFormContainer);

let containerE1=document.createElement("div");
containerE1.classList.add("container-E1") 
myFormContainer.appendChild(containerE1);

let nameInputE1=document.createElement("input");
nameInputE1.setAttribute('type','text');
nameInputE1.setAttribute('aria-required','true');
nameInputE1.setAttribute('aria-label','Enter your name');
nameInputE1.setAttribute('aria-describedby','namefield-error');
nameInputE1.setAttribute('aria-invalid','true');
nameInputE1.classList.add("input-form-box");
nameInputE1.id="namefield";
nameInputE1.placeholder="Full Name";
containerE1.appendChild(nameInputE1);

let nameErrorMsg=document.createElement("p");
nameErrorMsg.id="nameErrorMsg";
nameErrorMsg.classList.add("error-message");
nameErrorMsg.textContent="";
containerE1.appendChild(nameErrorMsg);

let containerE2=document.createElement("div");
containerE2.classList.add("container-E2");
myFormContainer.appendChild(containerE2);

let emailInputE1=document.createElement("input");
emailInputE1.setAttribute('type','text');
emailInputE1.classList.add("input-form-box");
emailInputE1.id="emailfield";
emailInputE1.placeholder="Email";
emailInputE1.setAttribute('autocomplete','off');
containerE2.appendChild(emailInputE1);

let emailErrorMsg=document.createElement("p");
emailErrorMsg.id="emailErrorMsg";
emailErrorMsg.classList.add("error-message");
emailErrorMsg.textContent="";
containerE2.appendChild(emailErrorMsg);

let containerE3=document.createElement("div");
containerE3.classList.add("container-3");
myFormContainer.appendChild(containerE3);

let miniContainerE3=document.createElement("div");
miniContainerE3.classList.add("mini-containerE3");
containerE3.appendChild(miniContainerE3);

let passwordContainer = document.createElement("div");
passwordContainer.classList.add("password-container");
miniContainerE3.appendChild(passwordContainer);

let passwordInputE1 = document.createElement("input");
passwordInputE1.setAttribute('type', 'password');
passwordInputE1.classList.add("password-form-box");
passwordInputE1.id = "passwordfield";
passwordInputE1.placeholder = "Password";
passwordInputE1.setAttribute('autocomplete', 'off');
passwordContainer.appendChild(passwordInputE1);

let eyeIcon = document.createElement("i");
eyeIcon.classList.add("fas", "fa-eye-slash", "eye-icon");
eyeIcon.addEventListener("click", togglePasswordVisibility);
passwordContainer.appendChild(eyeIcon);

let eyeOpen = false;

function togglePasswordVisibility() {
    if (passwordInputE1.type === "password") {
        passwordInputE1.type = "text";
    } else {
        passwordInputE1.type = "password";
    }

    if (eyeOpen) {
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }

    eyeOpen = !eyeOpen; 
};

let passwordError=document.createElement("p");
passwordError.classList.add("error-message");
passwordError.id="passwordErrorMsg";
passwordError.textContent="";
containerE3.appendChild(passwordError);


let containerE4=document.createElement("div");
containerE4.classList.add("container-E4");
myFormContainer.appendChild(containerE4);

let phoneInputE1=document.createElement("input");
phoneInputE1.setAttribute('type','text');
phoneInputE1.classList.add("phoneinput-form-box");
phoneInputE1.id="phoneNofield";
phoneInputE1.placeholder="Phone";
phoneInputE1.setAttribute('autocomplete','off');
containerE4.appendChild(phoneInputE1);

let prefixSpan = document.createElement("span");
prefixSpan.textContent = "+91 ";
prefixSpan.classList.add("phoneinput-prefix");
containerE4.appendChild(prefixSpan);

let phoneErrorMsg=document.createElement("p");
phoneErrorMsg.id="phoneErrorMsg";
phoneErrorMsg.classList.add("error-message");
phoneErrorMsg.textContent="";
containerE4.appendChild(phoneErrorMsg);

let containerE5=document.createElement("div");
containerE5.classList.add("container-5")
myFormContainer.appendChild(containerE5);

let checkboxE1 = document.createElement("input");
checkboxE1.type = "checkbox";
checkboxE1.id = "checkboxId";
checkboxE1.classList.add("checkbox-input","mr-1");
containerE5.appendChild(checkboxE1);

let labelElement = document.createElement("label");
labelElement.setAttribute("for","checkboxId");
labelElement.id = "labelId";
labelElement.classList.add("checkbox-label");
labelElement.textContent = "I agree to the Terms of Service and Privacy Policy.";
containerE5.appendChild(labelElement);

let checkErrorMsg=document.createElement("p");
checkErrorMsg.id="checkErrorMsg";
checkErrorMsg.classList.add("error-message1");
checkErrorMsg.textContent="";
myFormContainer.appendChild(checkErrorMsg);

let getStartedButton=document.createElement("button");
getStartedButton.classList.add("get-started-button");
getStartedButton.id="getStartedButton";
getStartedButton.textContent="get started";
myFormContainer.appendChild(getStartedButton);



let myForm=document.getElementById("myForm");

let nameSign=document.getElementById("namefield");
let nameError=document.getElementById("nameErrorMsg");

let emailSign=document.getElementById("emailfield");
let emailSignErrMsg=document.getElementById("emailErrorMsg");

let passwordSign=document.getElementById("passwordfield");
let passwordSignErrMsg=document.getElementById("passwordErrorMsg");

let phoneNoSign=document.getElementById("phoneNofield");
let phoneNoSignErrMsg=document.getElementById("phoneErrorMsg");

let checkboxSign=document.getElementById("checkboxId");
let checkSignErrorMsg=document.getElementById("checkErrorMsg");


let formData={
    name:"",
    email:"",
    password:"",
    phoneNo:"",
    check:"false"
};

nameSign.addEventListener("change",function(event) {
    if(event.target.value===""){
        nameError.textContent="Please specify your Name";
    }else{
        nameError.textContent="";
    }
    formData.name=event.target.value;
});

emailSign.addEventListener("change",function(event) {
    if(event.target.value===""){
        emailSignErrMsg.textContent="Please enter a valid email address";
    }else{
        emailSignErrMsg.textContent="";
    }
    formData.email=event.target.value;
});

passwordSign.addEventListener("change",function(event) {
    if(event.target.value===""){
        passwordSignErrMsg.textContent="Password cannot be less than 8 characters";
    }else{
        passwordSignErrMsg.textContent="";
    }
    formData.password=event.target.value;
});

phoneNoSign.addEventListener("change",function(event) {
    if(event.target.value===""){
        phoneNoSignErrMsg.textContent="Please enter a valid mobile number";
    }else{
        phoneNoSignErrMsg.textContent="";
    }
    formData.phoneNo=event.target.value;
});

let checked=false;
checkboxSign.addEventListener("change", function(event) {
    formData.check = event.target.checked; // Use the checkbox's checked property
    if (!formData.check) {
        checkSignErrorMsg.textContent = "Please read and accept the Terms of Service and Privacy Policy";
    } else {
        checkSignErrorMsg.textContent = "";
    }
});

function validateFormData(formData){
    let {name,email,password,phoneNo,check}=formData;
    
    if (name===""){
        nameError.textContent="Please specify your Name";
    }
    if(email===""){
        emailSignErrMsg.textContent="Please enter a valid email address";
    }

    if(password===""){
        passwordSignErrMsg.textContent="Password cannot be less than 8 characters";
    }else if(password.length<8){
        passwordSignErrMsg.textContent="Password cannot be less than 8 characters";
    }else if(password.length>12){
        passwordSignErrMsg.textContent="Password cannot be greater than 12 characters";
    }

    if(phoneNo===""){
        phoneNoSignErrMsg.textContent="Please enter a valid mobile number";
    }
    if(check==="false"){
        checkSignErrorMsg.textContent="Please read and accept the Terms of Service and Privacy Policy";
    }else{
        checkSignErrorMsg.textContent="";
    }
}

function submitFormData(formData){
    let url="https://jsonplaceholder.typicode.com/posts";
    let options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
        },
        body:JSON.stringify(formData)
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    });
}

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    if (formData.check) {
        if (formData.password.length < 8) {
            passwordSignErrMsg.textContent = "Password must be at least 8 characters long";
            return;
        }
        if(formData.password.length>12) {
            passwordSignErrMsg.textContent = "Password cannot be greater than 12 characters"; 
            return;
        }else{
            passwordSignErrMsg.textContent = ""; 
        }
        submitFormData(formData);
    }
});



// changes of navbar to visible on top while scrolling
const resultNowNavBg = document.querySelector('.bar-bg');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        resultNowNavBg.style.background = 'white';
        resultNowNavBg.style.borderBottom="1px solid rgba(0,0,0,.1)"
    } else {
        resultNowNavBg.style.background = ``;
        resultNowNavBg.style.borderBottom="";
    }
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