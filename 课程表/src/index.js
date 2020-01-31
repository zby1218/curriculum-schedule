//index.js文件用来进行课程表的初始化

window.weekName = ['','周一','周二','周三','周四','周五']

function Week(weekDay,today){

    this.weekDay = weekDay;
    this.today = today;

}

function left(date){
    //递归的终止条件，周一或周日时终止
    if(date.getDay() == 0){
        return;
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

window.onload = function(){
    //动态改变html默认字体大小
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';

    let body = document.getElementsByTagName('body')[0];
    body.style.height = htmlHeight + 'px'; 
    
    window.nowWeek = [];
    let date = new Date();
    //这周日期及星期数组

    let t = new this.Date();
    left(t);
    right(t)
    console.log(nowWeek);
    
    let weekDayLi = this.document.getElementsByClassName('weekday');
    let todayLi = this.document.getElementsByClassName('today');

    for(let i = 1;i < nowWeek.length;i++){

        weekDayLi[i-1].innerHTML = weekName[nowWeek[i].weekDay];
        todayLi[i-1].innerHTML = nowWeek[i].today;
   
    }

}

function loadFile(e){
    let reader = new FileReader();
    let picture = document.getElementsByClassName('picture')[0];
    let value = e.srcElement.files[0];
    reader.readAsDataURL(value);
   
}

function load(e){
console.log(e);


let picture = document.getElementsByClassName('picture')[0];
console.log(picture.files[0].name);
show.style.backgroundImage = `url("/img/${picture.files[0].name}")`
show.style.backgroundRepeat = 'no-repeat';
show.style.backgroundSize = '100% 100%';
}

let show = document.getElementsByClassName('show')[0];
console.log(show);
