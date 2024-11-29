const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("#btn");

//function click btn and processed 
btn.addEventListener("click", () => {
      if(inputBox.value === ""){  // input if value is empty 
         alert("Pleas Wright Something") // alert 
      }
      else{
        let li = document.createElement("li"); // create List tag 
        li.innerHTML = inputBox.value; // store li input box value value show the data in the web page
        listContainer.appendChild(li); // ul is parent tag and add ul inner so using for appendChild 
        let span = document.createElement("span"); // create a element for html and using for close button 
        span.innerHTML = "\u00d7";  // close icon
        li.appendChild(span);   // add parent element for span
      }
      inputBox.value = "";   // add your value and clicke add so clear your inputbox 
      saveData()   //you data stored function 
})


listContainer.addEventListener("click", (e) => {   //close and add arro 
     if(e.target.tagName === "LI"){     // e is argument using for checked has clicked for throught and Show icon 
        e.target.classList.toggle("checked"); // add icon style 
        saveData()     //you data stored function 
     }else if(e.target.tagName === "SPAN"){  //remove data 
        e.target.parentElement.remove();
        saveData()
     
    
      }
      
},false);

//local data stored 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//show data for local data
function showTask(){
     listContainer.innerHTML = localStorage.getItem("data")
}

showTask() // call back function for data
