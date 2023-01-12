import readlineSync from 'readline-sync'
import createTodo from "../todos/createTodo.js";
import deleteTodo from "../todos/deleteTodo.js";
import editTodo from "../todos/editTodo.js";
import getAllTodos from "../todos/getAllTodos.js";
import userLogout from '../users/logoutUser.js';

async function menu() {
  console.clear();
  console.log("===================================");
  console.log("\t MENU ");
  console.log("===================================");
  console.log(`

Press 0 Exit
Press 1 Create New Todo
Press 2 Edit Todo
Press 3 View All Todos
Press 4 Delete Todo
Press 5 Log Out
Press 6 Delete Account
`);
  let option = readlineSync.questionInt("Please Enter your Choice : ");
  switch (option) {
    case 0:
      return console.log("EXIT");
    case 1:
      await createTodo();
      return;
      break;
    case 2:
      await editTodo();
      return;
      break;
    case 3:
      await getAllTodos();
      return;
      break;
    case 4:
      await deleteTodo();
      return;
      break;
    case 5:
      await userLogout()
    return;
      break;
    case 6:
      console.log("delelte account");
      return;
      break;
    default:
      console.log("Invalid Option");
      main();
  }
}

export default menu;
