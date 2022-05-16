function findFirstDuplicate(arr) {
  // This one will NOT work. It finds the duplicate, but not the first one to occur! ie [1,2,2,1] => 1
  //   for(let i = 0; i < arr.length; i++){
    //     if(arr.lastIndexOf(arr[i]) !== i){
      //        return arr[i];
      //     };
      //   };
      //  return -1;
      // }
  duplicate = new Set()
      
  for (let i = 0; i < arr.length; i++) {
    if (duplicate.has(arr[i])) {
      return arr[i];
    } else {
      duplicate.add(arr[i])
    }
  }

  return(-1)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
