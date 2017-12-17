var ghpages = require('gh-pages');

ghpages.publish('.', {
    src: ["**/*",".nojekyll"],
    message: 'Auto-generated commit'
}, function(err) {
    console.log(err);
});