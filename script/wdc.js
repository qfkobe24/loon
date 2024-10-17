let obj = JSON.parse($response.body);
console.log(obj);
obj = {
  ...obj,
  data: {
    ...obj.data,
    nickname: "哈哈哈"
  }
 };

$done({
  body: JSON.stringify(obj)
});
