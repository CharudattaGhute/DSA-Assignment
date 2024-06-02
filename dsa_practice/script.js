const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainmenu() {
  console.log("\n*********************** stack opertsions************");
  console.log("choose one from the below operations");
  console.log("1.push,\n2.pop,\n3.show,\n4.Exit");
  rl.question("Enter you choice: ", (choice) => {
    if (choice === "1") {
      push();
    } else {
      console.log("You  have entered incorrect choice");
    }
  });
}
mainmenu();
stack = [];
function push() {
  console.log(
    rl.question("enter elemnt to push: ", (element) => {
      stack.push(element);
      console.log("elemnt pushed sucessfully");
      mainmenu();
    })
  );
}
function pop() {
  console.log(
    "\n******************* Enter the elemnt to  pop ******************"
  );
}
function show() {
  console.log(
    "\n******************* Enter the elemnt to  show ******************"
  );
}
function exit() {
  console.log("***************** EXIT*****************");
}
