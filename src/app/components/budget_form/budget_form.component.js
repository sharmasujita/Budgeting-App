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
}