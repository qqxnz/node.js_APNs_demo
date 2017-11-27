"use strict";

const apn = require("apn");

// token 数组
let tokens = ['2eaffcef05dd6b12037d21a5c94c233326be39698dad45f29a6f002f4783128d'];

let service = new apn.Provider({
  cert: "./apns-dev-cert.pem",
  key: "./apns-dev-key.pem",
  gateway: "gateway.sandbox.push.apple.com",
  // gateway: "gateway.push.apple.com"; //线上地址
  // port: 2195, //端口
  passphrase: "123456" //pem证书密码
});

let note = new apn.Notification();
note.badge = 11;//桌面图片圆点数字
note.sound = "ping.aiff";//提示声音类型
note.alert = "\uD83D\uDCE7 \u2709 你是不是收到了新的消息!!";//提示消息
note.payload = {'messageFrom': 'John Appleseed'};//推送的数据
note.topic = "com.qqxnz.chatTestApp";//appid


console.log(`Sending: ${note.compile()} to ${tokens}`);

service.send(note, tokens).then( result => {
  console.log(result);
    // console.log("sent:", result.sent.length);
    // console.log("failed:", result.failed.length);
    // console.log(result.failed);
});


service.shutdown();
