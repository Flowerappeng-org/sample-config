var fs = require('fs')
var file = 'ejabberd.yml';

var water_admin_user_account = process.env.WATER_ADMIN_USER_ACCOUNT ?? "msg-0@msg-0.platform-1.runwater.app";

fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/admin_user/g, water_admin_user_account);

  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
