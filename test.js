function getFormatDate(dt){
    console.log(dt);
    var dateTime = new Date(dt)
    console.log(dateTime);
    var years = dateTime.getFullYear()
    var month = dateTime.getMonth()+1
    month = month<10?"0"+month:month
    var date = dateTime.getDate()
    date = date<10?"0"+date:date

    var hours = dateTime.getHours()
    var min = dateTime.getMinutes()
    var ss = dateTime.getSeconds()
    console.log(`${years}-${month}-${date} ${hours}:${min}:${ss}`);
}

getFormatDate(new Date())