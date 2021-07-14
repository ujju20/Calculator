const btns=['0','1','2','3','4','5','6','7','8','9','plus','minus','multiply','divide','decimal'];
const inputDisplay=document.getElementById("input")

const disp= (e) => {
    //console.log(e.innerHTML);
    inputDisplay.innerText+=e.innerHTML;

}

//Buttons Functionality
for (let i=0;i<btns.length;i++){
    let btn=document.getElementById(btns[i]);
    btn.addEventListener('click',() => {
        disp(btn);
    });
}

//Reset Functionality
const reset=document.getElementById("reset");
reset.addEventListener('click',() => {
    inputDisplay.innerText='';

})

//Delete Functionality
const dltBtn=document.getElementById("delete");
dltBtn.addEventListener('click',() => {
    let string=inputDisplay.innerText;
    string=string.slice(0,string.length-1);
    inputDisplay.innerText=string;
})

const equalsBtn=document.getElementById("equals");
equalsBtn.addEventListener('click', () => {
    let exp=inputDisplay.innerText;
    let sum=eval(exp);
    inputDisplay.innerText=sum;
    
})