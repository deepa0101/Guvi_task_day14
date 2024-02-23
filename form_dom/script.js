function addTableRow(){
    let loginForm = document.getElementById("form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    })

let firstName = document.getElementById('first-name').value;
let lastName = document.getElementById('last-name').value;
let Address = document.getElementById('address').value;
let Pincode = document.getElementById('pincode').value;
let gender = document.getElementById('gender').value;
let fc1 = document.getElementById("item1").value;
let fc2 = document.getElementById("item2").value;
let state = document.getElementById("state").value;
let country = document.getElementById("ctry").value;

let a = [firstName,lastName,Address,Pincode,gender,fc1,fc2,state,country];
var table = document.getElementById('table')
var tbl = document.getElementById('tbody')
var row = document.createElement("tr")
for (var i=0;i<a.length;i++){
    var cell=document.createElement("td");
    cell.innerText = a[i];
    row.appendChild(cell)
}
tbl.appendChild(row)
table.appendChild(tbl)
document.body.appendChild(table);
loginForm.reset();
}