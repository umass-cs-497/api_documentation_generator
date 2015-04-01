
var aglio = require('aglio');
var fs = require('fs')

/*
 * GET home page.
 */

exports.index = function(req, res)
{
 
 var file = "apiV1"

 console.log("Getting Index");

fs.readFile('./files/source/' + file + '.md', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  // Render a blueprint with a template by name
var blueprint = data;

var options = {
  template : 'slate-multi',
  condenseNav : false

};

console.log("Rendering...")

aglio.render(blueprint, options, function (err, html, warnings) {
    if (err) return console.log(err);
    if (warnings) console.log(warnings);

    console.log("Writing html file...")
    fs.writeFile('./files/output/' + file + '.html', html, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
		//res.redirect('/output/' + file + '.html');

		res.send(html);
    }
}); 

});
});



// Render a blueprint with a custom template file
/*var customTemplate = '/path/to/my-template.jade';
aglio.render(blueprint, customTemplate, function (err, html, warnings) {
    if (err) return console.log(err);
    if (warnings) console.log(warnings);

    console.log(html);
});*/


// Pass custom locals along to the template, for example
// the following gives templates access to lodash and async
/*var options = {
    template: '/path/to/my-template.jade',
    locals: {
        _: require('lodash'),
        async: require('async')
    }
};

aglio.render(blueprint, options, function (err, html, warnings) {
   if (err) return console.log(err);
   if (warnings) console.log(warnings);

   console.log(html);
});*/

};