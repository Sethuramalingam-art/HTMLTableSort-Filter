var dataTable = [
  {
    name: "Sethu",
    rollNo: 1,
    children: "magi",
  },
  {
    name: "Prasanna",
    rollNo: 2,
    children: "son",
  },
  {
    name: "Kumar",
    rollNo: 3,
    children: "daug",
  },
  {
    name: "Jegathish",
    rollNo: 4,
    children: "jegs",
  },
  {
    name: "Tamil",
    rollNo: 5,
    children: "no child",
  },
];

var container = document.getElementById("generateTable");
var parentTable = document.createElement("table");
parentTable.setAttribute("id", "myTable");
container.appendChild(parentTable);
var headerTable = document.createElement("thead");
var bodyTable = document.createElement("tbody");

var headerRow = document.createElement("tr");
var filterRow = document.createElement("tr");
Object.keys(dataTable[0]).forEach((item) => {
  var headrCol = document.createElement("th");
  headrCol.textContent = item;
  headrCol.setAttribute("id", `colHr${item}`);
  headrCol.addEventListener("click", () => {
    sortFunc(item);
  });
  headerRow.appendChild(headrCol);
  var filtrCol = document.createElement("th");
  var inputBoxCol = document.createElement("input");
  inputBoxCol.setAttribute("id", item);
  inputBoxCol.addEventListener("input", () => {
    filterFunc(item);
  });
  filtrCol.appendChild(inputBoxCol);
  filterRow.appendChild(filtrCol);
});

headerTable.appendChild(headerRow);
headerTable.appendChild(filterRow);
parentTable.appendChild(headerTable);

function filterFunc(item) {
  resultArr = [...dataTable];
  if (item !== "") {
    resultArr.forEach((item, index) => {
      document.getElementById(index + 1)
        ? document.getElementById(index + 1).remove()
        : "";
    });
    var filterVal = document.getElementById(item).value;
    resultArr = dataTable.filter((col, index) => {
      return String(col[item]).indexOf(filterVal) !== -1;
    });
  }
  resultArr.forEach((data, index) => {
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", index + 1);
    Object.keys(data).forEach((value) => {
      var dataCol = document.createElement("td");
      dataCol.textContent = data[value];
      dataRow.appendChild(dataCol);
    });
    bodyTable.appendChild(dataRow);
  });
}

function sortFunc(item) {
  //   var table,
  //     rows,
  //     switching,
  //     i,
  //     x,
  //     y,
  //     n,
  //     shouldSwitch,
  //     dir,
  //     switchcount = 0;
  //   switch (item) {
  //     case "name":
  //       n = 0;
  //       break;
  //     case "rollNo":
  //       n = 1;
  //       break;
  //     default:
  //       n = 2;
  //   }
  //   table = document.getElementById("myTable");
  //   switching = true;
  //   //Set the sorting direction to ascending:
  //   dir = "asc";
  //   /*Make a loop that will continue until
  //         no switching has been done:*/
  //   while (switching) {
  //     //start by saying: no switching is done:
  //     switching = false;
  //     rows = table.rows;
  //     /*Loop through all table rows (except the
  //         first, which contains table headers):*/
  //     for (var i = 2; i < rows.length - 1; i++) {
  //       //start by saying there should be no switching:
  //       shouldSwitch = false;
  //       /*Get the two elements you want to compare,
  //             one from current row and one from the next:*/
  //       x = rows[i].getElementsByTagName("TD")[n];
  //       y = rows[i + 1].getElementsByTagName("TD")[n];
  //       /*check if the two rows should switch place,
  //             based on the direction, asc or desc:*/
  //       if (n === 1) {
  //         if (dir == "asc") {
  //           if (x.innerHTML > y.innerHTML) {
  //             //if so, mark as a switch and break the loop:
  //             shouldSwitch = true;
  //             break;
  //           }
  //         } else if (dir == "desc") {
  //           if (x.innerHTML < y.innerHTML) {
  //             //if so, mark as a switch and break the loop:
  //             shouldSwitch = true;
  //             break;
  //           }
  //         }
  //       } else {
  //         if (dir == "asc") {
  //           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //             //if so, mark as a switch and break the loop:
  //             shouldSwitch = true;
  //             break;
  //           }
  //         } else if (dir == "desc") {
  //           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
  //             //if so, mark as a switch and break the loop:
  //             shouldSwitch = true;
  //             break;
  //           }
  //         }
  //       }
  //     }
  //     if (shouldSwitch) {
  //       console.log(i);
  //       /*If a switch has been marked, make the switch
  //             and mark that a switch has been done:*/
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //       //Each time a switch is done, increase this count by 1:
  //       switchcount++;
  //     } else {
  //       /*If no switching has been done AND the direction is "asc",
  //             set the direction to "desc" and run the while loop again.*/
  //       if (switchcount == 0 && dir == "asc") {
  //         dir = "desc";
  //         switching = true;
  //       }
  //     }
  //   }
  var table,
    rows,
    switching,
    shouldSwitch,
    n,
    i,
    x,
    y,
    dir,
    switchCount = 0;
  switch (item) {
    case "name":
      n = 0;
      break;
    case "rollNo":
      n = 1;
      break;
    default:
      n = 2;
  }

  table = document.getElementById("myTable");
  rows = table.rows;
  dir = "asc";
  switching = true;
  while (switching) {
    switching = false;
    for (i = 2; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (n == 1) {
        if (dir === "asc") {
          if (x.innerHTML > y.innerHTML) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML < y.innerHTML) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (dir === "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount === 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

parentTable.appendChild(bodyTable);
filterFunc("");
