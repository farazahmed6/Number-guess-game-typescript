#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let score = 0;
async function startloop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No"],
                message: chalk.yellowBright("Do you want to continue: "),
            },
        ]);
    } while (again.restart === "Yes");
}
startloop();
async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 10);
    let tip;
    if (guessNum % 2 == 0) {
        tip = "Tip: Number is even.";
    }
    else {
        tip = "Tip: Number is odd.";
    }
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: chalk.yellowBright(`Please Guess a number Between 1 to 10 (${tip})`),
        },
    ]);
    console.log(chalk.yellow(`Your Guess ${answer.userguess} and system generated ${guessNum}`));
    if (answer.userguess === guessNum) {
        score++;
        console.log(chalk.yellow(`Congratulation your answer is Correct! \nYour score is: ${score} `));
    }
    else {
        console.log(chalk.red(`Wrong Guess! \nYour score is: ${score} \nBetter luck next time.`));
    }
}
