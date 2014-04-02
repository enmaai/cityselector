/**
 * 国内省市区联动js
 *
 * @module cityselector
 * @author freyaoo@gmail.com
 * @version 1.2
 */
KISSY.add(function(S,Data,Base){
    'use strict';

    var DEFAULTPROVINCE = '请选择省',
        DEFAULTCITY = '请选择城市',
        DEFAULTDISTRICT = '请选择地区',
        IDX = 'data-index';

    var Linkage = Base.extend({
        initializer : function(){
            var _ = this;
            if(!_.get('provinceSelect')){
                S.log('cityselector::provinceSelect are not find,cityselector init failure!');
                return;
            }
            _.provinceNode = S.one(_.get('provinceSelect'));
            _.cityNode = S.one(_.get('citySelect'));
            _.districtNode = S.one(_.get('districtSelect'));
            _._render();
            _._bind();
        },
        destructor : function(){

        },
        _render : function(){
            var _ = this;
            _._fillProvince();
            _._fillCity();
            _._fillDistrict();
        },
        _bind : function(){
            var _ = this;
            _.provinceNode.on('change',function(e){
                var province = _.provinceNode[0].selectedOptions[0].text;
                _.set('province',province,{source:'selectChange'});
            });
            _.cityNode && _.cityNode.on('change',function(e){
                var city = _.cityNode[0].selectedOptions[0].text;
                _.set('city',city);
            });
            _.districtNode && _.districtNode.on('change',function(e){
                var district = _.districtNode[0].selectedOptions[0].text;
                _.set('district',district);
            });
        },  
        _fillProvince : function(){
            var _ = this,
                province = _.get('province'),
                node = _.provinceNode;
            node[0].options.add(new Option(DEFAULTPROVINCE,-1));
            S.each(Data,function(item,index){
                var op = new Option(item[1],item[0]);
                node[0].options.add(op);
                if(item[1] == province){
                    op.selected = true;
                }
            });
        },
        _fillCity : function(){
            var _ = this,
                province = _.get('province'),
                city = _.get('city'),
                node = _.cityNode;
            node[0].options.length = 0;
            if(province != DEFAULTPROVINCE){
                var index = _.provinceNode[0].selectedIndex-1,
                citys = Data[index];
                S.each(citys[citys.length-1],function(item,index){
                    var op = new Option(item[1],item[0]);
                    _.cityNode[0].add(op);
                    if(item[1] == city){
                        op.selected = true;
                    }
                    if(!index){
                        _.set('city',item[1]);
                    }
                });
            }else{
                node[0].options.add(new Option(DEFAULTCITY,-1));
                _.set('city',DEFAULTCITY);
            }
        },
        _fillDistrict : function(){
            var _ = this,
                district = _.get('district'),
                province = _.get('province'),
                city = _.get('city'),
                node = _.districtNode;
            node[0].options.length = 0;
            if(city != DEFAULTCITY){
                var pIndex = _.provinceNode[0].selectedIndex-1,
                    cIndex = _.cityNode[0].selectedIndex,
                    districts = Data[pIndex][Data[pIndex].length-1][cIndex];
                S.each(districts[districts.length-1],function(item,index){
                    var op = new Option(item[1],item[0]);
                    _.districtNode[0].add(op);
                    if(item[1] == district){
                        op.selected = true;
                    }
                    if(!index){
                        _.set('district',item[1]);
                    }
                });
            }else{
                _.set('district',DEFAULTDISTRICT);
                node[0].options.add(new Option(DEFAULTDISTRICT,-1));
            }
        },
        _onSetProvince : function(province){
            var _ = this,
                options = _.provinceNode[0].options,
                i = 0,
                len = options.length;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == province){
                    options[i].selected = true;
                }
            }
            _._fillCity();
        },
        _onSetCity : function(city){
            var _ = this,
                options = _.cityNode[0].options,
                i = 0,
                len = options.length,
                inThisProvince = false;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == city){
                    options[i].selected = true;
                    inThisProvince = true;
                }
            }
            if(inThisProvince){
                this._fillDistrict();
            }
        },
        _onSetDistrict : function(district){
            var _ = this,
                options = _.districtNode[0].options,
                i = 0,
                len = options.length;
            for(;i<len;i++){
                var txt = options[i].text;
                if(txt == district){
                    options[i].selected = true;
                }
            }
        }
    },{
        ATTRS : {
            province : {
                value : DEFAULTPROVINCE
            },
            city : {
                value : DEFAULTCITY
            },
            district : {
                value : DEFAULTDISTRICT
            }
        }
        /**
        需要选中的省

        @attribute province
        @type string
        */
       /**
        需要选中的市

        @attribute city
        @type string
        */
       /**
        需要选中的地区

        @attribute district
        @type string
        */
       /**
        渲染省的select节点

        @attribute provinceSelect
        @type HTMLelement|node|selector
        @writeOnce
        */
       /**
        渲染市的select节点

        @attribute citySelect
        @type HTMLelement|node|selector
        @writeOnce
        */
        /**
        渲染地区的select节点

        @attribute districtSelect
        @type HTMLelement|node|selector
        @writeOnce
        */
    });

    return Linkage;
},{
    requires : ['./linkage-data','base','node','event']
});