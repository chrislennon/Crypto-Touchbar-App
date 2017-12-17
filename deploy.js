var ghpages = require('gh-pages');

ghpages.publish('.', {
    src: ["**/*",".nojekyll"]
}, function(err) {});