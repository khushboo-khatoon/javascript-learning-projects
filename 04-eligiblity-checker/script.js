let button=document.querySelector("button");
let input=document.querySelector("input");
let h=document.querySelector("h1");

button.addEventListener("click",()=>{
    let val=input.value;
    if(val>=18){
        h.textContent="you are eligible to vote";
        h.style.color="white";
    }
    else if(val===""){
        h.textContent="Write something"
        h.style.color="white";
    }
    else{
        h.textContent="you are not eligible to vote";
        h.style.color="red";
    }
})