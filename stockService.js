let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json())

const products = [
	{ id: 1, stock: 5 },
	{ id: 2, stock: 3 },
	{ id: 3, stock: 2 },
	{ id: 4, stock: 10 },
	{ id: 5, stock: 6 },
	{ id: 6, stock: 5 }
];

app.get('/getStock/:id', (req, res) => {
	let item;

	products.forEach((i) => {
		if (i.id === req.params.id) {
			item = i;
		}
	});

	if (item) res.send(item.stock);
	else res.send('no items with that id.')
};

