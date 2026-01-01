let input=document.querySelectorAll("input");
let button=document.querySelectorAll("button");
let res=document.querySelector(".res");

button.forEach((but)=>{
    but.addEventListener("click",(delts)=>{
            if(but.innerText==="+"){
                res.textContent="your result is "+(+input[0].value+ +input[1].value)
            }
            else if(but.innerText==="-"){
               
                 res.textContent="your result is "+(input[0].value-input[1].value);
                
            }
            else if(but.innerText==="x"){
                
                res.textContent="your result is "+(input[0].value*input[1].value);
            }
            else {
              
                   let res=input[0].value/input[1].value;
                res.textContent="your result is "+res.toFixed(2);
            }
            });

    });




