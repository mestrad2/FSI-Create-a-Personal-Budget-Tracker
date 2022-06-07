let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {

    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses = weeklyExpenses + answer;

}

for (let x = 0; x < monthlyExpenseQuestions.length; x++) {

    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[x]));
    monthlyExpenses = monthlyExpenses + answer;

}

for (let y = 0; y < annualExpenseQuestions.length; y++) {
    
    let answer = parseFloat(window.prompt(annualExpenseQuestions[y]));
    annualExpenses = annualExpenses + answer;

}