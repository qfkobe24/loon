/*
[rewrite_local]
#修改回源信息
^https:\/\/i\.at\.qq\.com\/pay\/memberinfo url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/wxts/wxts.js

[mitm]
hostname = i.at.qq.com,

*/

let obj = JSON.parse($response.body);
console.log(obj);
obj = {
  ...obj,
  data: {
    ...obj.data,
    nickname: "哈哈哈"
  }
 };

$done({body: JSON.stringify(obj)});
