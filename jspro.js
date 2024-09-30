const prompt=require("prompt-sync")();
document.write("<h5> GAMBLING SPIN</h5>")
function deposit(){
    while(true){
    const depositamt=prompt("ENTER DEPOSIT AMOUNT = ");
    const depamt=parseFloat(depositamt);
   if((isNaN(depamt)) || (depamt<=0)){
    console.log("ENTER VALID AMOUNT....TRY AGAIN")
   } 
   else{
    return depamt;
   }

   }
}
function NumberofLine(){
    while(true){
    const noline=prompt("ENTER NO. OF LINES TO BE BET (1-3) = ")
    const line=parseInt(noline)
    if(isNaN(line)||((line>3)||(line<=0))){
        console.log("ENTER VALID No. OF LINES....TRY AGAIN")

    }
    else{
        return line;
    }
   }

}

function betamount(dep,lines){
    while(true){
   const bet=prompt("ENTER  BET AMOUNT PER LINES = ")
   const betamt=parseFloat(bet)
   if(isNaN(betamt)||((betamt*lines)>(dep))||(betamt<=0)){
    console.log("ENTER VALID AMOUNT....TRY AGAIN")
   }
   else{
    return betamt
   }
}
}

const spin=()=> {
    const emoji=["💰","💎"]
    const spinned=[[],[],[]]
    let index;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            index=Math.floor(Math.random()*emoji.length)
            spinned[j][i]=emoji[index]
        }
    }
    for(let k=0;k<3;k++){
    console.log(spinned[k])
    }
    return spinned
}
const eval=(res)=>{
    let j=0
   for(let i=0;i<3;i++){
        if((res[i][0]==res[i][1])&&(res[i][1]==res[i][2])){
            j++;
        }
   }
   console.log("NO. OF SAME ROW ="+j)
   return j;
}

const win=(res,bet_amt)=>{
    const multiplier=2;
    const winamt=multiplier*bet_amt*res
    return winamt

}




deposit_amt=deposit()
while(true){
bet_line=NumberofLine()
bet_amt=betamount(deposit_amt,bet_line)
ad=spin()
res=eval(ad)
amount=win(res,bet_amt)
console.log("WINNING AMOUNT = "+amount)
deposit_amt+=amount
console.log("TOTAL AMOUNT = "+deposit_amt)
let reply=prompt("PLAY AGAIN [y/n] = ")
if(reply=="n"){
      
      break
}
}