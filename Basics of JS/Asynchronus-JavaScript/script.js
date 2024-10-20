// The code that runs line-by-line is called synchronus code
// Send the asynchronic code to the side stack and run the code of synchronic code normally, And when the synchronic code is done running (i.e. main stack is empty), check if asynchronic code is done processing and if it is done processing bring it to the main stack and execute/run it

// Better explaination:
/*
https://youtu.be/T55Kb8rrH1g?si=OABecpumtEzf4mCH&t=2211
*/

async function abcd(){
    var blob = await fetch('https://randomuser.me/api/');
    var ans = await blob.json();

    console.log(ans.results); // I used .results so that its just the thing we want annot other garbage. This is can be different according to the API
    
}

abcd(); // This will run the asynchronus function and after the function is done running, it will bring the function to the main stack and run it. When the function is done running, it will log the result to the console.