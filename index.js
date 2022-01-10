let table = document.getElementById("tbody");
//●	add rows to the grid
let addingRow = document.getElementById("addRow").addEventListener("click", () => {
    let row = table.insertRow(table.rows.length)
    for(let i = 0; i < table.rows[0].cells.length; i++)
   {
    row.insertCell(i);
   }
})
//●	add columns to the grid
let addingCol = document.getElementById("addCol").addEventListener("click", () => { 
   for(let i = 0; i < table.rows.length; i++)
   {
     //let newCol = table.rows[i].insertCell(-1);
     table.rows[i].insertCell();
   }
})
//●	remove rows from the grid
let removeRow = document.getElementById("removeRow").addEventListener("click", () => {
  table.deleteRow(0);
})
//●	remove columns from the grid
let removeColumn = document.getElementById("removeCol").addEventListener("click", () => {
  for(let i = 0; i < table.rows.length; i++)
   { 
      table.rows[i].deleteCell(-1); 
   } 
})
//●	fill all uncolored cells with the currently selected color
//●	fill all cells with the currently selected color
let changeColor = document.getElementById("colors").addEventListener("click", (event) => {
   let newT = document.querySelector(".table");
   if("" === event.target.value)
   {
        newT.style = null;
   }
  if("red" === event.target.value)
    {
      for(let i = 0; i < table.rows.length; i++)
        {
          //let newCol = table.rows[i].insertCell(-1);
          newT.style.backgroundColor = "red";
        }
    }
    if("green" === event.target.value)
    {
      newT.style.backgroundColor = 'green';
    }
    if("blue" === event.target.value)
    {
      newT.style.backgroundColor = 'blue';
    }
    if("orange" === event.target.value)
    {
      newT.style.backgroundColor = 'orange';
    }
  })
 //● click on a single cell, changing its color to the currently selected color
//●	click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
let hoverColorChange = document.getElementById("colors2").addEventListener("mouseover", (event) => {
  let row = document.getElementsByTagName('td');   
  if("" === event.target.value)
   { 

   }
  if(event.target.value == "red")
        {
          for(let i = 0 ; i < row.length; i++)
              { 
                row[i].onmouseover = function() {
                  this.style.backgroundColor = 'red';
              }
          }
        }
        if(event.target.value == "green")
        {
          for(let i = 0 ; i < row.length; i++)
              { 
                row[i].onmouseover = function() {
                  this.style.backgroundColor = 'green';
              }
            }
          }
        if(event.target.value == "blue")
        {
          for(let i = 0 ; i < row.length; i++)
              { 
                row[i].onmouseover = function() {
                  this.style.backgroundColor = 'blue';
              }
            }
          }
        if(event.target.value == "orange")
        {
          for(let i = 0 ; i < row.length; i++)
              { 
                row[i].onmouseover = function() {
                  this.style.backgroundColor = 'orange';
              }
            }
          }
})
// ●	clear all cells/restore all cells to their original/initial color
let resetColor = document.getElementById("reset").addEventListener("click", (event) =>{
  let select = document.querySelector(".table").style = null;
  let clear = document.getElementsByTagName('td');
  [...clear].forEach(clear => {
    clear.style.backgroundColor = null;
  });
})
