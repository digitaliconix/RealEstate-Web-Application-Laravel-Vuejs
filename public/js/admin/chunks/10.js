(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+70i":function(t,e,r){"use strict";r.r(e);var a=r("djKw"),i=r.n(a),o=r("IAPz"),n=r("+4WA"),s=r("3uf8"),c=r("cbbs"),l=r("e9yv"),u=r("WzGQ"),p=r("dQIy"),d=r("BBKr"),m=r("t8C5"),h=r("tQ25"),f=r("c34V"),b=r("Bc29"),v=r("VOL1"),_=r("uvMX"),g=r("hbd/"),y=r("sejE"),x=r("4cv3"),w=r("wWPa"),$=r("1w2d");function C(t){var e={add:"/api/project/".concat(t.params.id,"/units/create"),edit:"/api/project/units/".concat(t.params.id,"/edit")};return e[t.meta.mode]||e.add}var j={mixins:[_.a],components:{XTagInput:w.a,Error:y.a,BCard:o.a,BCardText:n.a,BLink:s.a,BRow:c.a,BCol:l.a,BFormInput:u.a,BFormGroup:p.a,BFormFile:d.a,BImg:m.a,BContainer:h.a,BFormCheckboxGroup:f.a,BFormTextarea:b.a,BButton:v.a},directives:{Ripple:x.a},data:function(){return{show:!1,resource:"/projects/".concat(this.$route.params.id,"/units"),store:"/api/units",method:"POST",title:"Add",message:"New Unit Added",permissions:[]}},beforeRouteEnter:function(t,e,r){Object(g.b)(C(t)).then((function(t){r((function(e){return e.setData(t)}))}))},beforeRouteUpdate:function(t,e,r){var a=this;Object(g.b)(C(t)).then((function(t){a.setData(t),r()}))},methods:{setData:function(t){i.a.set(this.$data,"form",t.data.form),"edit"===this.$route.meta.mode&&(this.store="/api/units/".concat(this.$route.params.id,"?_method=PUT"),this.title="Edit",this.resource="/projects/".concat(this.$route.params.project,"/units"),this.message="Unit has been updated"),this.show=!0},formSubmitted:function(){var t=this;this.submitMultipartForm(this.form,(function(e){t.success(),t.successfull(e)}))},successfull:function(t){this.$router.push("".concat(this.resource))},onProjectUpdate:function(t){i.a.set(this.$data.form,"project",t),i.a.set(this.$data.form,"project_id",t.id)},onBuildingUpdate:function(t){i.a.set(this.$data.form,"building",t),i.a.set(this.$data.form,"building_id",t.id)},onUnitTypeUpdate:function(t){i.a.set(this.$data.form,"unit_type",t),i.a.set(this.$data.form,"unit_type_id",t.id),i.a.set(this.$data.form,"area",t.area),i.a.set(this.$data.form,"unit_price",t.base_price),i.a.set(this.$data.form,"measurement_type",t.measurement_type),i.a.set(this.$data.form,"measurement_type_id",t.measurement_type.id)},onMeasurementTypeUpdate:function(t){i.a.set(this.$data.form,"measurement_type",t),i.a.set(this.$data.form,"measurement_type_id",t.id)},onUnitCategoryUpdate:function(t){i.a.set(this.$data.form,"unit_category",t),i.a.set(this.$data.form,"unit_category_id",t.id)},onProjectChargeTypeUpdate:function(t,e,r){for(var a=0;a<this.form[r].length;a++)if(this.form[r][a].project_charge_type_id==t.id)return this.$toast({component:$.a,props:{title:"Alert",icon:"BellIcon",text:"This option is already selected",variant:"danger"}}),0;i.a.set(this.$data.form[r][e],"project_charge_type",t),i.a.set(this.$data.form[r][e],"project_charge_type_id",t.id),i.a.set(this.$data.form[r][e],"price",t.price)},addCharges:function(){this.form.extra_charges.push({project_charge_type:null,project_charge_type_id:null,price:0})},removeItem:function(t,e){this.form[e].splice(t,1)}}},k=r("KHd+"),I=Object(k.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",[r("b-card",{attrs:{title:t.title+" Unit"}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Number","label-for":"mc-title"}},[r("b-form-input",{attrs:{id:"mc-title",placeholder:"Number"},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}}),t._v(" "),r("error",{attrs:{error:t.error.number}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Building","label-for":"mc-building-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/buildings?project_id="+t.form.project_id,value:t.form.building,column:"title",name:"title"},on:{input:t.onBuildingUpdate}}),t._v(" "),r("error",{attrs:{error:t.error.building_id}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Unit Type","label-for":"mc-unit-type-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/unit_types?project_id="+t.form.project_id,value:t.form.unit_type,column:"title",name:"title"},on:{input:t.onUnitTypeUpdate}}),t._v(" "),r("error",{attrs:{error:t.error.unit_type_id}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Area","label-for":"mc-area"}},[r("b-form-input",{attrs:{type:"number",id:"mc-area",placeholder:"Area"},model:{value:t.form.area,callback:function(e){t.$set(t.form,"area",e)},expression:"form.area"}}),t._v(" "),r("error",{attrs:{error:t.error.area}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Measurement Type","label-for":"mc-measurement-type-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/measurement_types",value:t.form.measurement_type,column:"title",name:"title"},on:{input:t.onMeasurementTypeUpdate}}),t._v(" "),r("error",{attrs:{error:t.error.measurement_type_id}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Net Price","label-for":"mc-price"}},[r("b-form-input",{attrs:{type:"number",id:"mc-price",placeholder:"Net Price"},model:{value:t.form.unit_price,callback:function(e){t.$set(t.form,"unit_price",e)},expression:"form.unit_price"}}),t._v(" "),r("error",{attrs:{error:t.error.unit_price}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Unit Category","label-for":"mc-unit-category-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/unit_categories",value:t.form.unit_category,column:"title",name:"title"},on:{input:t.onUnitCategoryUpdate}}),t._v(" "),r("error",{attrs:{error:t.error.unit_category_id}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Image","label-for":"mc-unit-image"}},[r("b-form-file",{attrs:{id:"mc-unit-image",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",accept:".jpg, .jpeg, .png"},model:{value:t.form.unit_image,callback:function(e){t.$set(t.form,"unit_image",e)},expression:"form.unit_image"}}),t._v(" "),r("error",{attrs:{error:t.error.unit_image}})],1)],1),t._v(" "),r("b-col",{staticClass:"mb-2",attrs:{md:"12"}},[t.form.image&&null!=t.form.image?[r("b-container",{staticClass:"p-1 bg-dark",attrs:{fluid:""}},[r("b-row",[r("b-col",{staticClass:"p-1",attrs:{md:"12"}},[r("b-img",{attrs:{thumbnail:"",fluid:"",src:"/api/attachment/project_"+t.form.project_id+"/units/"+t.form.image}})],1)],1)],1)]:t._e()],2)],1),t._v(" "),r("hr"),t._v(" "),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("h3",[t._v("Standard Charges")])])],1),t._v(" "),t._l(t.form.standard_charges,(function(e,a){return r("b-row",{key:a},[r("b-col",{attrs:{md:"5"}},[r("b-form-group",{attrs:{label:"Charge Type","label-for":"mc-charge-type-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/project_charge_types?project_id="+t.form.project_id+"&charge_type=1",value:e.project_charge_type,column:"title",name:"title"},on:{input:function(e){return t.onProjectChargeTypeUpdate(e,a,"standard_charges")}}}),t._v(" "),r("error",{attrs:{error:t.error["standard_charges."+a+".project_charge_type_id"]}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"5"}},[r("b-form-group",{attrs:{label:"Price","label-for":"mc-price-"+a}},[r("b-form-input",{attrs:{type:"number",id:"mc-price-"+a,placeholder:"Price"},model:{value:e.price,callback:function(r){t.$set(e,"price",r)},expression:"item.price"}}),t._v(" "),r("error",{attrs:{error:t.error["standard_charges."+a+".price"]}})],1)],1),t._v(" "),r("b-col",{staticClass:"mb-50",attrs:{md:"2"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-0 mt-md-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.removeItem(a,"standard_charges")}}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}})],1)],1)],1)})),t._v(" "),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"my-2",attrs:{type:"submit",variant:"primary"},on:{click:t.addCharges}},[t._v("\n                    Add Charges\n                ")])],1)],1),t._v(" "),t.form.extra_charges.length>0?[r("hr"),t._v(" "),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("h3",[t._v("Extra Charges")])])],1),t._v(" "),t._l(t.form.extra_charges,(function(e,a){return r("b-row",{key:a},[r("b-col",{attrs:{md:"5"}},[r("b-form-group",{attrs:{label:"Charge Type","label-for":"mc-charge-type-id"}},[r("x-tag-input",{attrs:{resource:"/api/search/project_charge_types?project_id="+t.form.project_id+"&charge_type=2",value:e.project_charge_type,column:"title",name:"title"},on:{input:function(e){return t.onProjectChargeTypeUpdate(e,a,"extra_charges")}}}),t._v(" "),r("error",{attrs:{error:t.error["extra_charges."+a+".project_charge_type_id"]}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"5"}},[r("b-form-group",{attrs:{label:"Price","label-for":"mc-price-"+a}},[r("b-form-input",{attrs:{type:"number",id:"mc-price-"+a,placeholder:"Price"},model:{value:e.price,callback:function(r){t.$set(e,"price",r)},expression:"item.price"}}),t._v(" "),r("error",{attrs:{error:t.error["extra_charges."+a+".price"]}})],1)],1),t._v(" "),r("b-col",{staticClass:"mb-50",attrs:{md:"2"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-0 mt-md-2",attrs:{variant:"outline-danger"},on:{click:function(e){return t.removeItem(a,"extra_charges")}}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}})],1)],1)],1)}))]:t._e(),t._v(" "),r("b-row",[r("b-col",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{type:"submit",variant:"primary"},on:{click:t.formSubmitted}},[t._v("\n                    Submit\n                ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{type:"reset",variant:"outline-secondary",to:{path:t.resource}}},[t._v("\n                    Cancel\n                ")])],1)],1)],2)],1):t._e()}),[],!1,null,"80074c9c",null);e.default=I.exports},sejE:function(t,e,r){"use strict";var a={props:{error:{type:Array,default:function(){return[]}}}},i=r("KHd+"),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.error?e("small",{staticClass:"text-danger"},[this._v(this._s(this.error[0]))]):this._e()}),[],!1,null,null,null);e.a=o.exports},uvMX:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r("hbd/"),i=r("f9f4"),o=r("1w2d"),n={data:function(){return{form:{},error:{},isProcessing:!1,show:!1}},computed:{mode:function(){return this.$route.meta.mode},isEdit:function(){return"edit"===this.mode}},methods:{errors:function(t){return this.error[t]?"error-bg":""},success:function(){this.$toast({component:o.a,props:{title:"Success",icon:"BellIcon",text:this.message,variant:"success"}})},deleted:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.message;this.$toast({component:o.a,props:{title:"Deleted",icon:"BellIcon",text:t,variant:"danger"}})},clearErrors:function(){this.error={}},handleError:function(t){422===t.response.status&&(this.error=t.response.data.errors)},destroy:function(t,e,r){this.clearErrors(),Object(a.a)("DELETE",t,r).then((function(t){var r=t.data;r.saved&&e(r)})).catch(this.handleError)},submit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;this.clearErrors(),"file"==t&&(this.form=Object(i.a)(this.form)),Object(a.a)(this.method,this.store,this.form).then((function(t){var r=t.data;r.saved&&e(r)})).catch(this.handleError)},submitMultipartForm:function(t,e){var r=this;this.clearErrors(),Object(a.a)(this.method,this.store,Object(i.a)(this.form)).then((function(t){var r=t.data;return!!r.saved&&(e(r),!0)})).catch((function(t){return r.handleError(t),!1}))}}}},wWPa:function(t,e,r){"use strict";var a=r("C2Uh"),i=r("hbd/"),o=r("1w2d"),n={name:"XTagInput",model:{prop:"value",event:"input"},props:{resource:String,column:String,tabindex:{default:0},positionRelative:{type:Boolean,default:!1},value:[Object,Array],disabled:{default:!1,type:Boolean},multiple:{default:!1,type:Boolean},removable:{default:!1,type:Boolean},name:{default:"value"},keyIndex:String,relation:{type:String,default:""},params:{type:[Object,Array],default:function(){return{}}}},data:function(){return{isLoading:!1,showDropdown:!1,selectIndex:-1,search:"",options:[]}},computed:{availableOptions:function(){return this.options}},methods:{removeVal:function(){this.$emit("input",{id:null})},remove:function(t,e){var r=this.value;r.splice(e,1),this.$emit("input",r)},onSearch:function(t){this.search=event.target.value,this.fetch(this.search)},fetch:Object(a.debounce)((function(t){var e=this;this.isLoading=!0;var r={q:t,column:this.column};Object(i.b)("".concat(this.resource),r).then((function(t){t.data&&e.$set(e.$data,"options",t.data.data),e.isLoading=!1}))}),300),onUpKey:function(t){var e=this;this.disabled||(this.selectIndex>0?(this.selectIndex--,this.selectIndex>4&&this.$nextTick((function(){e.$refs.items.scrollTop-=28}))):(this.selectIndex=this.options.length-1,this.$nextTick((function(){e.$refs.items.scrollTop=28*e.selectIndex}))))},onDownKey:function(t){var e=this;this.disabled||(this.showDropdown||this.open(),this.options.length-1>this.selectIndex?(this.selectIndex++,this.selectIndex>4&&this.$nextTick((function(){e.$refs.items.scrollTop+=28}))):(this.selectIndex=0,this.$nextTick((function(){e.$refs.items.scrollTop=0}))))},onKeydownMain:function(t){this.open()},select:function(t){if(this.multiple){var e=this.value;if(0===this.value.length){var r={};""==this.relation?e.push(t):(r["".concat(this.keyIndex)]=t.id,r["".concat(this.relation)]=t,e.push(r)),this.$emit("input",e)}else{for(var a=!1,i=0;i<e.length;i++)t.id===e[i][this.keyIndex]&&(this.$toast({component:o.a,props:{title:"Alert",icon:"BellIcon",text:"Option already selected above",variant:"danger"}}),a=!0);if(a)return;var n={};""==this.relation?e.push(t):(n["".concat(this.keyIndex)]=t.id,n["".concat(this.relation)]=t,e.push(n)),this.$emit("input",e)}}else this.$emit("input",t);this.close()},onEnter:function(){if(!(this.disabled||this.selectIndex<0)){var t=this.options[this.selectIndex];this.select(t)}},onBlur:function(){this.close()},onMouse:function(t){this.selectIndex=t},close:function(){this.showDropdown=!1,this.selectIndex=-1,this.search="",this.options=[]},open:function(){var t=this;this.showDropdown=!0,this.$nextTick((function(){t.$refs.search.focus(),t.options.length||t.fetch()}))},toggle:function(){this.disabled||(this.showDropdown?this.close():this.open())}}},s=r("KHd+"),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"select-form"},[r("div",{ref:"toggle",staticClass:"select-input",attrs:{tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled},on:{click:t.toggle,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onKeydownMain.apply(null,arguments))}}},[t.multiple?r("div",{staticClass:"select-text"},[t.value&&t.value.length?r("div",{staticClass:"select-tags mb-1"},t._l(t.value,(function(e,a){return r("div",{staticClass:"tag tag-primary"},[r("span",{staticClass:"tag-text"},[t._v("\n                      "+t._s(""===t.relation?e[t.name]:e[t.relation][t.name])+"\n                    ")]),t._v(" "),r("feather-icon",{attrs:{icon:"XIcon",size:"12"},on:{mousedown:function(r){return r.preventDefault(),t.remove(e,a)}}})],1)})),0):t._e()]):r("div",{staticClass:"select-text"},[t._v("\n            "+t._s(t.value&&t.value[t.name]?t.value[t.name]:"Select")+"\n        ")]),t._v(" "),t.removable&&t.value&&t.value.id?r("span",{staticClass:"select-remove icon icon-trash-a",on:{click:t.removeVal}}):r("span",{class:["select-icon icon icon-arrow-"+(t.showDropdown?"up-b":"down-b")]})]),t._v(" "),t.showDropdown?r("div",{staticClass:"select-dropdown",style:!0===t.positionRelative?"position:relative":""},[r("div",{staticClass:"select-inner"},[r("div",{staticClass:"select-search-wrap"},[r("input",{ref:"search",staticClass:"select-search",attrs:{type:"text",placeholder:"Search..."},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onDownKey.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.onUpKey.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.onBlur.apply(null,arguments)}],input:t.onSearch,blur:t.onBlur}})]),t._v(" "),r("div",{ref:"items",staticClass:"select-items"},t._l(t.availableOptions,(function(e,a){return r("div",{class:["select-item",t.selectIndex===a?"select-active":""],on:{mouseover:function(e){return e.preventDefault(),t.onMouse(a)},mousedown:function(r){return r.preventDefault(),t.select(e)}}},[r("span",[t._v(t._s(e[t.name]))])])})),0)])]):t._e()])}),[],!1,null,null,null);e.a=c.exports}}]);