

// ________eligibility form navigate to information form__________

const formData={
    residence:"",
    involved:"",
    location:"",
    terms:""
}

// event listeners to input elements
function addChangeEventListener(inputElement) {
    const errorId = inputElement.getAttribute("data-error");
    const formDataKey = inputElement.getAttribute("data-key");
    const errorElement = document.getElementById(errorId);
    
    inputElement.addEventListener("change", (event) => {
        const value = event.target.value;
        errorElement.textContent = value === "" ? "Required field" : "";
        formData[formDataKey] = value;
    });
}
const inputElementsWithAttributes = document.querySelectorAll('[data-error][data-key]');
inputElementsWithAttributes.forEach((inputElement) => {
    addChangeEventListener(inputElement);
});


// only in screen size less than 500px
function scrollRailTabContainerToPercentage(percentage) {
    const railTabContainer = document.getElementById("myTab");
    const containerWidth = railTabContainer.scrollWidth;
    const scrollPosition = (containerWidth * percentage) / 100;
  
    railTabContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
}


function validateEligibility(formData){
    const {residence,involved,location,terms}=formData;
    if (residence === "yes" && involved === "no" && location === "yes" && terms === "yes") {
        eligibilitySuccess(formData);
    }else{
        eligibilityErrors(formData);
    }
}

