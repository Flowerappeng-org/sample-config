var fs = require('fs')
var file = 'ejabberd.yml';

var text = '';
var subdomain = process.env.SUBDOMAIN ?? 'msg-';
var domain = process.env.DOMAIN ?? 'platform-1.runwater.app';
for (let i = 0; i < process.env.TOTAL_TENANTS; i++) {
    text += '  - ' + subdomain + i + "." + domain + "\n";
}
var final =  "hosts:\n" + text;

fs.readFile(file, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }
  var result = data.replace(/entry/g, final);

  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
