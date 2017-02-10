var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping-demo');

var Product = require('../models/product');

var products = [
  new Product({
    imagePath: 'http://www.say-10.com/wp-content/uploads/2013/10/orchidgatefold.jpg',
    title: 'Orchid - Gatefold LP',
    description: 'The third and final album.',
    price: 15
  }),
  new Product({
    imagePath: 'https://img.discogs.com/t1-dbzZw3fwKJg0lWYYBXwJGErw=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-615770-1321271214.jpeg.jpg',
    title: 'PG. 99 & City of Caterpillar - A Split Personality',
    description: 'Document #9. Same people playing different music',
    price: 10
  }),
  new Product({
    imagePath: 'https://img.discogs.com/y-BnFnANb_3nEeEI5jknRo8AbqM=/fit-in/600x521/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1170925-1478395747-1347.jpeg.jpg',
    title: 'Circle Takes the Square - As the Roots Undo',
    description: 'First pressing of the classic album',
    price: 10
  }),
  new Product({
    imagePath: 'https://img.discogs.com/XOuxsQSExiwrG4ZiwUVhq7K2WeQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2859076-1304324731.jpeg.jpg',
    title: '1905 - Voice',
    description: 'Early 00s DC anarcho-punk',
    price: 15
  }),
  new Product({
    imagePath: 'https://img.discogs.com/MnPlpY4-KR52_DupPN2zobJaiqo=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3162047-1403610274-8375.jpeg.jpg',
    title: 'I Hate Myself - 10 Songs',
    description: 'Was this band a joke? Who knows?',
    price: 15,
  }),
  new Product({
    imagePath: 'https://img.discogs.com/8vFIDmWWV3omn9A-pQ65g3kNstk=/fit-in/360x360/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1347777-1211654395.jpeg.jpg',
    title: 'Small Brown Bike - Dead Reckoning',
    description: 'This one is now a classic. Feel old yet?',
    price: 15
  })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
