"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}Array.prototype.diff=function(b){return this.filter(function(a){return 0>b.indexOf(a)})};class Valinode{constructor(a={}){this.isDebug=a.debug||!1,this.$ExceptionContainer={errors:{},message:""},this.$translate={and:"ve",required:":attribute alan\u0131 bo\u015F olamaz.",integer:":attribute say\u0131 olmal\u0131d\u0131r.",string:":attribute alan\u0131n\u0131n de\u011Feri yaz\u0131 olmal\u0131d\u0131r.",array:":attribute alan\u0131n\u0131n de\u011Feri dizi olmal\u0131d\u0131r.",max:{numeric:":attribute alan\u0131n\u0131n de\u011Feri en fazla :rule_value olabilir. L\xFCtfen d\xFCzeltiniz.",string:":attribute alan\u0131 en fazla :rule_value karakterden olu\u015Fabilir. (:length karakter)",array:":attribute alan\u0131nda en fazla :rule_value se\xE7im yapabilirsiniz.",date:":attribute alan\u0131n\u0131n tarih aral\u0131\u011F\u0131 en fazla :rule_value olabilir."},min:{numeric:":attribute alan\u0131n\u0131n de\u011Feri en az :rule_value olabilir. L\xFCtfen d\xFCzeltiniz.",string:":attribute alan\u0131 en az :rule_value karakterden olu\u015Fabilir.",array:":attribute alan\u0131nda en az :rule_value se\xE7im yapmal\u0131s\u0131n\u0131z.",date:":attribute alan\u0131n\u0131n tarih aral\u0131\u011F\u0131 en az :rule_value olabilir."},in:":attribute alan\u0131n\u0131n de\u011Feri ge\xE7ersizdir.",bigger_than:":attribute alan\u0131 :other alan\u0131ndan b\xFCy\xFCk olmal\u0131d\u0131r.",between:":attribute alan\u0131 :other aras\u0131nda olabilir.",same:":attribute alan\u0131 :other alan\u0131 ile ayn\u0131 olmal\u0131d\u0131r.",hard_same:":attribute alan\u0131 :other alan\u0131 ile ayn\u0131 olmak zorundad\u0131r.",email:":attribute alan\u0131 ge\xE7erli bir email adresi olmal\u0131d\u0131r.",phone:":attribute alan\u0131 ge\xE7erli bir telefon numaras\u0131 olmal\u0131d\u0131r.",date:":attribute alan\u0131 ge\xE7erli bir tarih olmal\u0131d\u0131r."},this.$requests={},this.$rules={},this.$messages={},this.$attributes={},this._isFailed=!1,this._errorCount=0,this._isValidated=!1,this.$regex={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,phone:/^\+?[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/},this.failedRules=[]}beginValidate(){return this.clear(),this._isValidated=!0,this._errorCount=0,new Promise(a=>{Object.keys(this.$rules).map(a=>{let b=this.$rules[a].split("|"),c=this.$requests[a],d=this.getTypeOf(c),e=!!("string"==d&&(c+"").length||"numeric"==d&&parseInt(c)||"array"==d&&c.length||"date"==d&&new Date(c).getTime()),f={property:a,typeOf:d,cond:b.map(a=>{let b=a.split(":");return{_fn:b.shift(),withEqual:!!(1<b.length),value:b.pop()||!0}}),value:this.$requests[a],isValueExists:e};"undefined"==typeof this.$ExceptionContainer.errors[f.property]&&(this.$ExceptionContainer.errors[f.property]=[]),f.cond.forEach(a=>{let b=this.isNullable(f);if(!b||b&&f.isValueExists)if("undefined"!=typeof this[a._fn]){let b=this[a._fn](f,a);b&&(!this._isFailed&&(this._isFailed=!0),this._errorCount++,this.$ExceptionContainer.errors[f.property].push(b))}else console.warn(a._fn+" is not a valid validation rule!")})}),a(this.$ExceptionContainer)})}requests(a,b=!1){return a instanceof Object&&(this.$requests=b?_objectSpread({},this.$requests,a):a,this.clear()),this}messages(a,b){return a instanceof Object&&(this.$messages=b?_objectSpread({},this.$messages,a):a,this.clear()),this}attributes(a,b){return a instanceof Object&&(this.$attributes=b?_objectSpread({},this.$attributes,a):a,this.clear()),this}rules(a,b){return a instanceof Object&&(this.$rules=b?_objectSpread({},this.$rules,a):a,this.clear()),this}translate(a){return this.$translate=_objectSpread({},this.$translate,a),this}required(a,b){if(!a.isValueExists&&!this.isNullable(a))return this.createNewExceptionMessage(a,b)}integer(a,b){if("numeric"!=a.typeOf)return this.createNewExceptionMessage(a,b)}string(a,b){if("string"!=a.typeOf)return this.createNewExceptionMessage(a,b)}array(a,b){if("array"!=a.typeOf)return this.createNewExceptionMessage(a,b)}date(a,b){if("date"!=a.typeOf)return this.createNewExceptionMessage(a,b)}max(a,b){if("numeric"==a.typeOf&&parseInt(a.value)>parseInt(b.value)||"string"==a.typeOf&&(a.value+"").length>parseInt(b.value)||"array"==a.typeOf&&a.value.length>parseInt(b.value)||"date"==a.typeOf&&new Date(a.value).getTime()>new Date(b.value).getTime())return this.createNewExceptionMessage(a,b)}min(a,b){if("numeric"==a.typeOf&&parseInt(a.value)<parseInt(b.value)||"string"==a.typeOf&&(a.value+"").length<parseInt(b.value)||"array"==a.typeOf&&a.value.length<parseInt(b.value)||"date"==a.typeOf&&new Date(a.value).getTime()<new Date(b.value).getTime())return this.createNewExceptionMessage(a,b)}in(a,b){if(("array"==a.typeOf?a.value:["numeric"==a.typeOf?parseInt(a.value):a.value]).diff(JSON.parse(b.value)).length)return this.createNewExceptionMessage(a,b)}bigger_than(a,b){if("undefined"!=typeof this.$requests[b.value]){let c=this.$requests[b.value];if("numeric"==a.typeOf&&parseInt(a.value)<=parseInt(c)||"string"==a.typeOf&&a.value<=c||"date"==a.typeOf&&new Date(a.value).getTime()<=new Date(c).getTime())return this.createNewExceptionMessage(a,b,this.getAttributeByProperty(b.value))}}smaller_than(a,b){if("undefined"!=typeof this.$requests[b.value]){let c=this.$requests[b.value];if("numeric"==a.typeOf&&parseInt(a.value)>=parseInt(c)||"string"==a.typeOf&&a.value>=c||"date"==a.typeOf&&new Date(a.value).getTime()>=new Date(c).getTime())return this.createNewExceptionMessage(a,b,this.getAttributeByProperty(b.value))}}between(a,b){let c=b.value.split(/[,]/g).map(a=>a.trim());if(c.length&&2==c.length&&("numeric"==a.typeOf&&parseInt(a.value)<parseInt(c[0])||parseInt(a.value)>parseInt(c[1])||"string"==a.typeOf&&(a.value+"").length<parseInt(c[0])||(a.value+"").length>parseInt(c[1])||"date"==a.typeOf&&new Date(a.value).getTime()<new Date(c[0]).getTime()||new Date(a.value).getTime()>new Date(c[1]).getTime()))return this.createNewExceptionMessage(a,b,c.join(` ${this._("and")} `))}same(a,b){let c=this.getRequestByProperty(b.value);if(c&&a.value!=c)return this.createNewExceptionMessage(a,b,this.getAttributeByProperty(b.value))}hard_same(a,b){let c=this.getRequestByProperty(b.value);if(c&&a.value!==c)return this.createNewExceptionMessage(a,b,this.getAttributeByProperty(b.value))}email(a,b){if(!this.$regex.email.test(a.value))return this.createNewExceptionMessage(a,b)}phone(a,b){if(!this.$regex.phone.test(a.value))return this.createNewExceptionMessage(a,b)}nullable(){}isRuleExists(a,b){return!!a.cond.filter(a=>a._fn==b).length}isNullable(a){return this.isRuleExists(a,"nullable")}createNewExceptionMessage(a,b,c=null){return this.failedRules.push({property:a.property,rule:b._fn,expect:b.value,found:a.value}),this.compileException({property:a.property,typeOf:a.typeOf,activeRule:b,value:b.value,requestValue:a.value,other:c,attribute:this.getAttributeByProperty(a.property)})}compileException(a){let b=this.getTranslateMessageByType(a);return b?b.replace(/:attribute/g,a.attribute).replace(/:rule_value/g,a.value).replace(/:other/g,a.other).replace(/:length/g,(a.requestValue+"").length):`message not exists (${b})`}getTranslateMessageByType(a){return"undefined"==typeof this.$messages[a.property+"."+a.activeRule._fn]?"object"==typeof this.$translate[a.activeRule._fn]?this.$translate[a.activeRule._fn][a.typeOf]:"string"==typeof this.$translate[a.activeRule._fn]?this.$translate[a.activeRule._fn]:`'${a.activeRule._fn}' message is not empty`:this.$messages[a.property+"."+a.activeRule._fn]}getAttributeByProperty(a){return"undefined"==typeof this.$attributes[a]?this.parseBaseProperty(a):this.$attributes[a]}getRequestByProperty(a){return"undefined"==typeof this.$requests[a]?null:this.$requests[a]}parseBaseProperty(a){return a.replace(/[_-]/g," ")}isInteger(a){return(parseInt(a)+"").length==(a+"").length&&"[object Number]"===Object.prototype.toString.call(parseInt(a))}isString(a){return"[object String]"===Object.prototype.toString.call(a)}isDate(a){return"[object Date]"===Object.prototype.toString.call(a)&&"Invalid Date"!=a}isArray(a){return"[object Array]"===Object.prototype.toString.call(a)}isObject(a){return"[object Object]"===Object.prototype.toString.call(a)}getTypeOf(a){return this.isArray(a)?"array":this.isObject(a)?"object":this.isInteger(a)?"numeric":this.isDate(new Date(a))?"date":this.isString(a)?"string":typeof a}get(a=!1){if("boolean"==typeof a)return this.all();if(a){let b=Object.keys(this.$ExceptionContainer.errors).filter(b=>b==a).shift();if(b&&this.$ExceptionContainer.errors[b]instanceof Array)return this.$ExceptionContainer.errors[b]}return[]}limit(a=!1,b=!1){return parseInt(a)?this.all().slice(0,a):b?this.get(a).slice(0,parseInt(b)):void 0}first(a=!1){return a?this.get(a).shift():this.all().shift()}all(){let a=[];return Object.keys(this.$ExceptionContainer.errors).map(a=>this.$ExceptionContainer.errors[a]).forEach(b=>a=[...a,...b]),a}errors(){return this.$ExceptionContainer.errors}isFailed(a=!1){return a?!!this.first(a):this._isFailed}fails(){return this._isFailed}isValidated(){return this._isValidated}errorCount(a=null){return a?this.all(a).length:this._errorCount}clear(){return this.$ExceptionContainer={errors:{},message:""},this}isFailedRule(a,b){let c=this.failedRules.filter(c=>c.rule==a&&c.property==b);return c.length?c.shift():null}validate(){return this.beginValidate(),this}_(a){return"undefined"==typeof this.$translate[a]?a:this.$translate[a]}}exports.default=Valinode;