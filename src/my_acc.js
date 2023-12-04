
document.addEventListener("DOMContentLoaded", function () {
    const topFquesElements = document.querySelectorAll(".top-account");
    const bottomFquesElements = document.querySelectorAll(".bottom-account");
    let currentIndex = -1;

    topFquesElements.forEach(function (topFques, index) {
        topFques.addEventListener("click", function () {
            const targetId = topFques.getAttribute("data-target");
            const bottomFques = document.getElementById(targetId);
            const iconAccount = document.querySelectorAll(".icon-account")[index];
            const accountContentHead=document.querySelectorAll(".account-content-head")[index];

            if (bottomFques) {
                bottomFquesElements.forEach(function (bfElement, bfIndex) {
                    if (index === bfIndex) {
                        bfElement.style.display = bfElement.style.display === "block" ? "none" : "block";
                
                        if (currentIndex !== -1 && currentIndex !== index) {
                            // Revert changes for the previously selected index
                            const prevIconAccount = document.querySelectorAll(".icon-account")[currentIndex];
                            const prevAccountContentHead = document.querySelectorAll(".account-content-head")[currentIndex];
                            prevIconAccount.classList.remove("change-icon-account");
                            prevAccountContentHead.classList.remove("change-content-head");
                        }

                        if (currentIndex === index) {
                            // Toggle the changes if clicking the same element
                            iconAccount.classList.toggle("change-icon-account");
                            accountContentHead.classList.toggle("change-content-head");
                        } else {
                            iconAccount.classList.add("change-icon-account");
                            accountContentHead.classList.add("change-content-head");
                        }
                        currentIndex = index;
                    } else {
                        bfElement.style.display = "none";
                    }
                });
            }
        });
    });
    if (topFquesElements.length > 0) {
        bottomFquesElements[0].classList.add("transition-effect");
        bottomFquesElements[0].style.display = "block";
        const iconAccount = document.querySelectorAll(".icon-account")[0];
        const accountContentHead = document.querySelectorAll(".account-content-head")[0];
        iconAccount.classList.add("change-icon-account");
        accountContentHead.classList.add("change-content-head");
        currentIndex = 0; 
    }
});




const listAccountElements = document.querySelectorAll(".list-account");
listAccountElements[0].classList.add("change-list-account");

document.addEventListener("DOMContentLoaded", function (){
    listAccountElements.forEach(function (listAccount) {
        listAccount.addEventListener("click", function () {
            listAccountElements.forEach(function (element) {
                element.classList.remove("change-list-account");
            });
            listAccount.classList.add("change-list-account");

            const detailId = listAccount.getAttribute("data-detail-id");
            // Hide all detailed list items
            const detailedListItems = document.querySelectorAll(".detailed-list-account");
            detailedListItems.forEach(function (item) {
                item.style.display = "none";
            });
            // // Show the relevant detailed list item based on the clicked list item
            const relevantDetailItem = document.getElementById(detailId);
            if (relevantDetailItem) {
                relevantDetailItem.style.display = "block";
            }
        }); 
    });

    const rightItemAccount=document.querySelectorAll(".sub-unlist-account li");
    const detailedListItems = document.querySelectorAll(".each-sub-account");
    rightItemAccount.forEach((value,index)=>{
        if(index===0 || index === 3 || index === 6 || index === 7 || index === 11){
            value.style.listStyleType = "disc";
            value.style.color="#0cec2d";
        }
        value.addEventListener("click", ()=> {
            rightItemAccount.forEach((item) => {
                item.style.listStyleType = "none";
                item.style.color="";
            });
            value.style.listStyleType = "disc";
            value.style.color="#0cec2d";
            detailedListItems.forEach(function (item,index1){
                if (index===index1){
                    item.scrollIntoView({ behavior: "smooth" });
                }
            })
        });
    })
})




const toggleButton = document.getElementById("toggleNav");
const navbarNav = document.getElementById("navbarNavAltMarkup");
toggleButton.addEventListener("click", function () {
    navbarNav.classList.toggle("chnage-navabar-account");
});



