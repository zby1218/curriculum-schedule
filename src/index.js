//初始化页面
let init = ()=>{
    let docWidth = document.body.clientWidth;
    let docHeight = document.body.clientWidth;
    docWidth = 100 + 'vw';
    docHeight = 100 + 'vh';
    console.log(docWidth , docHeight);
    
    const html = document.getElementsByTagName('html')[0];
    html.style.weight = docWidth;
    html.style.height = docHeight; 

    html.style.fontSize = `${docWidth / 10}px`;
    
    const body = document.getElementsByTagName('body')[0];
    
    const docker = document.getElementsByClassName('docker');
   
    
}

class Control{
    week = document.getElementsByClassName('now')[0];
    docker = document.getElementsByClassName('docker')[0];
    content = this.week.innerHTML;
    constructor(){

        //创建元素
        this.setElement = (classname , arrow)=>{
            const div = document.createElement("div");
            div.className = `week ${classname}`;
            div.innerHTML = this.content;
            if(arrow == 'last'){
                this.docker.insertBefore(div,this.week);
            }
            if(arrow == 'next'){
                this.docker.appendChild(div);
            }
        }
        //删除元素
        this.deleteElement = (classname)=>{
            const element = document.getElementsByClassName(`${classname}`);

        }
    }
}





//界面初始化时动态改变html大小
window.onload = ()=>{
    init();
    //建立起上周和下周的结构
    const temp = new Control()
    
    
    temp.setElement('last','last');
    const hh = new Control();
    hh.setElement('next','next');

    const width = temp.week.offsetWidth
    temp.docker.style.left =`-${width}px `;

    
}



