(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2ByI":function(e,t,a){var o=a("yDnk");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(e.exports=o.locals)},Hp5L:function(e,t,a){"use strict";a("2ByI")},QuON:function(e,t,a){"use strict";a.r(t);var o=a("K3NU"),r=a("3uf8"),n=a("FN9Z"),i=a("TY3m"),l=a("zRsW"),s=a("pFee"),d=a("yK0U"),u=a("WFXy"),c=a("qreG"),b=a("vZyo"),v={components:{BLink:r.a,BNavbarNav:n.a,Bookmarks:i.a,Locale:l.a,SearchBar:s.a,DarkToggler:d.a,CartDropdown:u.a,NotificationDropdown:c.a,UserDropdown:b.a},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},p=a("KHd+"),f=Object(p.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-xl-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),e._v(" "),a("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[a("bookmarks")],1),e._v(" "),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("locale"),e._v(" "),a("dark-Toggler",{staticClass:"d-none d-lg-block"}),e._v(" "),a("search-bar"),e._v(" "),a("cart-dropdown"),e._v(" "),a("notification-dropdown"),e._v(" "),a("user-dropdown")],1)],1)}),[],!1,null,null,null).exports,y=a("q7AM"),m=a("ltbd"),g=a("lr65"),w=a("oW/6"),h=a("2wS6"),k=a("Ox9B"),C=a("MSEG"),x=a("NmTI"),_=a("ZU4Y"),M={watch:{$route:function(){this.$store.state.app.windowWidth<_.a.xl&&(this.isVerticalMenuActive=!1)}}},V={components:{AppNavbarVerticalLayout:f,AppFooter:y.a,VerticalNavMenu:C.a,BNavbar:g.a,LayoutContentRendererLeftDetached:k.a,LayoutContentRendererLeft:h.a,LayoutContentRendererDefault:w.a},mixins:[M],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(m.a)(),t=e.routerTransition,a=e.navbarBackgroundColor,r=e.navbarType,n=e.footerType,i=e.isNavMenuHidden,l=Object(x.a)(r,n),s=l.isVerticalMenuActive,d=l.toggleVerticalMenuActive,u=l.isVerticalMenuCollapsed,c=l.layoutClasses,b=l.overlayClasses,v=l.resizeHandler,p=l.navbarTypeClass,f=l.footerTypeClass;return v(),window.addEventListener("resize",v),Object(o.onUnmounted)((function(){window.removeEventListener("resize",v)})),{isVerticalMenuActive:s,toggleVerticalMenuActive:d,isVerticalMenuCollapsed:u,overlayClasses:b,layoutClasses:c,navbarTypeClass:p,footerTypeClass:f,routerTransition:t,navbarBackgroundColor:a,isNavMenuHidden:i}}},A=(a("Hp5L"),{components:{LayoutVertical:Object(p.a)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[e._t("navbar",(function(){return[a("app-navbar-vertical-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,navbarBackgroundColor:e.navbarBackgroundColor,navbarTypeClass:e.navbarTypeClass.concat(["header-navbar navbar navbar-shadow align-items-center"])})],2),e._v(" "),e.isNavMenuHidden?e._e():a("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),e._v(" "),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),e._v(" "),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),e._v(" "),a("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[a("app-footer")]}))],2),e._v(" "),e._t("customizer")],2)}),[],!1,null,null,null).exports,Navbar:a("kMse").a},data:function(){return{}}}),T=Object(p.a)(A,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout-vertical",{scopedSlots:this._u([{key:"navbar",fn:function(e){var a=e.toggleVerticalMenuActive;return[t("navbar",{attrs:{"toggle-vertical-menu-active":a}})]}}])},[t("router-view")],1)}),[],!1,null,null,null);t.default=T.exports},yDnk:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".bordered-layout .header-navbar{-webkit-box-shadow:none}[dir] .bordered-layout .header-navbar{-webkit-box-shadow:none;box-shadow:none}[dir] .bordered-layout .header-navbar.floating-nav{border:1px solid #ebe9f1}[dir] .bordered-layout .header-navbar.fixed-top{border-bottom:1px solid #ebe9f1;background:#f8f8f8}.bordered-layout .main-menu{-webkit-box-shadow:none}[dir] .bordered-layout .main-menu{-webkit-box-shadow:none;box-shadow:none}[dir=ltr] .bordered-layout .main-menu{border-right:1px solid #ebe9f1}[dir=rtl] .bordered-layout .main-menu{border-left:1px solid #ebe9f1}[dir] .bordered-layout .main-menu.menu-light .navigation>li.open:not(.menu-item-closing)>a,[dir] .bordered-layout .main-menu.menu-light .navigation>li.sidebar-group-active>a{background:#ededed}.bordered-layout .dropdown-menu{-webkit-box-shadow:none}[dir] .bordered-layout .dropdown-menu{border:1px solid #ebe9f1!important;-webkit-box-shadow:none;box-shadow:none}[dir] .bordered-layout .main-menu,[dir] .bordered-layout .main-menu .navigation{background:#f8f8f8}.bordered-layout .bs-stepper.wizard-modern .bs-stepper-content,.bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps),.bordered-layout .card{-webkit-box-shadow:none}[dir] .bordered-layout .bs-stepper.wizard-modern .bs-stepper-content,[dir] .bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps),[dir] .bordered-layout .card{border:1px solid #ebe9f1;-webkit-box-shadow:none;box-shadow:none}.bordered-layout .footer,[dir] .bordered-layout .footer{-webkit-box-shadow:none!important}[dir] .bordered-layout .footer{box-shadow:none!important}[dir] .bordered-layout .footer-fixed .footer{border-top:1px solid #ebe9f1}",""])}}]);