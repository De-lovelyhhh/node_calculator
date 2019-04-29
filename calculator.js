let http = require("http")
let url = require("url")

http.createServer(function (request, response) {
    let param = url.parse(request.url, true).query
    let number1 = parseFloat(param.number1)
    let number2 = parseFloat(param.number2)
    let op = param.op
    let result
    if(number1 && number2 && op){
        if(op === '+') result = number1 + number2
        else if(op === '-') result = number1 - number2
        else if(op === '*') result = number2 * number1
        else if(op === '/') result = number1 / number2
        response.write('结果是：' + result)
    }else{
        response.write("传入参数错误")
    }
    response.end()
}).listen(3000, '127.0.0.1')
