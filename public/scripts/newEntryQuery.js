function entryIsEntity(entityType, ID, name, dangerClass, classification, cognitohazard, extraData) {
  let insert = "INSERT INTO entity(ID, name, class, classification, cognitohazard)\n";
  let values = "VALUES (" + ID + ", '" + name + "', " + dangerClass + ", '" + classification + "', " + cognitohazard + ");\n";
  let query1 = insert + values;
  let query2 = "";

  switch (entityType) {
    case "creature":
      query2 = insertCreature(ID, extraData);
      break;
    case "object":
      query2 = insertObject(ID, extraData);
      break;
    case "location":
      query2 = insertLocation(ID, extraData);
      break;
    case "idea":
      query2 = insertIdea(ID, extraData);
      break;
  }

  return query1 + query2;
}

function insertCreature(entityId, humanoid) {
  let insert = "INSERT INTO creature(ID, humanoid)\n";
  let values = "VALUES (" + entityId + ", " + humanoid + ");\n";
  return insert + values;
}

function insertObject(entityId, replica) {
  let insert = "INSERT INTO object(ID, replica)\n";
  let values = "VALUES (" + entityId + ", '" + replica + "');\n";
  return insert + values;
}

function insertLocation(entityId, address) {
  let insert = "INSERT INTO location(ID, address)\n";
  let values = "VALUES (" + entityId + ", '" + address + "');\n";
  return insert + values;
}

function insertIdea(entityId, effects) {
  let insert = "INSERT INTO idea(ID, effects)\n";
  let values = "VALUES (" + entityId + ", '" + effects + "');\n";
  return insert + values;
}

function entryIsPerson(ID, name, DoB, type, role, classification, password, behavior, crime, wellness) {
  let insert = "INSERT INTO Person(ID, name, DoB)\n";
  let values = "VALUES (" + ID + ", '" + name + "', '" + DoB + "');\n";
  let query = insert + values;

  if (type === "Employee") {
    query += insertEmployee(ID, role, classification, password);
  } else if (type === "D-Class") {
    query += insertDClass(ID, role, classification, password, behavior, crime, wellness);
  }

  return query;
}

function insertEmployee(personID, role, classification, password) {
  let insert = "INSERT INTO Employee(ID, role, classification, password)\n";
  let values = "VALUES (" + personID + ", '" + role + "', " + classification + ", '" + password + "');\n";
  return insert + values;
}

function insertDClass(ID, behavior, crime, wellness) {
  let insertDClass = "INSERT INTO D-Class(ID, behavior, crime, wellness)\n";
  let valuesDClass = "VALUES (" + ID + ", '" + behavior + "', '" + crime + "', " + wellness + ");\n";
  return insertDClass + valuesDClass;
}

function grabEntityInfo() {
  let ID = document.getElementById("ID").value;
  let name = document.getElementById("name").value;
  let type = document.getElementById("entityType").value;
  let dangerClass = document.getElementById("entityClass").value;
  let classification = document.getElementById("classification").value;
  let cognitohazard = document.getElementById("cognitohazard").checked ? 1 : 0;
  
  

  let extra = "";
  if (type === "Creature") {
    extra = "Humanoid: " + (document.getElementById("humanoid").checked ? 1 : 0);
  } else if (type === "Object") {
    extra = "Replica: " + document.getElementById("replica").value;
  } else if (type === "Location") {
    extra = "Address: " + document.getElementById("address").value;
  } else if (type === "Idea") {
    extra = "Effects: " + document.getElementById("effects").value;
  }

  let result = "ID: " + ID + "\n";
  result += "Name: " + name + "\n";
  result += "Type: " + type + "\n";
  result += extra + "\n";
  result += "Class: " + dangerClass + "\n";
  result += "Classification: " + classification + "\n";
  result += "Cognitohazard: " + cognitohazard;

  document.getElementById("output").textContent = result;

  //RETURN JSON
  return {
    ID: parseInt(ID),
    name,
    entityType: type,
    dangerClass: parseInt(dangerClass),
    classification: parseInt(classification),
    cognitohazard,
    extra
  };
}

function grabEmployeeInfo() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  let email = document.getElementById("email").value;
  let role = document.getElementById("role").value;
  let ID = document.getElementById("id").value;
  let siteID = document.getElementById("site ID").value;
  let classification = document.getElementById("classification").value;
  let dclass = document.querySelector('input[name="dclass"]').checked ? 1 : 0;

  let result = "Name: " + name + "\n";
  result += "Password: " + pass + "\n";
  result += "Email: " + email + "\n";
  result += "Role: " + role + "\n";
  result += "ID: " + ID + "\n";
  result += "Site ID: " + siteID + "\n";
  result += "Classification Level: " + classification + "\n";
  result += "D-Class: " + dclass;

  document.getElementById("output").textContent = result;

  return {
    name,
    pass,
    email,
    role,
    ID: parseInt(ID),
    siteID,
    classification: parseInt(classification),
    dclass
  };
}


const EntryQuery = {
  entryIsEntity,
  grabEntityInfo
}

export default EntryQuery;
/*console.log(entryIsEntity("creature",1,"Bob",5,"Keter",0,1));
console.log(entryIsPerson(1, "Tyler", "03/16/2022", "Employee", "CEO", 5, "tyl"))
console.log(intryIsPerson(1, "Tyler", "03/16/2003", "D-Class", "positive", "theft", 2)) */