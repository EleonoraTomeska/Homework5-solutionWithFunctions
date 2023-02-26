//Ex.3
//Start here
{
    let names = ["Jocka", "Mark", "Nikola", "Test", "Test12"];
function evenNumOfCharacters(chars){
    for (let i = 0; i < chars.length; i++) {
        let x = chars[i].length;
        if (x % 2 === 0) {
            console.log(chars[i]);
        }
    }
}
    evenNumOfCharacters(names);
}
//Ends Here