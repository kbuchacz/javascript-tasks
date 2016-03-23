'use strict';

var _ = require('lodash');

module.exports = {
    countBy: function () {
        return [[1, 2, 2, 6, 6, 7, 7, 7]];
    },
    countBy2: function () {
        return [[3, 3, 4, 4, 4, 5]];
    },
    every: function () {
        return [[{ALIVE: true}, {ALIVE: true}]];
    },
    every2: function () {
        return [[true, true, true, true]];
    },
    filter: function () {
        return [[{}, {}, {}, {name: 'Ali', age: 33, active: false},
            {name: 'Kali', age: 21, active: true}], 'age'];
    },
    filter2: function () {
        return [[{}, {}, {name: 'Bow', age: 23, active: true},
            {name: 'Row', age: 23, active: true},
            {name: 'Sou', age: 23, active: true}], 'active'];
    },
    find: function (arr) {
        return [];
    },
    find2: function () {

        return [];
    },
    groupBy: function () {

        return [];
    },
    groupBy2: function () {

        return [];
    },
    includes: function () {

        return [];
    },
    includes2: function () {

        return [];
    },
    includes3: function (arr) {

        return [, []];
    },
    map: function (arr) {

        return [];
    },
    map2: function () {

        return [];
    },
    partition: function (arr) {

        return [];
    },
    partition2: function (arr) {

        return [];
    },
    partition3: function (arr) {

        return [];
    },
    reduce: function () {

        return [];
    },
    sortBy: function () {

        return [];
    }
};
