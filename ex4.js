//Ex.4
//Start here
{
    let arr = [1, 5, 3, 5, 4, 9, 11, 2, 7];
 
    function max(nums){
    let biggest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            biggest = nums[i];
        }
    }
    console.log("Max num in this array is " + biggest);
}  
max(arr);
    
}
//Ends here