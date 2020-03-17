const docker = document.getElementsByClassName('docker')[0];
const now = document.getElementsByClassName('now')[0];

window.startX = 0;
window.startY = 0;

window.endX = 0;
window.endY = 0;

window.firstPosition = 0;
window.left = parseInt(docker.style.left)
document.addEventListener('touchstart',(ev)=>{
    window.startX = ev.touches[0].pageX;
    window.startY = ev.touches[0].pageY;
    console.log(startX,startY);
    left = parseInt(docker.style.left)
})

document.addEventListener('touchend',(ev)=>{
    // console.log(ev);

    // console.log(start);
   
    
    const endX = ev.changedTouches[0].pageX;
    const endY = ev.changedTouches[0].pageY;
    console.log(endX,endY);
    const changeX = endX - startX;
    console.log(changeX);
    
     
    docker.style.left = `${left + changeX}px`;
    move(changeX , left);
})

//滑动效果函数
let move = (distance , left)=>{
    console.log(left);
    
  
    console.log(distance);
    //如果滑动幅度满足，则进行翻页
    if(Math.abs(distance) > Math.abs(now.offsetWidth / 2)){
      console.log(docker.style.left);
      
        //如果向右滑动
        if(distance > 0){
            //如果未到最左边
            if(left!=0){
               
                docker.style.left = `${left + now.offsetWidth}px`
                console.log(docker.style.left);
            }
              //如果到了最左边
            else{
                docker.style.left = `${left}px`
            } 
            
        }
        //如果向左滑动
        else{
            //如果未到最右边
            if(left!=-parseInt(now.offsetWidth)*2){
               console.log(parseInt(docker.offsetWidth));
               
                docker.style.left = `${left - now.offsetWidth}px`
                console.log(docker.style.left);
            }
            else{
                console.log(7777777777);
                
                docker.style.left = `${left}px`
            } 
            
           
        }
        
    }
    else{
        
        docker.style.left = `${left}px`
    }
    
}


