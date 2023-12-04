// shows state and districts in navbar
const gettingDropdownList=document.getElementById("gettingDropdownList");

const stateStoredData = JSON.parse(localStorage.getItem('statesData'));
if (stateStoredData) {
  stateStoredData.forEach((items)=>{
    const miniDropdownList=document.createElement("li");
    miniDropdownList.classList.add("mini-dropdown-list");
    gettingDropdownList.appendChild(miniDropdownList);

    const stateName=document.createElement("a");
    stateName.textContent=items.state;
    miniDropdownList.appendChild(stateName);

    const caretIcon=document.createElement("i");
    caretIcon.classList.add("fa-solid","fa-caret-right");
    miniDropdownList.appendChild(caretIcon);

    const minimaxDropdown=document.createElement("ul");
    minimaxDropdown.classList.add("minimax-dropdown","pt-3","pb-3");
    miniDropdownList.appendChild(minimaxDropdown);

    const districtContainer=items.districts;
    
    districtContainer.forEach((districtItem)=>{
        const districtListE1=document.createElement("li");
        const districtAnchorItem=document.createElement("a");
        districtAnchorItem.textContent=districtItem;
        districtAnchorItem.href = "../public/rslt_statewise.html?state=" + encodeURIComponent(items.state) + "&district=" + encodeURIComponent(districtItem);
        districtListE1.appendChild(districtAnchorItem);
        minimaxDropdown.appendChild(districtListE1);
    });
});
} else {
  console.error("stateStoredData is null or undefined");
}




// shows state and districts sequentially one after the another

function showListItemsSequentially(listItems, delay = 150) {
  let timeoutIds = [];
  listItems.forEach((item, index) => {
    timeoutIds.push(
      setTimeout(() => {
        item.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * delay)
    );
  });
  return timeoutIds;
}

const miniDropdowns = document.querySelectorAll('.mini-dropdown-list');
miniDropdowns.forEach(miniDropdown => {
    const listItems = miniDropdown.querySelectorAll('.minimax-dropdown li');
    let timeoutIds = []; 
    miniDropdown.addEventListener('mouseenter', () => {
    // Clear any ongoing timeouts and reset styles for other dropdowns
    miniDropdowns.forEach(otherDropdown => {
      if (otherDropdown !== miniDropdown) {
        const otherListItems = otherDropdown.querySelectorAll('.minimax-dropdown li');
        otherListItems.forEach(item => {
          item.style.transition = '';
          item.style.opacity = '0';
          item.style.transform = 'translateY(-10px)';
        });
      }
    });

    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = []; 

    listItems.forEach(item => {
      item.style.transition = '';
      item.style.opacity = '0';
      item.style.transform = 'translateY(-10px)';
    });

    setTimeout(() => {
      timeoutIds = showListItemsSequentially(listItems);
    }, 1);
    });
    miniDropdown.addEventListener('mouseleave', () => {
      listItems.forEach(item => {
        item.style.transition = '';
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
      });

      timeoutIds.forEach(id => clearTimeout(id));
      timeoutIds = []; 
    });
});