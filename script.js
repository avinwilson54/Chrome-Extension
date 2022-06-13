let myLeads = [] ;
let oldLeads = [] ;
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-log") ;
const ulEl = document.getElementById("ul-el") ;
const deleteBtn = document.getElementById("delete-btn") ;
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) ;

if (leadsFromLocalStorage)  {
     myLeads = leadsFromLocalStorage ;
     render(myLeads);
}

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        myLeads.push(tabs[0].url) ;
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) ;
        render(myLeads) ;
    }) ;
    
}) ;

function render(leads) {
    let listItems = "" ;
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                    <li>
                        <a href="${leads[i]}" target="_blank"> 
                            ${leads[i]} 
                        </a> 
                    </li>
                    `;
         // ulEl.innerText += `\n ${myLeads[i]}` ; works same as above line but \n new line is breaked down using innerText function
        /* const li = document.createElement("li") ; Another way of doing it
        li.textContent = myLeads[i] ;
        ulEl.append(li) ; */
    }
    ulEl.innerHTML = listItems ; // used this to improve the performance of the code, using innerHTML funcction we can create HTML elements.
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear() ;
    myLeads = [] ;
    render(myLeads) ;
}) ;

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value) ;
    inputEl.value = "" ;
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) ;
    render(myLeads) ;
}) ;