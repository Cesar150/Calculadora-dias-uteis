function onlyWorkingDay(date) {
    const dayWeek = date.getDay();
    return dayWeek != 0 && dayWeek != 6;  // retorna true ou false
}


export function calculateEndDate(initialDate, numDays) {
    let date = new Date(initialDate.getTime());
    date.setDate(date.getDate() + 1);
    let workingDayCount = 0; 
    while (workingDayCount < numDays) {
        date.setDate(date.getDate() + 1);
        if (onlyWorkingDay(date)) {        // verifica se é true ou false, conta se for true.
            workingDayCount++
        }
    }
    return date;
}

