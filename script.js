function convertToRoman(num) {
  	

  //your code here

	// Step 1: Create arrays to store roman numerals and their values
  // We list them from largest to smallest
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  // Step 2: Create an empty string to store our result
  let result = '';
  
  // Step 3: Loop through each value
  for (let i = 0; i < values.length; i++) {
    
    // Step 4: Keep subtracting the current value while num is greater than or equal to it
    while (num >= values[i]) {
      
      // Step 5: Add the corresponding roman numeral to result
      result = result + romanNumerals[i];
      
      // Step 6: Subtract the value from num
      num = num - values[i];
    }
  }
  
  // Step 7: Return the final roman numeral
  return result;

	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
