var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["IdNumber"] = document.getElementById("IdNumber").value;
    formData["First"] = document.getElementById("First").value;
    formData["Last"] = document.getElementById("Last").value;
    formData["Cellphone"] = document.getElementById("Cellphone").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.IdNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.First;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Last;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Cellphone;
    cell4 = newRow.insertCell(4)
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("IdNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("First").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Last").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Cellphone").value = selectedRow.cells[3].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.IdNumber;
    selectedRow.cells[1].innerHTML = formData.First;
    selectedRow.cells[2].innerHTML = formData.Last;
    selectedRow.cells[3].innerHTML = formData.Cellphone;
  
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("IdNumber").value = '';
    document.getElementById("First").value = '';
    document.getElementById("Last").value = '';
    document.getElementById("Cellphone").value = '';
    selectedRow = null;
}
