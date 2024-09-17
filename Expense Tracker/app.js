const descrp = document.getElementById("text")
const cate = document.getElementById("category")
const amountinput = document.getElementById("amount")
const submit = document.getElementById("submit")

submit.addEventListener("click", getdata);

function getdata(event) { // event -- as an argument because when <form element> behaviour it by defaults submit and reload the page

    event.preventDefault(); // Prevent form submission that refreshes the page
    console.log(event.target);

    const name = descrp.value;
    const category = cate.value; // Get the selected category's text
    const amountValue = amountinput.value; // Use the renamed variable


    const table = document.getElementById("expenselist");
    const rows = table.insertRow(); // created an new row
    const namecell = rows.insertCell(0);
    const categorycell = rows.insertCell(1);
    const amountcell = rows.insertCell(2);


    namecell.textContent = name;
    categorycell.textContent=category;
    amountcell.textContent = amountValue;

    descrp.value='';
    cate.value='option1';
    amountinput.value='';
    





}



