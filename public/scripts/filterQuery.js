var currentTable;
var currentSelection;
var currentQuery;

function changeTable(newTable){
  let select = "SELECT* ";
  let from = "FROM " + newTable;
  let query = select + from + ";";
  setSelection(select);
  setTable(newTable);
  setQuery(query);
  return(query);
}

function assignCond(condNum, cond1, cond2, cond3, cond4, cond5){
  let arr = new Array(condNum);
  for (var i = 0; i < arr.length; i++) {
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
  let select = "SELECT " + cond1;
  let table = " FROM " + tableName;
  let condArr = assignCond(condNum, cond1, cond2, cond3, cond4, cond5);

  for (var i = 1; i < condNum; i++) {
    select += ", " + condArr[i];
  }

  let query = select + table + ";";
  setTable(tableName);
  setSelection(select);
  setQuery(query);
  return query;
}

function searchWhere(selected, currentTable, filter, dataName){
  let select = selected;
  let from = " FROM " + currentTable;
  let where = " WHERE " + filter;
  let data = " = '" + dataName + "'";
  let query = select + from + where + data + ";";
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

// Example usage
console.log(changeTable("creature")); 
console.log(filterTable(2, currentTable, "ID", "humanoid"));
console.log(searchWhere(currentSelection, currentTable, "ID", "5"));
console.log(filterTable(1, currentTable, "ID"))
console.log(searchWhere(currentSelection, currentTable, "ID", "8"))
console.log(changeTable("entity"));
console.log()