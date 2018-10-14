/*!
 * Bootstrap Off-Canvas Nav (http://github.com/marcandrews/bootstrap-off-canvas-nav)
 * Copyright (c) 2015 Marc Andrews
 * Licensed under the MIT license
 */

$(function(){function e(){var e={},i=!0,s=$("#myModal");s.find(".form-control").each(function(){var t=$(this),n=t.parents(".input-group:first"),r=t.data("submit"),s=t.data("required");s&&$.trim(t.val()).length==0&&(i=!1,n.addClass("error")),e[r]=$.trim(t.val())}),i&&s.find(".form-control[data-check]").each(function(){var e=$(this),t=e.parents(".input-group:first"),o=$.trim(e.val()),u=e.data("check");if(u){if("phone"==u&&!n(o))return i=!1,t.addClass("error"),s.find(".form-failure").text("请输入合法手机号码"),!1;if("email"==u&&!r(o))return i=!1,t.addClass("error"),s.find(".form-failure").text("请输入合法邮箱"),!1}}),i&&($("#submitBtn").attr("disabled","true"),$.post("contact.php",e,function(e){$("#submitBtn").attr("disabled","false");var n=JSON.parse(e).result;n?t(!0):s.find(".form-failure").text("未知错误，请重试。")}))}function t(e){var t=$("#myModal");t.find(".form-group>.input-group").removeClass("error"),t.find(".form-group .form-control").val(""),t.find(".form-failure").empty(),e?t.find(".modal-dialog").addClass("rotate"):t.find(".modal-dialog").removeClass("rotate")}function n(e){var t=/^1[345789]\d{9}$/;return t.test(e)}function r(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}$("#submitBtn").click(function(){e()}),$("#myModal").find(".form-control").each(function(){var t=$(this),n=t.parents(".input-group:first");t.keydown(function(){n.removeClass("error")}),t.keyup(function(t){t.which==13&&e()}),t.focus(function(){n.addClass("active")}),t.blur(function(){n.removeClass("active"),t.data("required")&&t.val().length==0&&n.addClass("error")})}),$("#myModal").on("hidden.bs.modal",function(){t(!1)})}),$(function(){$(window).width()<768&&$(".navbar .navbar-toggle, #navbar ul>li>a").click(function(){$("body").toggleClass("out"),browser.isIE()&&($("body").hasClass("out")?$(".navbar .navbar-collapse").css("left",0):$(".navbar .navbar-collapse").css("left",-250))})}),$(document).click(function(e){!$(e.target).closest(".navbar-collapse, button.navbar-toggle").length&&$("body").hasClass("out")&&(e.preventDefault(),$(".navbar .navbar-toggle").trigger("click"))}).keyup(function(e){e.keyCode==27&&$("body").hasClass("out")&&$(".navbar .navbar-toggle").trigger("click")});var browser={info:{ie:1,firefox:2,chrome:3,safari:4,opera:5},isIE:function(e){return this.detect(this.info.ie,e)},isFirefox:function(e){return this.detect(this.info.firefox,e)},isChrome:function(e){return this.detect(this.info.chrome,e)},isSafari:function(e){return this.detect(this.info.safari,e)},isOpera:function(e){return this.detect(this.info.opera,e)},detect:function(e,t){var n=navigator.userAgent.toLowerCase();if(e===this.info.ie){var r=/msie [\d.]+/i.test(n)||/rv:[\d.]+\) like gecko/i.test(n);if(!r)return r;if(t){var i=n.match(/msie ([\d.]+)/i)||n.match(/rv:([\d.]+)\) like gecko/i);return r&&parseInt(i[1])>=t}return r}if(e===this.info.firefox){var r=/firefox\/[\d.]+/i.test(n);if(!r)return r;if(t){var i=n.match(/firefox\/([\d.]+)/i);return r&&parseInt(i[1])>=t}return r}if(e===this.info.chrome){var r=/chrome\/[\d.]+/i.test(n);if(!r)return r;if(t){var i=n.match(/chrome\/([\d.]+)/i);return r&&parseInt(i[1])>=t}return r}if(e===this.info.safari){var r=/version\/[\d.]+.*safari/i.test(n);if(!r)return r;if(t){var i=n.match(/version\/([\d.]+).*safari/i);return r&&parseInt(i[1])>=t}return r}if(e===this.info.opera){var r=/opera.\/[\d.]+/i.test(n)||/opr\/[\d.]+/i.test(n);if(!r)return r;if(t){var i=n.match(/opera.\/([\d.]+)/i)||n.match(/opr\/([\d.]+)/i);return r&&parseInt(i[1])>=t}return r}return(new RegExp(e)).test(n)}};