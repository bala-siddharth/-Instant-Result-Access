
// shows list of college name with selected district names

document.addEventListener("DOMContentLoaded", function () {
    let districtCollegeContainer = document.getElementById("districtCollegeContainer");
    districtCollegeContainer.classList.add("districts-college-container");
  
    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get("state");
    const district = urlParams.get("district");
  
    const storedData = JSON.parse(localStorage.getItem('listOfCollegeData'));
  
    function fetchCollegesForDistrict(state, district) {
      const filteredColleges = storedData.filter(college => college.district === district && college.state === state);
      displayColleges(filteredColleges);
    }
    fetchCollegesForDistrict(state, district);
    
    // displaying college names
    function displayColleges(colleges) {
        const collegeListContainer = document.getElementById("districtwiseCollegeListContainer");
        collegeListContainer.innerHTML = "";
  
        let listOfCollegeNameCont=document.createElement("div");
        listOfCollegeNameCont.classList.add("list-of-college-cont");
        collegeListContainer.appendChild(listOfCollegeNameCont);
  
        let listOfMiniCont=document.createElement("div");
        listOfCollegeNameCont.appendChild(listOfMiniCont);
  
        let listOfCollegeNameImg=document.createElement("img");
        listOfCollegeNameImg.src="../images/clg-location-img.png";
        listOfCollegeNameImg.classList.add("list-of-college-nmae-img");
        listOfMiniCont.appendChild(listOfCollegeNameImg);
  
        let listOfCollegeName=document.createElement("span")
        listOfCollegeName.textContent="List of colleges";
        listOfCollegeName.classList.add("list-of-collge-name");
        listOfMiniCont.appendChild(listOfCollegeName);
  
        let listOfMiniCont1=document.createElement("div");
        listOfMiniCont1.classList.add("list-of-mini-cont1");
        listOfCollegeNameCont.appendChild(listOfMiniCont1);
  
        let collegeSearchInput=document.createElement("input");
        collegeSearchInput.setAttribute('type','text');
        collegeSearchInput.classList.add("searchinput-form-box");
        collegeSearchInput.id="collegeSearchField";
        collegeSearchInput.placeholder="Search college?";
        listOfMiniCont1.appendChild(collegeSearchInput);
  
        let prefixSpan = document.createElement("i");
        prefixSpan.classList.add("search-input-prefix","fa-solid","fa-magnifying-glass");
        listOfMiniCont1.appendChild(prefixSpan);
  
  
        const collegeE1= document.createElement("div");
        collegeE1.classList.add("college-item");
        collegeE1.id="collegeE1"
        collegeListContainer.appendChild(collegeE1);
        
        for (const college of colleges) {
    
        const collegeName = document.createElement("li");
        collegeName.classList.add("list-of-clg");
        collegeE1.appendChild(collegeName);
  
        const anchorCollegeName=document.createElement("a");
        anchorCollegeName.textContent=college.institution_name;
        anchorCollegeName.setAttribute("data-institution-name", college.institution_name);
        anchorCollegeName.href=`../public/get_rslt.html?institutionName=${encodeURIComponent(college.institution_name)}`;
        collegeName.appendChild(anchorCollegeName);
        }
  
        function toFindColleges() {
        let collegeNameE1 = document.getElementById("collegeE1");
        collegeNameE1.textContent = "";
    
        let foundColleges = false; // Flag to check if any colleges were found
    
        for (let college of colleges) {
            let resultName = college.institution_name.toLowerCase();
    
            if (resultName.includes(searchInputVal)) {
                const collegeName = document.createElement("li");
                collegeName.classList.add("list-of-clg");
                collegeNameE1.appendChild(collegeName);
    
                const anchorCollegeName = document.createElement("a");
                anchorCollegeName.textContent = college.institution_name;
                anchorCollegeName.href = `../public/get_rslt.html?institutionName=${encodeURIComponent(college.institution_name)}`;
                collegeName.appendChild(anchorCollegeName);
    
                foundColleges = true;
            }
        }
    
        if (!foundColleges) {
            
            const noCollegesMessage = document.createElement("div");
            noCollegesMessage.classList.add("no-clg-msg-cont");
            collegeNameE1.appendChild(noCollegesMessage);
  
  
            const noCollegesimg = document.createElement("img");
            noCollegesimg.src = "../images/colleges-not-found.webp";
            noCollegesimg.classList.add("fques-img1"); 
            noCollegesMessage.appendChild(noCollegesimg);
  
            const noClgText=document.createElement("h5");
            noClgText.textContent="College not found  !!!!";
            noClgText.classList.add("clg-nt-fnd");
            noCollegesMessage.appendChild(noClgText);
  
            const noClgText1=document.createElement("h5");
            noClgText1.textContent="Enter Correct College Name,Ensure Accurate Result Access";
            noClgText1.classList.add("clg-nt-fnd");
            noCollegesMessage.appendChild(noClgText1);
        }
        }
    
        function onColleges(event) {
        searchInputVal = event.target.value;
        toFindColleges();
        }
  
        collegeSearchInput.addEventListener("keyup", onColleges);
    }       
  
    // Displaying selected state
    let stateNameHeading = document.createElement("h1");
    stateNameHeading.classList.add("state-list-heading");
    stateNameHeading.textContent = state;
    districtCollegeContainer.appendChild(stateNameHeading);
  
  
    // displaying all districts of the selected state and displaying them in alphabetical order
    let districtsList = document.querySelectorAll(".minimax-dropdown a");
    let stateDistricts = [];
  
    for (let i = 0; i < districtsList.length; i++) {
        let districtName = districtsList[i].textContent;
        let parentState = districtsList[i].closest(".mini-dropdown-list").querySelector("a").textContent;
        if (parentState === state) {
            stateDistricts.push(districtName);
        }
    }
    stateDistricts.sort((a, b) => a.localeCompare(b));
  
    let columnContainer = document.createElement("div");
    columnContainer.classList.add("district-columns");
    let selectedDistrict = district;
  
    for (let j = 0; j < stateDistricts.length; j++) {
        let districtLink = document.createElement("a");
        districtLink.classList.add("district-container", "district-list-names");
        districtLink.style.textDecoration = "none";
        districtLink.style.listStyleType = "none";
        districtLink.textContent = stateDistricts[j];
        districtLink.id = stateDistricts[j].replace(/\s+/g, '');
  
        if (stateDistricts[j] === selectedDistrict) {
            districtLink.classList.add("district-name");
        }
        districtLink.addEventListener("click", function () {
            // Reset the color of all district links
            let allDistrictLinks = document.querySelectorAll(".district-container");
            for (let link of allDistrictLinks) {
                link.classList.remove("district-name");
            }
            // Change the color of the clicked district link
            this.classList.add("district-name");
            // Update the URL with the selected district
            const newUrl = window.location.pathname + "?state=" + state + "&district=" + stateDistricts[j];
            history.pushState({}, "", newUrl);
            fetchCollegesForDistrict(state, stateDistricts[j]);
        });
        columnContainer.appendChild(districtLink);
    }
    districtCollegeContainer.appendChild(columnContainer);          
    
    // Scroll to the selected district to another page
    if (selectedDistrict) {
        let selectedDistrictElement = document.getElementById(selectedDistrict.replace(/\s+/g, ''));
        if (selectedDistrictElement) {
            selectedDistrictElement.scrollIntoView({ behavior: "smooth" });
        }
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



// navbar to visible on top while scrolling

const contactNavBg = document.querySelector('.college-nav-bg');
const dropdownLinks = document.querySelectorAll('.dropdown-list a');
const resultNameLink = document.querySelector('.navbar-brand.result-name');
const minimaxDropdownLinks = document.querySelectorAll('.mini-dropdown-list a');
const resultNameLink2=document.querySelector(`.result-nav-heading`);

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        contactNavBg.style.backgroundColor = 'white';
        resultNameLink.style.color = 'black';
        resultNameLink2.style.color='black';
        contactNavBg.style.borderBottom="1px solid rgba(0,0,0,.1)"
        dropdownLinks.forEach(link => {
          link.style.color = 'black';
        });
    } else {
        contactNavBg.style.backgroundColor = '';
        dropdownLinks.forEach(link => {
          link.style.color = '';
        });
        contactNavBg.style.borderBottom="";
        resultNameLink.style.color = '';
        resultNameLink2.style.color='';
    }
});
minimaxDropdownLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
      link.style.color = '#007fff';
  });

  link.addEventListener('mouseout', () => {
      link.style.color = '';
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