const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const finalPrice = (price,discount) => +toThousand((price - (discount * price / 100)).toFixed(0))

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products",{
			products,
			toThousand,
			finalPrice
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(producto => +producto.id === +req.params.id)
		console.log(product)
		return res.render("detail",{
			product,
			finalPrice,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.send("formulario de creacion")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.send("formulario de edicion")
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send("destruiste un producto :o")
	}
};

module.exports = controller;