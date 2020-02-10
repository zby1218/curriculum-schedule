let clickFont = document.getElementsByClassName('click-font')[0];

function bubbling(t){
    //一个递归函数，一直寻找父节点，找到最高的为止
    if(t.className == 'content'||t.className == 'body'){
        console.log(666);
        
        return 1;
    }
    if(t.className == 'modify'){
        console.log(444);
        return 0;
        
    }
    let temp = t.parentNode;
    console.log(temp);
    let save = bubbling(temp);
    //需要承接一下返回值，这个过程发生在“递归”中的“归”的过程
    if(save == 1){
        return 1;
    }
    if(save == 0){
        return 0;
    }
    
}

clickFont.addEventListener('click',function(e){
    let modify = document.getElementsByClassName('modify')[0];
    modify.style.left = '0px';
    modify.style.transition = '0.5s';

    
},false)

//点击出现侧边栏
addEventListener('click',function(e){
    //这个事件对侧边导航栏除外，毕竟这个事件是使导航栏消失的
    if(e.target.className == 'click-font'){
        return;
    }
    let temp =  document.getElementsByClassName(`${e.target.className}`)[0]; 
    let judge = bubbling(temp);
    
    if(judge == 1){
        let modify = document.getElementsByClassName('modify')[0];
        modify.style.left = '-70%';
        modify.style.transition = '0.5s';
    }
    
})

//左右滑动
