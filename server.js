var http = require('http');
var querystring = require('querystring');
var fs = require("fs");
var url = require("url");
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
	 
    // 解析参数
    //body = querystring.parse(body);
	var pathname = url.parse(req.url).pathname;
	//var str = JSON.stringify(body);
	if(pathname == "/mt5")
	{
			fs.writeFile('trade.txt', body,  function(err) {
			if(err) console.log(err);
			});
			console.log("数据写入成功！");
	}
	if(pathname == "/query")
	{
		var data = fs.readFileSync('trade.txt');
		res.write(data);
		console.log("数据读取为：",data.toString());
	}
	if(pathname == "/mt4")
	{
		console.log(body);
	}


    // 设置响应头部信息及编码
    //res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.end();
  });
}).listen(8888);