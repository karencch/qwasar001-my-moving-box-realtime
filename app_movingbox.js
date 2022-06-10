// Quest07 ***************************************
// ===============================================
// ex00 ANSWER:
// let inputArray = [1,2,3];

// function my_map_mult_two(inputArray) {
//     let newArray = [];
//     for (let i = 0; i<inputArray.length; i++){
//         newArray.push(inputArray[i]*2);
//     };
//     return newArray;
// };

// console.log(my_map_mult_two(inputArray));

// ===============================================
// ex01 SOLUTION USING MAP METHOD (works in console, not gandalf):

// The long way...
// [input[0].length, input[1].length), etc]

// Set variables:
// const inputArray = ["aBc", "AbcE Fgef1"];

// function my_count_on_it(inputArray){
//     const newArray = inputArray.map(num => num.length);
//     return newArray;
// };

// console.log(my_count_on_it(inputArray));

// ex01 SOLUTION USING FOR (works in console, not gandalf):

// let newArray = [];

// function my_count_on_it(inputArray){
//     for (let i = 0; i < inputArray.length; i++){
//         newArray.push(inputArray[i].length);
//     }
//     return newArray;
// };

// ex01 SOLUTION USING WHILE (works!): 
// let inputArray = ["hello", "AbcE Fgef1"];

// function my_count_on_it(inputArray){
//     let newArray = [];

//     for (let i = 0; i < inputArray.length; i++){
//         newArray.push(inputArray[i].length);
//     }
//     return newArray;
// };

// console.log(my_count_on_it(inputArray));


// ===============================================
// ex02 SOLUTION:

// let inputArray = [1, 1, 2];

// function my_array_uniq(inputArray){
//     return newArray = inputArray.filter( function(element, index){
//         return inputArray.indexOf(element) == index;
//     });
// };

// console.log(my_array_uniq(inputArray));

// ===============================================
// ex03 SOLUTION:
// let inputArray = [
//     {"string": "John", "integer": 7},
//     {"string": "Margot", "integer": 8},
//     {"string": "Jules", "integer": 4},
//     {"string": "Marco", "integer": 19}
//    ]

// This following code works to just return an array of each number
// function my_average_mark(inputArray) {
//     let justIntegers = [];

//     for(let i=0; i<inputArray.length; ++i){
//         justIntegers.push(inputArray[i]["integer"]);
//     };
// // Use reduce method:
//     const sum = justIntegers.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0);

//     return (sum/inputArray.length).toFixed(1);
// };



// console.log(inputArray[0]["integer"]);
// console.log(inputArray[1]["integer"]);
// console.log(inputArray[2]["integer"]);
// console.log(Object.values(inputArray[0]));

// console.log(my_average_mark(inputArray));

// ==================================================
// MOVING BOX PROJECT MY SOLUTION *******************
// Box should move to corner in 35 seconds. You can only change the position (vertically and horizontally) of 1 point every 0.5 second.


// const littleBox = document.querySelector("#my_box_realtime");

// setInterval(moveBox, 500);
    
// function moveBox(){
//     if (parseInt(littleBox.style.right) >=0) {            
//         let fromRight = parseInt(littleBox.style.right);  // pixels from right, just the integer part
//         let fromBottom = parseInt(littleBox.style.bottom);  // pixels from bottom, just the integer part

//     littleBox.style.right = fromRight - 1 + "px";
//     littleBox.style.bottom = fromBottom - 1 + "px";
//     }

// };

// ====================================
// Hannah's solution *****

{/* <html>
    <div id="my_box_realtime" style= "background-color: red; position: absolute; right: 70; bottom: 70; min-width: 100px; min-height: 100px"></div>
    <script type="text/javascript"> */}
    box = document.getElementById("my_box_realtime");
    setInterval (movingBox, 500);
    let x = 70;
    let y = 70;
    function movingBox(){
        if (x >=0 ){
        x -= 1;
        y -= 1;
        box.style.right = x;
        box.style.bottom = y;
        }
    }
    // </script>
// </html>