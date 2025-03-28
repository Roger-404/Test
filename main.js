let table = document.getElementById('financeTable');

let tableRow = table.rows
let data = []
let span = table.getElementsByTagName("span")

for(let i=1; i < tableRow.length; i++){
  let cellsInRow = tableRow[i].getElementsByTagName("td");
  sum(cellsInRow)
}

function sum(cells){
  let rowsCellsData = []
  for (let i=1; i<cells.length; i++){
    let cellData = cells[i].innerText.trim().replace(/\s/g, '')
    rowsCellsData.push(+(cellData))
  }
  if(rowsCellsData[0]>rowsCellsData[1]) {
    cells[2].classList.toggle('green-bg')
  } else if (rowsCellsData[0]<rowsCellsData[1]) {
    cells[2].classList.toggle('red-bg')
  }
  check(rowsCellsData)
}


function check(array){
  let persent = array[0] / array[1]
  let persent2 = (persent - 1) * 100
  data.push(`${Math.floor(persent2)}%`)
  return data
}

function output(){
  for(let i=0; i<data.length; i++){
    span[i].textContent = data[i]
  }
}



output()
