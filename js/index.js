import { calculateEndDate } from "./calculateEndDate.js";

const calcButton = document.getElementById('calc-end-date');
calcButton.addEventListener('click',()=>{
    const initialDateInput = document.getElementById('initial-date');
    const workingDaysInput = document.getElementById('working-days');
    const resultInput = document.getElementById('result');

    const initialDate = new Date(initialDateInput.value);
    const workingDays = Number(workingDaysInput.value);

    const finalDate = calculateEndDate(initialDate, workingDays); 

    resultInput.textContent = `A data correspondente a ${workingDays} dia(s) útil(úteis) é: ${finalDate.toLocaleDateString()}`;
})