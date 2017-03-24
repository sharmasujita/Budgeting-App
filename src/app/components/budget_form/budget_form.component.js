"use strict";

angular
    .module("budget-app")
    .component("budgetForm", {
        templateUrl: "./src/app/components/budget_form/budget_form.template.html",
        controller: BudgetFormController
    });

function BudgetFormController() {
    var self = this;
    self.income = 0;
    self.incomeTypes = ['Monthly', 'Biweekly', 'Weekly', 'Annual'];
    self.selectedIncomeType = 'Monthly';
    self.mortgage = 0;
    self.groceries = 0;
    self.utilities = 0;
    self.expenses = [ ];
    self.incomes = [ ];
    self.startDate = new Date();
    self.endDate = new Date();


    self.addIncome = function() {
        self.incomes.push({ value: 0 });
    }

    self.addExpense = function() {
        self.expenses.push({ value: 0 });
    }

    self.submit = function() {
        var totalIncome = self.totalIncomes();
        var totalExpenses = self.totalExpenses();
        
        var details = {
                incomeType: self.selectedIncomeType,
                income: totalIncome,
                expense: totalExpenses,
                startDate: self.startDate,
                endDate: self.endDate
            };
        
        
    }

    self.totalIncomes = function() {
        var otherIncome = 0;

        self.incomes.forEach(function(income) {
            otherIncome += income.value;
        });

        return self.income + otherIncome;
    };
    
    self.totalExpenses = function() {
        var otherExpense = 0;

        self.expenses.forEach(function(expense) {
            otherExpense += expense.value;
        });

        return self.groceries + self.mortgage + self.utilities + otherExpense;
    }
}
