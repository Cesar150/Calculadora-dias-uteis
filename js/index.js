function onlyWorkingDay(date){
    const dayWeek = date.getDay();
    return dayWeek != 0 && dayWeek != 6;  // retorna true ou false
}

let date = new Date();

onlyWorkingDay(date)