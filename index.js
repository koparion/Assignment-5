let addingRow = document.getElementById("addRow").addEventListener("click", () => {
  //  document.querySelector("row").innerHTML += '<div class="col border border-dark">${row.children.length + 1}</div>';
    // let row = document.querySelector(".row");  
    let newRow = document.createElement("tr");
    //let newCol = document.createElement("td");
     //newRow.appendChild(newCol);
  // newRow.classList.add("border-dark my-2")
    document.getElementById("tbody").append(newRow);
})

let addingCol = document.getElementById("addCol").addEventListener("click", () => { 
  let newCol = document.createElement("td");
    newRow.append(newCol)
  document.getElementById("tbody").append(newCol);
})