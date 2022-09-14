// SWitch case
// Syntax
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

// Sample program for switch case
let day;
switch (new Date().getDay()) {
    case 0:
      day = console.log("Sunday");
      break;
    case 1:
      day = console.log("Monday");
      break;
    case 2:
       day = console.log("Tuesday");
      break;
    case 3:
      day = console.log("Wednesday");
      break;
    case 4:
      day = console.log("Thursday");
      break;
    case 5:
      day = console.log("Friday");
      break;
    case 6:
      day = console.log("Saturday");
      break;
      default:
      day = console.log("none of the day");
  }

//  default case executed
let d=new Date();
let a=d.setMonth(5);
let b=d.getMonth();
switch (b) {
    case 6:
      text = console.log("Today is Saturday");
      break;
    case 0:
      text = console.log("Today is Sunday");
      break;
    default:
      text = console.log("Looking forward to the Weekend");
  }