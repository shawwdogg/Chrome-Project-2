let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage
  render(myLeads)

}

const tabs = [
  {}
]

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${leads[i]} 
        </a>
        </li>
        `;
  }

deleteBtn.addEventListener("dblclick", function() {
localStorage.clear()
myLeads = []
render(myLeads)
})



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify("myLeads"));
  render(myLeads)
})

tabBtn.addEventListener("click", function () {
console.log(tabs[0].url)
})
  ulEl.innerHTML = listItems;
}
