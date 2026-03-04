function addStudent() {

    // values from input box
    var name = document.getElementById("name").value;
    var reg = document.getElementById("reg").value;
    var marks = document.getElementById("marks").value;
    var dept = document.getElementById("dept").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var mob = document.getElementById("mob").value;

    // Check empty fields
    if(name == "" || reg == "" || marks == "" || dept == "" || age == "" || address == "" || mob == "") {
        alert("Fill all details");
        return;
    }
    // To get table
    var table = document.getElementById("studentList");

    // new row create 
    var row = table.insertRow();

    // data row adding 
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = reg;
    row.insertCell(2).innerHTML = marks;
    row.insertCell(3).innerHTML = dept;
    row.insertCell(4).innerHTML = age;
    row.insertCell(5).innerHTML = address;
    row.insertCell(6).innerHTML = mob;

//    delete button add
    var deleteBtn = row.insertCell(7);
    deleteBtn.innerHTML = "<button onclick='deleteStudent(this)'>Delete</button>";

//    clear the input 
    document.getElementById("name").value = "";
    document.getElementById("reg").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("mob").value = "";
}

function deleteStudent(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
