let table = document.getElementById("tbody");

let addingRow = document.getElementById("addRow").addEventListener("click", () => {
  //  document.querySelector("row").innerHTML += '<div class="col border border-dark">${row.children.length + 1}</div>';
    // let row = document.querySelector(".row");  
    let newRow = document.createElement("tr");
    //let newCol = document.createElement("td");
     //newRow.appendChild(newCol);
  // newRow.classList.add("border-dark my-2")
    table.append(newRow);
})

let addingCol = document.getElementById("addCol").addEventListener("click", () => { 
  //let newCol = document.createElement("td");
    //newRow.append(newCol)
   // let column = document.getElementsByTagName("tr");
   for(let i =0; i<table.rows.length; i++)
   {
     //let newCol = table.rows[i].insertCell(-1);
     table.rows[i].insertCell(-1);
      //table.rows[1].insertCell(-1);
   }
})