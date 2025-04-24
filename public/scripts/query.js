var currentTable;
var currentSelection;
var currentQuery;

//temp test variables
const table1 = "entity";
const table2 = "creature";
const cond1 = "cognitohazard";                             
const cond2 = "class";

function changeTable(newTable){
  let select = "SELECT* ";
  let from = "FROM " + newTable;
  let query = select + from;
  setSelection(select)
  setTable(newTable);
  setQuery(query);
  return(query);
}

function assignCond(condNum, cond1, cond2, cond3, cond4, cond5){
  let arr = new Array(condNum);
  for (var i = 0; i < condNum; i++) {
    switch(i){
      case 0:
        arr[i] = cond1;
        break;
      case 1:
        arr[i] = cond2;
        break;
      case 2:
        arr[i] = cond3;
        break;
      case 3:
        arr[i] = cond4;
        break;
      case 4:
        arr[i] = cond5;
        break;
    }
  }
  return arr;
}

function filterTable(condNum, tableName, cond1, cond2, cond3, cond4, cond5){
  let select = "SELECT ";
  let table = "FROM " + tableName;
  let condArr = assignCond(condNum, cond1, cond2, cond3, cond4, cond5);

  for (var i = 0; i < condNum; i++) {
    if (i > 0) select += ", ";
    select += condArr[i];
  }

  let query = select + " " + table;
  setTable(tableName);
  setSelection(select);
  setQuery(query);
  return query;
}

function searchWhere(selected, currentTable, dataName, filter){
  let select = selected;
  let from = "FROM " + currentTable;
  let where = " WHERE " + filter;
  let data = " = '" + dataName + "'";
  let query = select + " " + from + where + data
  setQuery(query);
  return(query);
}

function setTable(tableName){
  currentTable = tableName;
}

function setSelection(conds){
  currentSelection = conds;
}

function setQuery(query){
  currentQuery = query;
}

console.log(changeTable(table1));
console.log(currentQuery);
console.log(filterTable(2, currentTable, cond1, cond2));
console.log(currentQuery);
console.log(searchWhere(currentSelection, currentTable, "Euclid", cond2));
console.log(currentQuery);