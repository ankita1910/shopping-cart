var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: "https://s-media-cache-ak0.pinimg.com/736x/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg",
		title: "Cartoon Jerry",
		description: "Chotasa chua, Exactly like chotu",
		price: 50
	}),
	new Product({
		imagePath: "https://s-media-cache-ak0.pinimg.com/736x/ce/5f/53/ce5f53437e291c48705428721406985c.jpg",
		title: "Cutie Tweety",
		description: "Smart, Intelligent, Exactly like Ankita",
		price: 100
	}),
	new Product({
		imagePath: "http://blog.oyuncakdenizi.com/wp-content/uploads/winnie-the-pooh-karakterleri.jpg",
		title: "Motu Pooh",
		description: "Bhukhad and motu Pooh, Exactly like Chiku",
		price: 40
	}),
	new Product({
		imagePath: "http://alltimevrecommendations.wdfiles.com/local--files/pc2000s/pc2000_gamecover_gothic.jpg",
		title: "Gothlic Video Game",
		description: "Awesome Game!!!",
		price: 10
	})
];
var done = 0;
for(var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}