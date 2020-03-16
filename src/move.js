const docker = document.getElementsByClassName('docker')[0];
const now = document.getElementsByClassName('now')[0];

window.startX = 0;
window.startY = 0;

window.endX = 0;
window.endY = 0;

document.addEventListener('touchstart',(ev)=>{
    window.startX = ev.touches[0].pageX;
    window.startY = ev.touches[0].pageY;
    console.log(startX,startY);
    
})

document.addEventListener('touchend',(ev)=>{
    // console.log(ev);

    // console.log(start);
   
    
    const endX = ev.changedTouches[0].pageX;
    const endY = ev.changedTouches[0].pageY;
    console.log(endX,endY);
    const changeX = endX - startX;
    console.log(changeX);
    
    const left = parseInt(docker.style.left)
    docker.style.left = `${left + changeX}px`;
})



