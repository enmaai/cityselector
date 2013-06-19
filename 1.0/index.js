/**
 * @fileoverview 请修改组件描述
 * @author baxian<freyaoo@gmail.com>
 * @module city-selector
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 请修改组件描述
     * @class City-selector
     * @constructor
     * @extends Base
     */
    function City-selector(comConfig) {
        var self = this;
        //调用父类构造函数
        City-selector.superclass.constructor.call(self, comConfig);
    }
    S.extend(City-selector, Base, /** @lends City-selector.prototype*/{

    }, {ATTRS : /** @lends City-selector*/{

    }});
    return City-selector;
}, {requires:['node', 'base']});



