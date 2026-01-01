let input=document.querySelector("input");
let button=document.querySelector("button");
let h3=document.querySelector("h3");





button.addEventListener("click",function(dels){
//    dels.preventDefault();
 let val=input.value;
    if(val===""){
        h3.textContent="write Something";
    }
    else if(!isNaN(val)){
    h3.textContent="This input is Number";
}

 else if (/^[a-zA-Z]+$/.test(val)) {
        h3.textContent = "This input is  String";
    }
else{
    h3.textContent="This input contains letters and numbers "
    h3.style.color="red";
}

});