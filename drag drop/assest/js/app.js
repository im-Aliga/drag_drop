let items =document.querySelectorAll(".box")
let droparea =document.querySelector('.droparea')
let nexdrop=document.querySelector('.area')
for (let item of items) {
    item.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('param',this.id);
        
        
    })
    item.addEventListener('dragover',function(e){
    e.preventDefault();
    item.style.transform="rotate(180deg)"
    })
   
    
}
droparea.addEventListener('dragover',function(e){
    e.preventDefault();
})
droparea.addEventListener('drop',function(e){
    let id =e.dataTransfer.getData("param")
    droparea.append(document.getElementById(id))
})

nexdrop.addEventListener('dragover',function(e){
    e.preventDefault();
})
nexdrop.addEventListener('drop',function(e){
    let id =e.dataTransfer.getData("param")
    nexdrop.append(document.getElementById(id))
    
})







