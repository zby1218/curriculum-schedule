//index.js文件用来进行课程表的初始化

window.onload = function(){
     window.nowWeek = [];
    let date = new Date();
    //这周日期及星期数组
    date.nowWeek = [];

    function Week(weekDay,today){

        this.weekDay = weekDay;
        this.today = today;

    }

    function left(date){
        console.log(date.getDay());
        //递归的终止条件，周一或周日时终止
        if(date.getDay() == 0){
            console.log(111);
            
            return;
        }
        //首先把当天的信息存储到数组中
        let today = new Week(date.getDay() , `${date.getMonth()+1}-${date.getDate()}`)
        console.log(today,1212);
        nowWeek[today.weekDay] = today;
        let yes = date.setDate(date.getDate() - 1);
        let yesterday = new Date(yes);
        left(yesterday);
        return;
    }

    function right(date){

        if(date.getDay() == 6){
            console.log(222);
            
            return;
        }
        let today = new Week(date.getDay() , `${date.getMonth()+1}-${date.getDate()}`);
        nowWeek[today.weekDay] = today;
        let tom = date.setDate(date.getDate() + 1);
        let tomarrow = new Date(tom);
        right(tomarrow);
        return;
    }
    let t = new this.Date();
    left(t);
    right(t)
    console.log(nowWeek);
    
}

