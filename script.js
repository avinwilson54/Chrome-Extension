let myLeads = [] ;
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-log") ;
const ulEl = document.getElementById("ul-el") ;
const deleteBtn = document.getElementById("delete-btn") ;

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) ;
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage)  {
     myLeads = leadsFromLocalStorage ;
     renderLeads() ;
}
// console.log(Boolean(leadsFromLocalStorage)) ; to check whether the function is truthy or falsy value or using !! instead of boolean

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear() ;
    myLeads = [] ;
    renderLeads() ;
}) ;

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value) ;
    inputEl.value = "" ;
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) ;
    renderLeads() ;
}) ;

function renderLeads() {
    let listItems = "" ;
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                    <li>
                        <a href="${myLeads[i]}" target="_blank"> 
                            ${myLeads[i]} 
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