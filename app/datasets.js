'use strict';

var _ = require('lodash');

module.exports = {
    countBy: function ()
    {
        return [[1, 2, 2, 6, 6, 7, 7, 7]];
    }, countBy2: function ()
    {
        return [[3, 3, 4, 4, 4, 5]];
    }, every: function ()
    {
        return [[{ALIVE: true}, {ALIVE: true}]];
    }, every2: function ()
    {
        return [[true, true, true, true]];
    }, filter: function ()
    {
        return [[{}, {}, {}, {name: 'Ali', age: 33, active: false}, {name: 'Kali', age: 21, active: true}], 'age'];
    }, filter2: function ()
    {
        return [[{}, {}, {name: 'Bow', age: 23, active: true}, {name: 'Row', age: 23, active: true}, {name: 'Sou', age: 23, active: true}], 'active'];
    }, find: function (arr)
    {
        return [arr, {name: 'Helen'}];
    }, find2: function ()
    {
        return [[{NAME: true, active: true}, {NAME: true, active: true}, {
            NAME: 'Rudi', age: 15, active: true, gender: 'M'
        }], 'age'];
    }, groupBy: function ()
    {
        return [[3.3, 4.2, 4.6, 6.1, 6.3, 8.3, 8.9], function (item)
                                                     {
                                                         if (item >= 3 && item < 4) {
                                                             return 3;
                                                         } else if (item >= 4 && item < 5) {
                                                             return 4;
                                                         } else if (item >= 6 && item < 7) {
                                                             return 6;
                                                         } else if (item >= 8 && item < 9) {
                                                             return 8;
                                                         } else {
                                                             return 'what?';
                                                         }
                                                     }];
    }, groupBy2: function ()
    {
        return [['xyz', 'xyz', 'combi', 2, 4, 5], function (item)
                                                  {
                                                      switch (item) {
                                                          case 'xyz':
                                                              return 3;
                                                          case 'combi':
                                                              return 5;
                                                          case 2:
                                                          case 4:
                                                          case 5:
                                                              return undefined;
                                                          default:
                                                              return 'what?';
                                                      }
                                                  }];
    }, includes: function ()
    {
        return [{firstName: null, lastName: null, users: null, running: null}, [null, 'what?']];
    }, includes2: function ()
    {
        return [['antidisestablishmentarianism', 'a', 'a', 'b'], 'a'];
    }, map: function (arr)
    {
        return [arr, ''];
    }, map2: function (arr)
    {
        return [arr];
    }, partition: function ()
    {
        return [[{
            name: 'Harry', age: 40, active: true
        }, {
            name: 'Francheska', age: 61, active: true
        }, {
            name: 'Andrinio', age: 36, active: false
        }, {
            name: 'Kodi', age: 1, active: false
        }], function (item)
            {
                return item.name === 'Harry' || item.name === 'Francheska';
            }];
    }, partition2: function ()
    {
        return [[{
            name: 'Andrinio', age: 36, active: false
        }, {
            name: 'Harry', age: 40, active: true
        }, {
            name: 'Kodi', age: 1, active: false
        }, {
            name: 'Francheska', age: 61, active: true
        }], null];
    }, partition3: function ()
    {
        return [[{
            name: 'Andrinio', age: 36, active: false
        }, {
            name: 'Harry', age: 40, active: true
        }, {
            name: 'Kodi', age: 1, active: false
        }, {
            name: 'Francheska', age: 61, active: true
        }], true];
    }, reduce: function ()
    {
        return [[1, 5, 'ee', 'aa', 'ss'], function () {
            return 55;
        }];
    }, sortBy: function (arr)
    {
        return [];
    }
};
