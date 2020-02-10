//index.js文件用来进行课程表的初始化
document.body.parentNode.style.overflowY = "hidden";
window.weekName = ['','周一','周二','周三','周四','周五']

function Week(weekDay,today){

    this.weekDay = weekDay;
    this.today = today;

}

function left(date){
    console.log(111);
    
    //递归的终止条件，周一或周日时终止
    if(date.getDay() == 0 ){
        return;
    }

    if(date.getDay() == 6 ||date.getDay() == 7){
        let yes = date.setDate(date.getDate() - 1);
        let yesterday = new Date(yes);
        left(yesterday);
    }



    //首先把当天的信息存储到数组中
    let today = new Week(date.getDay() , `${date.getMonth()+1}-${date.getDate()}`)
    nowWeek[today.weekDay] = today;
    let yes = date.setDate(date.getDate() - 1);
    let yesterday = new Date(yes);
    left(yesterday);
    return;

}

function right(date){
    console.log(222);
    
    if(date.getDay() == 6){
        return;
    }
    let today = new Week(date.getDay() , `${date.getMonth()+1}-${date.getDate()}`);
    nowWeek[today.weekDay] = today;
    let tom = date.setDate(date.getDate() + 1);
    let tomarrow = new Date(tom);
    right(tomarrow);
    return;
}

function findWeek(temp,interval){

    let date = new this.Date();
    let time = date.setDate(date.getDate() + interval);
    let t = new Date(time);
    left(t);
    right(t)
    console.log(nowWeek);
    let weekDayLi = this.document.getElementsByClassName('weekday');
    let todayLi = this.document.getElementsByClassName('today');
    console.log(weekDayLi);
    
    for(let i = 1;i < nowWeek.length;i++){
     
        weekDayLi[i-1+temp].innerHTML = weekName[nowWeek[i].weekDay];
        todayLi[i-1+temp].innerHTML = nowWeek[i].today;
   
    }
    
    
}

window.onload = function(){
    //动态改变html默认字体大小
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';

    let body = document.getElementsByTagName('body')[0];
    body.style.height = htmlHeight + 'px'; 
    body.style.width = htmlWidth * 3  + 'px';
    window.nowWeek = [];
    
    //这周日期及星期数组
    this.findWeek(0,0);

}

function loadFile(e){

    let reader = new FileReader();
    let picture = document.getElementsByClassName('picture')[0];
    let value = e.srcElement.files[0];
    reader.readAsDataURL(value);
   
}

function load(e){

    let picture = document.getElementsByClassName('picture')[0];
    console.log(picture.files[0].name);
    show.style.backgroundImage = `url("/img/${picture.files[0].name}")`
    show.style.backgroundRepeat = 'no-repeat';
    show.style.backgroundSize = '100% 100%';
    
}

let show = document.getElementsByClassName('show')[0];
console.log(show);
