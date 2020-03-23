/** POST request node.js request
 *
 */

var request = require('request');
var fs = require('fs');
var options = {
    'method': 'POST',
    'url': 'http://18.144.71.78:8080/check_liveness',
    'headers': {
        'TOKEN': 'AU10TIX',
        'Content-Type': 'multipart/form-data; boundary=--------------------------828039219685315929384416'
    },
    formData: {
        'file': {
            'value': fs.createReadStream('/Users/noam.mizrachi/Desktop/backgrounds/0D0EED21FC66440B8801C60A33E36028_photo.jpg'),
            'options': {
                'filename': '/C:/Users/noam.mizrachi/Desktop/backgrounds/0D0EED21FC66440B8801C60A33E36028_photo.jpg',
                'contentType': null
            }
        }
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
//https://app.logz.io/#/dashboard/data-sources/nodejs-winston
