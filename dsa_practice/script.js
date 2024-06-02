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
    } else if (choice === "3") {
      show();
    } else if (choice === "2") {
      pop();
    } else if (choice === "4") {
      exit();
    } else {
      console.log("You  have entered incorrect choice");
    }
  });
}
mainmenu();
array = [];
function push() {
  console.log(
    rl.question("enter elemnt to push: ", (element) => {
      array.push(element);
      console.log("element pushed sucessfully");
      mainmenu();
    })
  );
}
function pop() {
  console.log(
    "\n******************* Enter the elemnt to  pop ******************"
  );
  array.pop();
  console.log(`element poped sucessfully `);
  mainmenu();
}
function show() {
  console.log(
    "\n******************* Enter the elemnt to  show ******************"
  );
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  mainmenu();
}
function exit() {
  console.log("***************** EXIT*****************");
}