// eligibility form submission success
function eligibilitySuccess(formData) {
    console.log(formData)

    const notEligibleInfo = document.getElementById("notEligibleInfo");
    const stage1=document.getElementById("stage1");
    const stage2=document.getElementById("stage2");
    const eligibilityForm=document.getElementById("eligibilityForm");
    const information=document.getElementById("information");
    const informationForm = document.getElementById("informationForm");

    if (notEligibleInfo) {
        notEligibleInfo.style.display = "none";
    }

    stage1.classList.remove("tab-progress","error-tab-progress");
    stage1.classList.add("complteded-tab-process");

    stage2.classList.add("tab-progress");
    stage2.classList.remove("tab-not-progress");

    if (eligibilityForm){
        eligibilityForm.style.display="none";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if(information){
        information.classList.add("show","active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (informationForm) {
        informationForm.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollRailTabContainerToPercentage(35);
}

// eligibility form validation errors
function eligibilityErrors(formData){
    const { residence, involved, location, terms } = formData;
        
    const errorResidence=document.getElementById("errorResidence");
    const errorInvolved=document.getElementById("errorInvolved");
    const errorLocation=document.getElementById("errorLocation");
    const errorTerms=document.getElementById("errorTerms");
    const tabProgress = document.getElementById("stage1");

    if (residence ==="" ){
        errorResidence.textContent="Required field";
    }
    if (involved ==="" ){
        errorInvolved.textContent="Required field";
    }
    if (location ==="" ){
        errorLocation.textContent="Required field";
    }
    if (terms ==="" ){
        errorTerms.textContent="Required field";
    }else {
        if (notEligibleInfo) {
            notEligibleInfo.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
    tabProgress.classList.add("error-tab-progress");
    tabProgress.classList.remove("tab-progress", "complteded-tab-process");
    window.scrollTo({ top: 0, behavior: "smooth" }); 
}

let continueToInformation=document.getElementById("continueToInformation");
continueToInformation.addEventListener("click",function(event){
    event.preventDefault();
    validateEligibility(formData);
});




// _________information form navigate back to eligibility form____________

const backToEligibility=document.getElementById("backToEligibility");
const informationForm=document.getElementById("informationForm");
const eligibilityForm=document.getElementById("eligibilityForm");

function backToEligibilityForm(){
    informationForm.style.display="none";
    eligibilityForm.style.display="block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    scrollRailTabContainerToPercentage(0);
}
backToEligibility.addEventListener("click",function(event){
    event.preventDefault();
    backToEligibilityForm();
});




// ________information form navigate to result access__________

let informationFormDetails={
    firstname:"",
    lastname:"",
    dob:"",
    stream:"",
    sem:"",
    clgid:"",
    phoneno:"",
    email:""
}

function addInformationInputChangeElements(informationInputElement){
    const informationError=informationInputElement.getAttribute("data-error");
    const informationFormDataKey=informationInputElement.getAttribute("data-key");
    const informationErrorElement=document.getElementById(informationError);
    const errorImg=document.querySelector(`.error-img-${informationFormDataKey}`);

    informationInputElement.addEventListener("change",function(event){
        const informationValue=event.target.value;
        informationErrorElement.textContent=informationValue===""?"Required field":"";
        informationFormDetails[informationFormDataKey]=informationValue;

        errorImg.style.display=informationValue==="" ? "block" :"";

        informationInputElement.classList.toggle("change-information-form-box", informationValue === "");
        
    });
}
const informationDetails=document.querySelectorAll(".information-form .sub-information-box input[data-error][data-key],.information-form .sub-information-box select[data-error][data-key]");
informationDetails.forEach((informationInputElement)=>{
    addInformationInputChangeElements(informationInputElement);
});

function validateField(element, errorElement, errorImg) {
  if (element.value === "") {
    errorElement.textContent = "Required field";
    element.classList.add("change-information-form-box");
    errorImg.style.display = "block";
  } else {
    errorElement.textContent = "";
    element.classList.remove("change-information-form-box");
    errorImg.style.display = "none";
  }

  if (element.id === "understandCheckbox") {
    const understandCheckbox = element;
    const errorCheckbox = document.getElementById("errorCheckbox");
    
    if (understandCheckbox.checked) {
        errorCheckbox.textContent = "";
    } else {
        errorCheckbox.textContent = "Please accept the terms.";
    }
  }
}

const fieldsToValidate = [
  { element: document.getElementById("informationFirstName"), errorElement:document.getElementById("errorFirstname"), errorImg: document.querySelector(".error-img-firstname"), fieldKey: "firstname" },
  { element: document.getElementById("informationLastName"), errorElement: document.getElementById("errorLastname"), errorImg: document.querySelector(".error-img-lastname"), fieldKey: "lastname" },
  { element: document.getElementById("informationDateOfBirth"), errorElement: document.getElementById("errorDob"), errorImg: document.querySelector(".error-img-dob"), fieldKey: "dob" },
  { element: document.getElementById("streams"), errorElement: document.getElementById("errorStreams"), errorImg:document.querySelector(".error-img-stream"), fieldKey: "stream" },
  { element: document.getElementById("semester"), errorElement: document.getElementById("errorSemster"), errorImg:document.querySelector(".error-img-sem"), fieldKey: "sem" },
  { element: document.getElementById("informationCollegeId"), errorElement: document.getElementById("errorClgid"), errorImg:document.querySelector(".error-img-clgid"), fieldKey:"clgid"},
  { element: document.getElementById("informationPhone"), errorElement:document.getElementById("errorPhoneno"), errorImg:document.querySelector(".error-img-phoneno") , fieldKey: "phoneno" },
  { element: document.getElementById("informationEmail"), errorElement:document.getElementById("errorEmail"),errorImg:document.querySelector(".error-img-email"), fieldKey:"email"},
  { element: document.getElementById("understandCheckbox"), errorElement: document.getElementById("errorCheckbox"), errorImg: document.querySelector(".error-img-checkbox"), fieldKey: "understandCheckbox" }
];

const understandCheckbox = document.getElementById("understandCheckbox");
const errorCheckbox = document.getElementById("errorCheckbox");

understandCheckbox.addEventListener("change", function () {
    if (understandCheckbox.checked) {
        errorCheckbox.textContent = "";
    } else {
        errorCheckbox.textContent = "Please accept the terms.";
    }
});

function validateResultAccess() {
    fieldsToValidate.forEach((field) => validateField(field.element, field.errorElement, field.errorImg));

    const stage2=document.getElementById("stage2");
    stage2.classList.remove("tab-progress","tab-not-progress");
    stage2.classList.add("error-tab-progress");
    window.scrollTo({top:0,behavior:"smooth"});

    if  (Object.values(informationFormDetails).every((value) => value !== "") && understandCheckbox.checked){
        console.log(informationFormDetails);

        stage2.classList.add("complteded-tab-process");
        stage2.classList.remove("tab-not-progress","tab-progress","error-tab-progress");

        const stage3=document.getElementById("stage3");
        stage3.classList.add("complteded-tab-process");
        stage3.classList.remove("tab-not-progress","tab-progress","error-tab-progress");

        const informationForm = document.getElementById("informationForm");
        if (informationForm){
            informationForm.style.display="none";
        }

        const resultForm=document.getElementById("results");
        if (resultForm){
            resultForm.classList.add("show","active");
            window.scrollTo({top:0,behavior:"smooth"});
        }
        scrollRailTabContainerToPercentage(100);
    } else {
        stage2.classList.remove("tab-progress", "tab-not-progress", "complteded-tab-process");
        stage2.classList.add("error-tab-progress");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

const continueToAccessResults=document.getElementById("continueToAccessResults");
continueToAccessResults.addEventListener("click",function(event){
    event.preventDefault();
    validateResultAccess()
});



// when user clicks particular college it directly fetch instituename name into collegename input

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const institutionName = urlParams.get("institutionName");
    console.log("Institution Name:", institutionName);

    const informationCollegeNameInput = document.getElementById("informationCollegeName");
    if (informationCollegeNameInput && institutionName) {
        informationCollegeNameInput.placeholder = institutionName;
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