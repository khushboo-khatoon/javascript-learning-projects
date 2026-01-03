let button=document.querySelectorAll("button");
let input=document.querySelectorAll("input");
let  res=document.querySelector("#same");

let add=(a,b)=>{
    return a+b;
}

let sub=(a,b)=>{
return a-b;
}


let multi=(a,b)=>{
return a*b;
}



button.forEach(function(but){
    but.addEventListener("click",(del)=>{
  textc=but.textContent;

        if(textc==="✚"){
   res.textContent="your result is "+( add(+input[0].value,+input[1].value));
        // console.log(add(+input[0].value,+input[1].value));
        // console.log("your result is "+ add(+input[0].value,+input[1].value));
        }

    else if(textc==="━"){
   res.textContent="your result is "+ (sub(+input[0].value,+input[1].value));
    }
else if (textc === "X") {

    let a = Number(input[0].value.trim());
    let b = Number(input[1].value.trim());

    if (isNaN(a) || isNaN(b)) {
        res.textContent = "Please enter valid numbers";
    } else {
          res.textContent = "your result is " + multi(a, b);;
    }
}


   else{
    res.textContent="please write something";
   }

   
    });
});