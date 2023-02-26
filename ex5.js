//Ex.5
//Start here
{
    let numb = [2, 4, 5, 6];
   
    
function power(num, pow = 2){
    let x = 0;
    let deg = [];
    for (let i = 0; i < num.length; i++) {
        x = num[i] ** pow;
        deg.push(x)
    }
    return deg;
}
   let a = power(numb);
   console.log(a);

   let b = power([5, 2, 10, 12], 3);
   console.log(b);
}
//Ends here