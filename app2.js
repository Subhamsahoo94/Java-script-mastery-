let todo = [];

let req = prompt("choise");
    console.log(" valid commands \n EXIT: quit \n FOR ADDING: add\n DELATION: delete\n seeing all task: list\n ")

while (true) {
  if (req == "quit") {
    console.log("successfully log-out......");
    break;
  }

  if (req == "add") {
    let task = prompt("add your task:");
    todo.push(task);
    console.log("adding successfull....");
  } else if (req == "list") {
    console.log("..............................");
    for (let i = 0; i <= todo.length; i++) {
      console.log("SL NO:",i," ",todo[i]);
    }
    console.log("..............................");
  }
  else if(req=="delete"){
    let slno = prompt("plese enter your SL NO for delete:");
    
    todo.splice(slno);
    console.log("your task is delete");
  }

  else{
    console.log("your command is incorrect");
    console.log("enter valid command \n FOR ADDING: add\n DELATION: delete\n seeing all task: list\n EXIT: quit ")
  }

  req = prompt("choise");
}
