"use strict";
var People_1 = require('../model/People');
var PersonService = (function () {
    function PersonService() {
    }
    PersonService.prototype.getPersonById = function (id) {
        for (var person in People_1.PEOPLE) {
            if (person.id === id) {
                return person;
            }
        }
        console.error('person was not found by id, ' + id);
    };
    return PersonService;
}());
exports.PersonService = PersonService;
