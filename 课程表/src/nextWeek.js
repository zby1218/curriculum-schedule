function addNewWeek(temp){

    let body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.innerHTML += `
    <div class="${temp}">
    <div class="everyWeek">

        
    <div class="modify">
        <div class="top"></div>
        <div class="bottom">
            <div class="bottom-wrapper">
                <ul class="bottom-ul">
                    <li class="bottom-li">课程导入</li>
                    <li class="bottom-li">上传图片</li>
                    <li class="bottom-li"></li>
                    <li class="bottom-li"></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="left">
            <div class="control">
                <div class="click-font"></div c>
                <!-- <input type="file" class="picture" accept="image/*" onchange="load(event)">
                <div class="show"></div> -->
            </div>
            <ul class="time-ul">
            
                <li class="time-li">
                    <div class="time-wrapper">
                        <div class="number">1</div>
                        <div class="time">8:00</div>
                    </div>
                </li>
                <li class="time-li">
                    <div class="time-wrapper">
                        <div class="number">2</div>
                        <div class="time">10:15</div>
                    </div>
                </li>
                <li class="time-li">
                    <div class="time-wrapper">
                        <div class="number">3</div>
                        <div class="time">2:30</div>
                    </div>
                </li>
                <li class="time-li">
                    <div class="time-wrapper">
                        <div class="number">4</div>
                        <div class="time">4:35</div>
                    </div>
                </li>
                
            </ul>
        </div>
        <div class="right">
            <div class="date">
                <ul class="date-ul">
                    <li class="date-li">
                        <div class="wrapper">
                            <div class="weekday">周二</div class="weekday">
                            <div class="today">1-28</div class="today">
                        </div>
                    
                    </li>
                    <li class="date-li">
                        <div class="wrapper">
                            <div class="weekday">周二</div class="weekday">
                            <div class="today">1-28</div class="today">
                        </div>
                    </li>
                    <li class="date-li">
                        <div class="wrapper">
                            <div class="weekday">周二</div class="weekday">
                            <div class="today">1 - 28</div class="today">
                        </div>
                    </li>
                    <li class="date-li">
                        <div class="wrapper">
                            <div class="weekday">周二</div class="weekday">
                            <div class="today">1-28</div class="today">
                        </div>
                    </li>
                    <li class="date-li">
                        <div class="wrapper">
                            <div class="weekday">周二</div class="weekday">
                            <div class="today">1-28</div class="today">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="curriculum">
                <ul class="cur-ul">
                    <li class="cur-li">
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div> 
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                    </li>
                    <li class="cur-li">
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div> 
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                    </li>
                    <li class="cur-li">
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div> 
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                    </li>
                    <li class="cur-li">
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div> 
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                    </li>
                    <li class="cur-li">
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div> 
                        <div class="cur-div">
                            <div class="li-wrap">
                                <div class="className">python</div>
                                <div class="classRoom">fz203</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    </div>
    </div>
    `
}
addNewWeek('rightWeek');
addNewWeek('leftWeek');
window.nowWeek = [];
function RightWeekSet(){
    
    findWeek(5,7);
    console.log(3466232);
    
}
RightWeekSet();
let body = document.getElementsByTagName('body')[0];
body.scrollTo(100,0);
setTimeout(function(){
    
    
    body.scrollTo(100,0);

},0);



