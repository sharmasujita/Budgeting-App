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
    self.rent = 0;
    self.groceries = 0;
    self.utilities = 0;
    self.expenses = [ ];
    self.incomes = [ ];

    self.addIncome = function() {
        self.incomes.push({ });
    }

    self.addExpense = function() {
        self.expenses.push({ });
    }
}
