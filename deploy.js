var ghpages = require('gh-pages');

ghpages.publish('.', {
    src: ["**/*",".nojekyll"],
    message: 'Auto-generated commit'
}, function(err) {
    if (err) console.log(err);
    else console.log('Published!');
});