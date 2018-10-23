var request = require('request');
var fs = require("fs");
var qs = require("querystring");

var requestData=qs.stringify({'username':'solidbullet','password':'oPMwxYo/i1AixvB3M73EZeZNLRQHP0IpwrrdSWXGfIVxfkio79UuZWcpljd/V1cGop1WQsDgwiTri86VwNZuSvAYKhbuw1Up3fVm4fxIPQJKtK6j8CWHuduno2eqjlBk+pI0rWEcNcgCzMoDHRW0DKcyohQi72rGAULCILdwKL8=','u':'https://www.baidu.com/','tpl':'mn'});
console.log(requestData);
var options = {
    url: 'https://www.baidu.com//v2/api/?login',
	method:"post",
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36',
		'Set-Cookie':'BAIDUID=A1FEB7A7AE6CA201A59541D329D1013B:FG=1; BIDUPSID=A1FEB7A7AE6CA201A59541D329D1013B; PSTM=1540254623; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; HOSUPPORT=1; UBI=fi_PncwhpxZ%7ETaKAYWUX1zqX8UZRx71Ce4T17cGPParTQzFOp%7EptNdqxa3Q1FBDP9Qdv%7EYcSbbgX90RVLhV; USERNAMETYPE=1; SAVEUSERID=838a3672dc7a8561493f006a9c7158; HISTORY=963dfb94f4117765799694013367acb57da048; delPer=0; PSINO=5; ZD_ENTRY=baidu; BDRCVFR[feWj1Vr5u3D]=mk3SLVN4HKm; H_PS_PSSID=1444_21084_18559_22159'
    },
	body:requestData
};
function callback(error, response, body) {
	console.log(error);
    if (!error && response.statusCode == 200) {
        //var info = JSON.parse(body);
        console.log(response.headers);
		//console.log(body);
        //console.log(info.forks_count + " Forks");
		console.log("准备写入文件");
		fs.writeFile('input.txt', body,  function(err) {
		   if (err) {
			   return console.error(err);
		   }
		   console.log("数据写入成功！");
		});
    }
}
request(options, callback);