// Retrieve the number of days elapsed from localStorage
const daysElapsed = localStorage.getItem('userDaysElapsed');
if (daysElapsed) {
    const days = parseInt(daysElapsed);
    console.log("Days Elapsed:", days);
}







const storedFormDataArray = JSON.parse(localStorage.getItem('formDataArray'));

if (storedFormDataArray) {
    storedFormDataArray.forEach((storedFormData) => {
        const storedUserEmail = localStorage.getItem("userEmail"); //get users details which he sigin in

        if (storedFormData.email === storedUserEmail) {
            const { email, phoneno,country,displayName,firstName,lastName} = storedFormData;
            console.log(storedFormData);
            // Personal information
            const profileName = document.getElementById("profileName");
            const profileEmail = document.getElementById("profileEmail");
            const fullNameAcc = document.getElementById("fullNameAcc");
            const displayNameAcc = document.getElementById("displayNameAcc");
            const countryNameAcc = document.getElementById("countryNameAcc");
            const genderACC = document.getElementById("genderACC");

            // storedFormData.displayName = email.replace("@gmail.com", "");

            // displayNameAcc.value = storedFormData.displayName;
            // profileName.textContent = storedFormData.displayName;
            displayNameAcc.value=displayName;
            profileName.textContent=displayName;

            profileEmail.textContent = email;
            // fullNameAcc.value = email.replace("@gmail.com", "");
            fullNameAcc.value=firstName+" "+lastName;
            countryNameAcc.value = country;

            const profileChanges = () => {
                document.getElementById("proDet1").style.display = "none";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "block";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.add("modify-item-field");
                });

                displayNameAcc.removeAttribute("disabled");
                document.getElementById("country").classList.add("clk-country");
                document.getElementById("saveCancelBtn").style.display = "block";
                document.getElementById("proDet2").style.display = "block";
                
                genderACC.removeAttribute("disabled");
                genderACC.classList.add("modify-gender-box");
            };

            const profileEdit = document.getElementById("profileEdit");
            profileEdit.addEventListener("click", (event) => {
                event.preventDefault();
                profileChanges();
                profileEdit.style.display = "none";
            });


            const saveValidateForm=()=>{
                const firstNameAcc=document.getElementById("firstNameAcc");
                const lastNameAcc=document.getElementById("lastNameAcc");
                const AddressAcc=document.getElementById("AddressAcc");
                const genderACC = document.getElementById("genderACC");
                const fullNameAcc=document.getElementById("fullNameAcc");

                storedFormData.firstName=firstNameAcc.value;
                firstName.value=storedFormData.firstName;

                storedFormData.lastName=lastNameAcc.value;
                lastNameAcc.value=storedFormData.lastName

                storedFormData.Address=AddressAcc.value;
                AddressAcc.value=storedFormData.Address;

                storedFormData.displayName=displayNameAcc.value;
                displayNameAcc.value=storedFormData.displayName;

                storedFormData.gender=genderACC.value;
                genderACC.value=storedFormData.gender;

                profileName.textContent=storedFormData.displayName;
                fullNameAcc.value=storedFormData.firstName+" "+storedFormData.lastName;


                 // Update the storedFormDataArray with the updated storedFormData
                 const updatedFormDataArray = JSON.parse(localStorage.getItem('formDataArray'));
                 updatedFormDataArray.forEach((item, index) => {
                     if (item.email === storedUserEmail) {
                         updatedFormDataArray[index] = storedFormData;
                     }
                 });
                
                // Store the updated data back in localStorage
                localStorage.setItem('formDataArray', JSON.stringify(updatedFormDataArray));


                document.getElementById("proDet1").style.display = "block";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "none";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.remove("modify-item-field");
                });
            
                
                displayNameAcc.setAttribute("disabled", "true");
                document.getElementById("country").classList.remove("clk-country");
                document.getElementById("saveCancelBtn").style.display = "none";
                document.getElementById("proDet2").style.display = "none";
                
                genderACC.setAttribute("disabled", "true");
                genderACC.classList.remove("modify-gender-box");
                profileEdit.style.display = "block";
            }
            
            const profileSave=document.getElementById("profileSave");
            profileSave.addEventListener("click",(event)=>{
                event.preventDefault();
                saveValidateForm()
            })
            
            const cancelValidateForm=()=>{

                const firstNameAcc=document.getElementById("firstNameAcc");
                const lastNameAcc=document.getElementById("lastNameAcc");
                const AddressAcc=document.getElementById("AddressAcc");
                firstNameAcc.value=storedFormData.firstName;
                lastNameAcc.value=storedFormData.lastName;
                AddressAcc.value=storedFormData.Address;
                displayNameAcc.value=storedFormData.displayName;

                document.getElementById("proDet1").style.display = "block";
                document.querySelectorAll(".hide").forEach((hideEl) => {
                    hideEl.style.display = "none";
                });
                document.querySelectorAll(".item-field").forEach((field) => {
                    field.classList.remove("modify-item-field");
                });
            
                displayNameAcc.setAttribute("disabled", "true");
                document.getElementById("country").classList.remove("clk-country");
                document.getElementById("saveCancelBtn").style.display = "none";
                document.getElementById("proDet2").style.display = "none";
                const genderACC = document.getElementById("genderACC");
                genderACC.setAttribute("disabled", "true");
                genderACC.classList.remove("modify-gender-box");
                profileEdit.style.display = "block";


                // console.log(storedFormData);
            }
            
            const profileCancel=document.getElementById("profileCancel");
            profileCancel.addEventListener("click",(event)=>{
                event.preventDefault()
                cancelValidateForm()
            })


            // Email address
            const MyEmail = document.getElementById("MyEmail");
            MyEmail.textContent = email;

            // Mobile numbers
            const myPhoneNo = document.getElementById("myPhoneNo");
            myPhoneNo.textContent = `(+91) ${phoneno}`;
        }
    });
}




