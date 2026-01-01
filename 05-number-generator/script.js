let button= document.querySelector("button");
let input=document.querySelector("input");
let h2=document.querySelector("h2");
let h5=document.querySelector("h5");

button.addEventListener("click",(delts)=>{
let val=+input.value;
h5.innerText="";

for(let i=1;i<=val;i++){

   
   h5.innerText = h5.innerText+" "+i;

}

if(val%2==0){
    h2.textContent="The given number: "+val +"is EVEN"
}
    else{
        h2.textContent="The given number: "+val +"is ODD"
    }




});
