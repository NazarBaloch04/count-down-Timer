#!/usr/bin/env node
import { differenceInSeconds} from "date-fns";
import inquirer from "inquirer"
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the seconds",
    validate: (timer)=>{
                if(isNaN(timer)){
                    return "please enter a number"
                }else if(timer > 60){
                    return "seconds must be inBetween 60"
                }else{
                   return true; 
                }
            }
})
let timer = res.userInput
function countDown(val: any){
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    
    setInterval(()=>{
const currentTime = new Date()
const timeDifference = differenceInSeconds(intervalTime, currentTime);
if(timeDifference <= 0){
    console.log("Timer has expired");
    process.exit();
}
const minute = Math.floor((timeDifference % (3600 * 24))/3600)
const seconds = Math.floor(timeDifference % 60)
console.log(`${minute.toString().padStart(2 , "0")}:${seconds.toString().padStart(2 , "0")}`);

    },1000)
}
countDown(timer)
