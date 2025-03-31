let userscore=0;
let compscore=0;
const msg=document.querySelector('.msg');
const choices=document.querySelectorAll('.choice');
const userscorepara=document.querySelector('#userscore');
const compscorepara=document.querySelector('#compscore');
const computerchoice=()=>{
    const random=Math.floor(Math.random()*3);
    return ['rock','paper','scissors'][random];
} 
const drawgame=()=>{
    console.log("It's a tie");
    msg.innerHTML="It's a tie,Play again";
    msg.style.backgroundColor="#081b31";
}
const playgame=(userchoice)=>{
    console.log("You Clicked:",userchoice);
    const computer= computerchoice();
    console.log("Computer Choice:",computer);
    if(userchoice===computer){
        drawgame();
    }
    else if(userchoice==='rock' && computer==='scissors' || userchoice==='paper' && computer==='rock' || userchoice==='scissors' && computer==='paper'){
        console.log("You Win");
        userscore++;
        userscorepara.innerHTML=userscore;
        msg.innerHTML=`You Win!, Yours ${userchoice} beats ${computer}`;
        msg.style.backgroundColor="green";
        userscore++;
    }
    else{
        console.log("Computer Wins");
        msg.innerHTML=`You lose",${computer} beats Yours ${userchoice}`;
        compscore++;
        compscorepara.innerHTML=compscore;
        msg.style.backgroundColor="red";
        compscore++;
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener('click',(e)=>{
      const userchoice=choice.getAttribute('id');
      
        playgame(userchoice);
    })
});