const submit=document.querySelector(".yangiSoz");
const yangiLugat=document.querySelector(".yangi");
let el=null;
let bos=null;
let dv=null;
submit.addEventListener("click", Event=>{
    Event.preventDefault();
    dv=document.createElement("div");
    el=document.createElement("h3");
    const uz=document.querySelector(".uzb");
    const en=document.querySelector(".eng");
    el.textContent=en.value+"-"+uz.value;
    dv.append(el);
    bos=document.createElement("button");
    bos.textContent="+";
    const min=document.createElement("button");
    min.textContent="-";
    dv.append(bos)
    dv.append(min);
    yangiLugat.append(dv); 
    bos.addEventListener("click", function(){
        const eskisoz=document.querySelector(".eski");
        eskisoz.append(this.parentElement);
        this.remove();
        const yut=document.getElementById("x");
        yut.style.display="block";
        setTimeout(function(){
            yut.style.display="none"
        }, 2000)
    })
    min.addEventListener("click", function(){
        this.parentElement.remove();
    })
})
