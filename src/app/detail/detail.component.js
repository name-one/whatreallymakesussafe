"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var data_constructor_1 = require('../model/data-constructor');
var DetailComponent = (function () {
    function DetailComponent(route, modalService, personService) {
        this.route = route;
        this.modalService = modalService;
        this.personService = personService;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (sectionTitle) {
            for (var _i = 0, DATA_MODEL_1 = data_constructor_1.DATA_MODEL; _i < DATA_MODEL_1.length; _i++) {
                var section = DATA_MODEL_1[_i];
                if (section.navTitle === sectionTitle) {
                    _this.selectedDetail = section;
                    break;
                }
            }
        });
    };
    DetailComponent.prototype.openQuoteModal = function (content, quote) {
        console.log('quote open, ', quote);
        this.selectedQuote = quote;
        this.modalService.open(content, { backdrop: true,
            keyboard: true,
            size: 'lg',
            windowClass: 'quote-modal' }).result.then(function (result) {
            console.log('Closed with: ${result}');
        }, function (reason) {
            console.log('Dismissed ${this.getDismissReason(reason)}');
        });
    };
    DetailComponent.prototype.getPerson = function (personId) {
        return this.personService.getPersonById(personId);
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css']
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
