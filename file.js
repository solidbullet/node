var fs = require("fs");


   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('trade.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
	var json = JSON.parse(data.toString());
      console.log("异步读取文件数据: " + json.name);
   });

   
   	// var pathname = url.parse(request.url).pathname;
	// //var str = JSON.stringify(body);
	// if(pathname == "/mt5")
	// {
		// if(body == "query")
		// {
			// var data = fs.readFileSync('trade.txt');
			// res.write(data);
		// }else
		// {
			// fs.writeFile('trade.txt', body,  function(err) {
			// if(err) console.log(err);
			// });
			// console.log("数据写入成功！");
		// }
	// }
	// if(pathname == "/mt4")
	// {
		// console.log(body);
	// }
