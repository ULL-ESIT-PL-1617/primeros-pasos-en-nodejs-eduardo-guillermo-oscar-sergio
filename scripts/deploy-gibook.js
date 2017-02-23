var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '/../txt'), {
    branch: 'master',
    repo: "https://git.gitbook.com/alu0100881677/primeros-pasos-en-nodejs-eduardo-guillermo-oscar.git"
  }, function(err) {
     console.log(err);
});
