const asusproducts = [
	{
		name: "ROG",
		price: "100"
	},

	{
		name: "Strix",
		price: "100"
	},

	{
		name: "TUF",
		price: "100"
	}
];

const acerproducts = [
	{
		name: "Predator",
		price: "100"
	},

	{
		name: "Nitro",
		price: "100"
	},

	{
		name: "Aspire",
		price: "100"
	}
];

const lenovoproducts = [
	{
		name: "Legion",
		price: "100"
	},

	{
		name: "Ideapad",
		price: "100"
	},

	{
		name: "LOQ",
		price: "100"
	}
];

function showAsus() {

	let container = document.getElementById("Container");

	container.innerHTML = " ";

	asusproducts.forEach(function(product) {

		let productDiv = document.createElement("div");

		productDiv.classList.add("myProduct");

		productDiv.innerHTML = 
			"<h2>" + product.name + "</h2>" + 
			"<p>Price: " + product.price + "</p>";

		container.appendChild(productDiv);
	});
}

function showAcer() {

	let container = document.getElementById("Container");

	container.innerHTML = " ";

	acerproducts.forEach(function(product) {

		let productDiv = document.createElement("div");

		productDiv.classList.add("myProduct");

		productDiv.innerHTML = 
			"<h2>" + product.name + "</h2>" + 
			"<p>Price: " + product.price + "</p>";

		container.appendChild(productDiv);
	});
}

function showLenovo() {

	let container = document.getElementById("Container");

	container.innerHTML = " ";

	lenovoproducts.forEach(function(product) {

		let productDiv = document.createElement("div");

		productDiv.classList.add("myProduct");

		productDiv.innerHTML = 
			"<h2>" + product.name + "</h2>" + 
			"<p>Price: " + product.price + "</p>";

		container.appendChild(productDiv);
	});
}

function showRemove() {
		let container = document.getElementById("Container");

	container.innerHTML = " ";
}