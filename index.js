const input=document.querySelector('#taskInput');
const btn=document.querySelector('button');
let ul=document.querySelector('ul');
let tot=0;
btn.addEventListener('click',function(){
    if(input.value.trim()===''){
        alert('pleae enter something!');
        return;
    }
    let li=document.createElement('li');
    li.textContent=input.value;
 
    ul.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
    input.value='';
    saveData();
    tot++;

});

ul.addEventListener('click',function(e){
    
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("completed");
        tot--;
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        
    }
    checkAllCompleted();
},false);

function checkAllCompleted() {
   
    if (tot===0) {
        ul.innerHTML = '';
        localStorage.clear();
    }
}
function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function show(){
    ul.innerHTML=localStorage.getItem("data");
}
show();