const hideDisplayFeatAcc=document.getElementById("hideDisplayFeatAcc");
hideDisplayFeatAcc.addEventListener("click",(event)=>{
    event.preventDefault()
    const backgroundFeatueBox=document.getElementById("backgroundFeatueBox");
    backgroundFeatueBox.classList.toggle("background-Featue-Box");

    const displayFeaturesInAcc=document.getElementById("displayFeaturesInAcc");
    displayFeaturesInAcc.classList.toggle("features-acc");

    const resultFeatureHome=document.getElementById("resultFeatureHome");
    resultFeatureHome.addEventListener("click",()=>{
        window.location.href = "../src/rslt_home.js";
    })
})




const subEmailBox3 = document.getElementById("subEmailBox3");
const backgroundsubEmailBox3 = document.getElementById("backgroundsubEmailBox3");
const displayAddEmailBox = document.getElementById("displayAddEmailBox");
const addEmailCloseIcon = document.getElementById("addEmailCloseIcon");

subEmailBox3.addEventListener("click", (event) => {
    event.preventDefault();
    backgroundsubEmailBox3.style.display="block";
    displayAddEmailBox.style.display="block";
});

addEmailCloseIcon.addEventListener("click", (event) => {
    event.preventDefault();
    backgroundsubEmailBox3.style.display="none";
    displayAddEmailBox.style.display="none";
});




// adding new email to user profile

const emailPattern = /^[A-Za-z0-9._%+-]+@gmail.com$/;
const add_email_action=document.getElementById("add_email_action");
const newEmailField=document.getElementById("newEmailField");
const newEmailErrMsg=document.getElementById("newEmailErrMsg");
const addEmailDisplayCont=document.getElementById("addEmailDisplayCont");
const addEmailOtpCont=document.getElementById("addEmailOtpCont");
const userAddInputEmail=document.getElementById("userAddInputEmail");

add_email_action.addEventListener("click", (event) => {
    event.preventDefault();
    validateEmail();
});

