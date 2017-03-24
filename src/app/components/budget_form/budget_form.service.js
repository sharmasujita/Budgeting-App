angular
    .module("budget-app")
    .factory("budgetForm.service", BudgetFormService);

function BudgetFormService() {
    return {
        createBudgetSummary : createBudgetSummary
    };

    function createBudgetSummary(details) {


    };

    function rows(startDate, endDate, reccurance) {

        if(reccurance === 'Weekly')
        {
            var week = 1000 * 60 * 60 * 24 * 7 ;
            var numberOfWeek = Math.abs((startDate.getTime() - endDate.getTime()))/week; 

            return Math.round(numberOfWeek);
        }
        else if(reccurance === 'Monthly')
        {
            var months = (startDate.getFullYear() - endDate.getFullYear()) * 12; 

            months -= startDate.getMonths() + 1;

            months += endDate.getMonths();
            
            return Math.round(months);
        }
        
        
    }




};