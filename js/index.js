function onlyWorkingDay(date){
    const dayWeek = date.getDay();
    return dayWeek != 0 && dayWeek != 6;  // retorna true ou false
}

let date = new Date();

onlyWorkingDay(date)

const calcBotton = document.getElementById('calc-end-date');
calcBotton.addEventListener('click',()=>{
    const initialDateInput = document.getElementById('initial-date');
    const workingDaysInput = document.getElementById('working-days');
    const resultInput = document.getElementById('result');

    console.log(`test: ${initialDateInput}, ${workingDaysInput}, ${resultInput}`); //ok
})