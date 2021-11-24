
let contacts = new Map()
contacts.set('india', '+91888888888')
contacts.set('uk','+8888888888888') 
contacts.set('canada','+199999999999') 
contacts.set('germany','+97188888888888') 
// contacts.get('india')
document.getElementById("select1").addEventListener('change',()=>{
   let country= document.getElementById('select1').value;
    document.getElementById("contact").innerHTML=contacts.get(country);
        document.getElementById('flag').src=`images/${country}.png`;
        
})
//top arrow script
document.getElementById("scrollup").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};
document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scrollup');
    scrolled = () => {
        Window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        });
    }
    if(scroll>1200){
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    }else{
        document.getElementById('scrollup').classList.remove("show");
        document.getElementById('scrollup').classList.remove("hide");
        document.getElementById("scrollup").removeEventListener("click", scrolled);
    }
})