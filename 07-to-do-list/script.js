let input=document.querySelectorAll("input");
let but=document.querySelector("button");
let h=document.querySelector("h1");

 let arr=new Array();

input.forEach(function(inp){
    inp.addEventListener("click",(delts)=>{
        console.log(inp.checked);
       

       if(inp.checked){
        arr.push(inp.value);
         h.innerText="you added "+inp.value+" ";

       }
        if(!inp.checked){
        arr.pop(inp.value);
         h.innerText="you removed "+inp.value+" ";

       }
     


       console.log(arr);
    
      


      
                       

});

})

