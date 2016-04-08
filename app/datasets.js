'use strict';

var _ = require('lodash');

module.exports = {
    countBy: function ()
    {
        return [[1, 2, 2, 6, 6, 3.1, 3.1, 3.1], function (value)
                                                {
                                                    if (value === 3.1) {
                                                        return 7;
                                                    }
                                                    return value;
                                                }];
    }, countBy2: function ()
    {
        return [['333', '333', '4444', '4444', '4444', '55555'], 'length'];
    }, every: function ()
    {
        return [[{ALIVE: true, and: 'bad'}, {ALIVE: true, and: 'well'}, {ALIVE: true, and: 'kicking'}], 'ALIVE'];
    }, every2: function ()
    {
        return [[function ()
                 {
                 }, 'aa', {}, true], function ()
                                     {
                                         return true;
                                     }];
    }, filter: function ()
    {
        return [[{
            name: 'Mali',
            age: 44,
            active: false
        },
            {
                name: 'Pali',
                age: 11,
                active: false
            },
            {
                name: 'Rali',
                age: 22,
                active: false
            },
            {
                name: 'Ali',
                age: 33,
                active: false
            },
            {
                name: 'Kali',
                age: 21,
                active: true
            }],
            function (item)
            {
                return item.pseudo === 'zxc' || item.pseudo === 'gfuj' || item.pseudo === 'asdqw' || item.name === 'Ali' || item.name === 'Kali';
            }];
    }, filter2: function ()
    {
        return [[{
            a: undefined,
            b: undefined,
            c: undefined,
            d: undefined
        },
            {
                a: undefined,
                b: undefined,
                c: undefined,
                d: undefined
            },
            {
                name: 'Bow',
                amount: 23,
                available: true,
                type: 'RANGE'
            },
            {
                name: 'Sword',
                amount: 23,
                available: true,
                type: 'MELEE'
            },
            {
                name: 'GUN',
                amount: 23,
                available: true,
                type: 'RANGE'
            }],
            {
                available: true,
                amount: 23
            }];
    }, find: function (arr)
    {
        return [arr, {age: 65}];
    }, find2: function ()
    {
        return [[{NAME: '', active: true, age: 11}, {NAME: '', active: true, age: 5}, {
            NAME: 'Rudi', age: 15, active: true, gender: 'M'
        }], 'gender'];
    }, groupBy: function ()
    {
        return [[4, 9, 16, 25, 81, 121, 2], function (item)
                                                     {
                                                         if (item === 4) {
                                                             return 2;
                                                         } else if (item === 9) {
                                                             return 3;
                                                         } else if (item === 16) {
                                                             return 4;
                                                         } else if (item === 25) {
                                                             return 5;
                                                         } else if (item === 81) {
                                                             return 9;
                                                         } else if (item === 121) {
                                                             return 11;
                                                         } else if (item === 2) {
                                                             return 1.4142135623730951;
                                                         } else {
                                                             return 'what?';
                                                         }
                                                     }];
    }, groupBy2: function ()
    {
        return [['xyz', 'xyz', 'combi', 2, 4, 5], 'length'];
    }, includes: function ()
    {
        return [{firstName: '', lastName: '', users: 0, running: false}, [0, null]];
    }, includes2: function ()
    {
        return [['antidisestablishmentarianism', 'aaaasaa', 'amentaraaba', 'stablishmentarianism'], 'mentar'];
    }, includes3: function (arr)
    {
        return [arr, [[2, 5], [3, 1], [false, true]]];
    }, map: function (arr)
    {
        return [arr, 'firstName'];
    }, map2: function ()
    {
        return [[1, 2, 3, 4, 5, 36], function (value) {
            switch(value){
                case 2:
                    return 4;
                case 4:
                    return 16;
                case 10:
                    return 100;
                case 12:
                    return 144;
                case 35:
                    return 35;
                case 40:
                    return 1600;
                case 11:
                    return 11;
                case 16:
                    return 256;
                default:
                    return 'number' === typeof value ? value: false;
            }
        }];
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
                return item.name === 'Harry' || item.name === 'Francheska' || item.ee === 40;
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
        }], 'name'];
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
        return [[5, 1, 1, 1, 1], function (sum, value)
                                          {
                                              if(1 === value) return 55;
                                              else return 590;
                                          }, NaN];
    }, sortBy: function ()
    {
        return [['aaae', 'uu', 'bboooo', 'ccccccllll', 'dddkkkkk', 'yyy'], 'length'];
    }
};
