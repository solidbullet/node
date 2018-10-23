var urlencode = require('urlencode');
str = urlencode('苏千')
console.log(str); // default is utf8
//console.log(urlencode('苏千', 'gbk')); // '%CB%D5%C7%A7'
str1 = "https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5";

console.log(urlencode.decode(str1, 'utf8')); // '苏千'

// parse gbk querystring
//urlencode.parse('nick=%CB%D5%C7%A7', {charset: 'gbk'}); // {nick: '苏千'}