function sendVerificationNewEmail() {
    const emailE1=document.getElementById("newEmailField");
    const otpDigitNumber = Math.floor(Math.random() * (9999999- 1000000 + 1)) + 1000000;
    const newotpField=document.getElementById("newotpField");
    let emailbody=`<html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f4f4f4;
                                    padding: 20px;
                                    text-align: center;
                                }
                                .container-fluid {
                                    background-color: #c6cbd4;
                                    padding: 20px;
                                    border: 1px solid #c6cbd4;
                                    border-radius: 5px;
                                }
                                .mail-templte-cont{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                }
                                .mail-templte{
                                    background-color: #fff;
                                    border: solid 1px #fafafa;
                                    width: 40%;
                                    padding: 0px 20px;
                                }
                                .mail-templte h1{
                                    text-align: left;
                                    font-weight: lighter;
                                    color: #62656b;
                                }
                                .mail-templte h5{
                                    text-align: left;
                                }
                                .otp {
                                    font-size: 24px;
                                }
                                .img-temp{
                                    width: 100%;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mail-templte-cont">
                                            <div class="mail-templte">
                                                <h1>SIDLLY</h1>
                                                <h5>One-Time-Password:${otpDigitNumber}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </body>
                    </html>`;

    Email.send({
        SecureToken : "3312ba01-feeb-4dc5-9fd4-1942c544b97e",
        To : emailE1.value,
        From : "balasiddharth198@gmail.com",
        Subject : "sidlly corporation",
        Body : emailbody
    }).then(
        message => {
            if(message === "OK"){
                alert("OTP sent to your email "+emailE1.value);
                const verifyOtp=document.getElementById("verifyOtp");
                verifyOtp.addEventListener('click',()=>{
                    if(parseInt(newotpField.value) === otpDigitNumber){
                        alert("Email address verified...");
                        backgroundsubEmailBox3.style.display="none";
                        displayAddEmailBox.style.display="none";
                        
                        const emailAddBoxCont=document.getElementById("emailAddBoxCont");

                        const emailBox2Of3=document.createElement("div");
                        emailBox2Of3.classList.add("email-box2");
                        emailAddBoxCont.appendChild(emailBox2Of3);

                        const addEmailIconCont=document.createElement("div");
                        addEmailIconCont.classList.add("newemail-address-icon");
                        emailBox2Of3.appendChild(addEmailIconCont);

                        const emailIconE1=document.createElement("i");
                        emailIconE1.classList.add("fa-regular","fa-envelope");
                        addEmailIconCont.appendChild(emailIconE1);

                        const emailAddressInfoCont=document.createElement("emailAddressInfoCont");
                        emailAddressInfoCont.classList.add("email-address-info");
                        emailBox2Of3.appendChild(emailAddressInfoCont);

                        const userMailInfo=document.createElement("p");
                        userMailInfo.textContent=emailE1.value;
                        emailAddressInfoCont.appendChild(userMailInfo);

                        const timeOfUserLogin=document.createElement("span");
                        timeOfUserLogin.textContent="a few seconds ago";
                        emailAddressInfoCont.appendChild(timeOfUserLogin);
                    }
                    else{
                        alert("Invalid OTP");
                    }
                })
            }
        }
    );
}

function validateEmail() {
    const newUserMailValue = newEmailField.value;
    const isValidEmail = emailPattern.test(newUserMailValue);
    const isEmpty = newUserMailValue === "";
    newEmailErrMsg.textContent = isEmpty ? "Please enter a valid email address" : isValidEmail ? "" : "Please enter a valid email address (e.g., username@gmail.com)";

    setTimeout(function() {
        if (isValidEmail) {
            addEmailDisplayCont.style.display = "none";
            addEmailOtpCont.style.display = "block";
            userAddInputEmail.textContent=newUserMailValue;
            sendVerificationNewEmail();
        }
        else {
            addEmailDisplayCont.style.display = "block";
            addEmailOtpCont.style.display = "none";
            userAddInputEmail.textContent="";
        }
    }, 1000);
}