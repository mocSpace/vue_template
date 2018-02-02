var APP = {
  NAME: "Vue_",
  VERSION: "1.0.0"
};

// // 保留小数后两位
// function toDecimal(num) {
//   var f = parseFloat(num);
//   var result = (f.toString()).indexOf(".");
//   if (result != -1) {
//     return f.toFixed(2);
//   } else {
//     return f.toString() + ".00";
//   }
// }

function isEmptyObject(obj) {
  if (!obj) return true;
  for (var name in obj) return false;
  return true;//返回true，为空对象
}

//获取cookie
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

//设置cookie,增加到vue实例方便全局调用
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//删除cookie
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


//本地存储localStorage、sessionStorage
//获取
function getStorage(item) {
  if (!localStorage.getItem(item)) return null;
  return JSON.parse(localStorage.getItem(item));
  // if (!sessionStorage.getItem(item)) return null;
  // return JSON.parse(sessionStorage.getItem(item));
}
//设置
function setStorage(item, obj) {
  localStorage.setItem(item, JSON.stringify(obj));
  // sessionStorage.setItem(item, JSON.stringify(obj));
}
//删除
function delStorage(item) {
  localStorage.removeItem(item);
  // sessionStorage.removeItem(item);
}
//链接地址获取参数
function getQueryByURL(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var str = window.location.hash;   // hash #后面的值
  var arr = str.split("?");
  if (arr && arr.length == 2) {
    var r = arr[1].substr(0).match(reg);
    if (r != null) return unescape(r[2]);
  }
  return null;
}

// function isLogin() {
//   var appUser = getStorage("appUser");
//   return !(!appUser || !appUser.userId || !appUser.tokenId);
// }




