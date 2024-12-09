const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must write somrthing in the list!!!!");
    }
    else{ // on click of the button =>addTask fuction tigger and add content as list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//Add in delete icon
        li.appendChild(span);
    }
    inputBox.value = "";//To remove the content from the the input field after adding as list
    saveData();
}

listContainer.addEventListener("click", function(e){// e <- event "Click"
    if(e.target.tagName === 'LI'){ //if we click on list, ( LI <- Added list)
        e.target.classList.toggle("checked");//Then, the list will marked as completed check marked
        saveData(); // save data after checked
    }
    else if(e.target.tagName === "SPAN"){//If we clicked on delete, ( SPAN <- Delete span)
        e.target.parentElement.remove();//Then, list will delete
        saveData(); // save data after deleting
    }
},false);

// Function to save all the previous changes which I have done in this list
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // The all contents in the list container is stored in the browser in the name of data
}

// Display the data after opening(saved data should be there)
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();