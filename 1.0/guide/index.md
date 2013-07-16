## 综述

cityselector是一个简单的城市选择器，支持国内国际城市，支持overlay模式。

- 版本 : 1.0
- kissy版本 : 1.3
- author : 霸先
- email : freyaoo@gmail.com

## 演示

[DEMO](http://gallery.kissyui.com/cityselector/1.0/demo/index.html)

## 快速使用

### 初始化组件

	<div id="foo"></div>
	<script>
		//1.0默认自带了国内城市数据
	    KISSY.use('gallery/cityselector/1.0/index', function (S,CitySelector) {
	        var citySelector = new CitySelector({
         		render : '#foo' //cityselector将渲染到div#foo里
         	});
	    });
	</script>

### 使用国外数据

	<div id="foo"></div>
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.0/index,gallery/cityselector/1.0/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		render : '#foo' //cityselector将渲染到div#foo里
         	});
	    });
	</script>

### 使用overlay模式(与input绑定)

	<input id="foo" type="text">
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.0/index,gallery/cityselector/1.0/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		node : '#foo' //触发cityselector的input节点
         	});
	    });
	</script>

### 其他进阶设置

	<input id="foo" type="text">
	<script>
		//国外数据需要单独引入
	    KISSY.use('gallery/cityselector/1.0/index,gallery/cityselector/1.0/foreign', function (S,CitySelector,ForeignData) {
	        var citySelector = new CitySelector({
	        	data : ForeignData, //设置数据为国外数据
         		node : '#foo', //触发cityselector的input节点
         		autoWidth : true, //cityselector的宽度与input保持一致
         		multiple : true, //支持城市多选
         		canProvinceSelect : true, //可以选择省份(国外数据对应国家)
         		prefixCls : 'myclass' //自定义样式使用
         	});
	    });
	</script>

## API说明

[http://gallery.kissyui.com/cityselector/1.0/api/index.html](http://gallery.kissyui.com/cityselector/1.0/api/index.html)

