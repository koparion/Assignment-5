let table = document.getElementById("tbody");

let addingRow = document.getElementById("addRow").addEventListener("click", () => {
    for(let i = 0; i < table.rows.length; i++)
   {
     //let newCol = table.rows[i].insertCell(-1);
    let row = table.insertRow(-1)
    table.row[i].insertCell(-1);
   }
})

let addingCol = document.getElementById("addCol").addEventListener("click", () => { 
   for(let i = 0; i < table.rows.length; i++)
   {
     //let newCol = table.rows[i].insertCell(-1);
     table.rows[i].insertCell(-1);
   }
})

let removeRow = document.getElementById("removeRow").addEventListener("click", () => {
  table.deleteRow(0);
})

let removeColumn = document.getElementById("removeCol").addEventListener("click", () => {
  for(let i = 0; i < table.rows.length; i++)
   { 
      table.rows[i].deleteCell(-1); 
   } 
})

let changeColor = document.getElementById("colors").addEventListener("change", (event) => {
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

let hoverColorChange = document.getElementById("colors2").addEventListener("mouseover", (event) => {
  let row = document.getElementsByTagName('td');   
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
let resetColor = document.getElementById("reset").addEventListener("click", () =>{
  document.querySelector(".table").style = null;
})
