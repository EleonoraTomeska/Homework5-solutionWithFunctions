//Ex.1
//Start here
{   
    function factoriel(num) {
        let product = 1;
        while (num > 0) {
            product *= num;
            num--;
        }
        return product;
}
  let n = factoriel(5)
  console.log("Factorial = " + n);
}
//Ends here