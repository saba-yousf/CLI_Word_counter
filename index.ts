import inquirer from "inquirer" ;

const answer: { sentence: string } = await inquirer.prompt(
    
    [
        {
             name: "sentence",
             type: "input",
             message: "Enter your sentence to count the word: "
        }
    ] 
)

const words = answer.sentence.trim().split(" "); 
 // only trim() se har alphabates ko alag alag count karta hai 
//  split("") se sentence me jitne words ho gy use count kary ga 
console.log(`your sentence word count is ${words.length}`);

    

    
