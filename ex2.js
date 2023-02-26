//Ex.2
//Start here
{
    let grades = [10, 10, 10, 9, 10];

function average (nums){
    let x = 0;
    for (let item of nums) {
        x += item;
    }
    return x / nums.length
}
   let a = average(grades)
   console.log("Average is " + a);

   let b = average([6, 6, 6]);
   console.log("Average is " + b);
}
//Ends here