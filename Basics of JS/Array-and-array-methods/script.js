// alert("Hello") 
// Checking if the script is properly connected to HTML File

// Array
var arr = [1, 2, 3, 4] // You can have any kind of data in the array
// Array functions:
/*
foreach
map
filter
find
indexOf
*/

// .forEach
arr.forEach(function(val) { // Run function for each item in the arr. val is value(item)
    console.log(val + " hello"); 
})


//.map
var new_arr = arr.map(function(val){
    return val*4; // [4, 8, 12, 16]
}) 
console.log(new_arr) 


// .filter
var is_more_than_three = arr.filter(function(val){
    if (val >= 2) {return true;}
    else return false;
})
console.log(is_more_than_three);


// .find
var is_two = arr.find(function(val) {
    if(val === 2) return val;
})
console.log(is_two);


// .indexOf
arr.indexOf(2); // 1
// if it returns -1 that means there is no element of that value in the
