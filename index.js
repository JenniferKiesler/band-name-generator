// first npm init
// then create file .gitignore

import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'
import {generateSlug} from 'random-word-slugs'

inquirer.prompt([
    {
        type: "number",
        name: "length",
        message: "How long should the band name be?",
        default: 3,
    },
    {
        type: 'list',
        name: "animationName",
        message: "Which animation would you like to use?",
        default: "rainbow",
        choices: ["rainbow", "pulse", "glitch", "radar", "neon", "karaoke"]
    }
])
    .then((answers) => {
        console.log(answers)
        
        const bandName = generateSlug(answers.length, {format: 'title'})
        
        chalkAnimation[answers.animationName](bandName)
    })
    .catch(err => console.log(err))


