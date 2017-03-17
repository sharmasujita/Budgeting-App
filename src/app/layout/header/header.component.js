"use Strict"
angular
    .module("budget-app")
    .component("headerNav", {
        templateUrl: "./src/app/layout/header/header.template.html",
        controller: HeaderController
    });

    function HeaderController() {
        var self = this;
        self.title = "My Budget App";
    }