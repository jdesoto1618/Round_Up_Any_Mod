// function byTen (num) {
//   // Empty or string input
//   if(isNaN) {
//     console.log("No valid number entered! Run the program again to input a number.")
//   }
//
//   // 0 or higher entered
//   if (num >= 0) {
//     if(num % 10 === 0) {
//       console.log(num); // Log the number if it's already a multiple of 10
//     } else {
//       var mod = 10 - (num % 10);
//       var addBack = console.log(num + mod);
//     }
//
//   // Number strictly less than 0 entered
//   } else if (num < 0) {
//     if(num % 10 === 0) {
//       console.log(num);
//     } else {
//       var mod2 = 10 - Math.abs(num % 10);
//       var addBack2 = console.log(num - mod2);
//     }
//   }
// }

function divByMod (num,theMod) {
  // Empty or string input
  if(isNaN(num) || isNaN(theMod)) {
    console.log("One of the numbers entered was invalid! Run the program to try again.")
  // If the mod is not an integer
  } else if (theMod % 1 != 0) {
    console.log("Program is designed for use with an integer mod. Try it again!");
  } else {
    // Number entered is 0, output 0
    if (num === 0) {
      console.log(0);
    // Number is the same as the mod
    } else if(num % theMod === 0) {
      console.log(num)
    } else if (num > 0) {
        var mod = theMod - (num % theMod);
        var addBack = console.log(num + mod);
    } else if (num < 0) {
        var mod2 = theMod - Math.abs(num % theMod);
        var addBack2 = console.log(num - mod2);
    }
  }
}
