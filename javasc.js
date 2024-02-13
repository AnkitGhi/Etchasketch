
const ab = prompt("Enter a number les than 100")

contain=document.querySelector("div");

wid=(1420-2*(ab-1))/ab;

for(i=0;i<ab*ab;i++){
    grid=document.createElement("div");
    
    grid.classList.add("grid", "grid"+i);
    
    contain.appendChild(grid);
    grid.style.height=`${wid}px`;
    grid.style.width=`${wid}px`;   
}

for(i=0;i<ab*ab;i++){
    const ab =".grid"+i;
    const lis=document.querySelector(ab);
    
    lis.addEventListener('mouseover',function(){lis.style.backgroundColor='red'});
}
