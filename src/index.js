let init = ()=>{
    let docWidth = document.body.clientWidth;
    let docHeight = document.body.clientWidth;
    docWidth = 100 + 'vw';
    docHeight = 100 + 'vh';
    console.log(docWidth , docHeight);
    
    const html = document.getElementsByTagName('html')[0];
    html.style.weight = docWidth;
    html.style.height = docHeight; 

    html.style.fontSize = docWidth / 10 + 'px';
    
    const body = document.getElementsByTagName('body')[0];
    
    const docker = document.getElementsByClassName('docker');
   
    
}

class Control{
   
    constructor(){
        const week = document.getElementsByClassName('week')[0];
        const docker = document.getElementsByClassName('docker')[0];
        const  content = week.innerHTML;
        //创建元素
        this.setElement = (classname , arrow)=>{
            const div = document.createElement("div");
            div.className = `week ${classname}`;
            div.innerHTML = content;
            if(arrow == 'last'){
                docker.insertBefore(div,week);
            }
            if(arrow == 'next'){
                docker.appendChild(div);
            }
        }
        this.deleteElement = (classname)=>{
            const element = document.getElementsByClassName(`${classname}`);

        }
    }
}





//界面初始化时动态改变html大小
window.onload = ()=>{
    init()
    const temp = new Control()
    
    temp.setElement('last','last');
    const hh = new Control();
    hh.setElement('next','next');
    
  

    
}