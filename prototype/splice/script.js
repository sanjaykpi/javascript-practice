    //    splice
    // The splice() method adds and/or removes array elements.

let months = ['Jan', 'feb', 'April', 'June'];
months.splice(2, 0, 'march');
// inserts at index 2
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 0, 'May');
// replaces 0 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
