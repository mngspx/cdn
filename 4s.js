var _spx_today = new Date();
var _spx_date = 'd'+_spx_today.getFullYear()+(_spx_today.getMonth()+1)+_spx_today.getDate();
var spx_script = document.createElement('script');
spx_script.src = "https://mngspx.github.io/cdn/4s-ads.js?t="+_spx_date;
document.body.appendChild(spx_script);
