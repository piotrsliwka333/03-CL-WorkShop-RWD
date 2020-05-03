document.addEventListener('DOMContentLoaded',function () {
	const productQuantityInput = document.querySelector('.products-quantity-input');
	const productPlaceToInner = document.querySelector('.products-quantity');
	const productTimes = document.querySelector('.product-times');
	const productConverter = document.querySelector('.product-converter');
	const productsSum = document.querySelector('.products-sum');


	const estimatedOrdersInput = document.querySelector('.estimated-orders-month-input');
	const ordersPlaceToInner = document.querySelector('.orders-quantity');
	const ordersTimes = document.querySelector('.orders-times');
	const ordersConverter = document.querySelector('.orders-converter');
	const ordersSum = document.querySelector('.orders-sum');

	const bundleOption = document.querySelector('.bundle-option');
	const bundleName = document.querySelector('.bundle-name');
	const bundleSum = document.querySelector('.bundle-sum');

	const accountingCheckbox = document.getElementById('accounting');
	const accountingSum = document.querySelector('.accounting-sum');

	const rentalCheckbox = document.getElementById('rental');
	const terminalSum = document.querySelector('.terminal-sum');

	const total = document.querySelector('.total');
	const lem = document.querySelector('.total-value');

	let sum = 0;
	let numberArray =[];

	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;

	productQuantityInput.addEventListener('keyup', function (event) {
		productPlaceToInner.innerText = productQuantityInput.value;
		let productResult = parseInt(productQuantityInput.value) * 0.25;

		const check = productPlaceToInner.innerText;
		console.log(check.length);

		if (check.length <= 0) {
			productConverter.innerText = "";
			productTimes.innerText = "";
			productsSum.innerText = "";
			a = 0;

		}else {
			productConverter.innerText = "0.25$";
			productTimes.innerText = "*";
			productsSum.innerText = `${productResult}$`;
			a = productResult;
		}
		total.innerText = `$${a+b+c+d+e}`;
		console.log("Number a result:   " + a);
	});

	estimatedOrdersInput.addEventListener('keyup', function (event) {
		ordersPlaceToInner.innerText = estimatedOrdersInput.value;
		let orderResult = parseFloat(estimatedOrdersInput.value) * 0.50;

		console.log("orders" + orderResult);
		console.log("sum"+ sum);

		const check = ordersPlaceToInner.innerText; // string
		console.log(check.length);

		if (check.length <= 0) {
			ordersConverter.innerText = "";
			ordersTimes.innerText = "";
			ordersSum.innerText = "";

			b = 0;

		}else {
			ordersConverter.innerText = "0.50$";
			ordersTimes.innerText = "*";
			ordersSum.innerText = `$${orderResult}`;
			b = orderResult;

		}
		total.innerText = `$${a+b+c+d+e}`;
		console.log("Number b result:   " + b);
	});

	// let ifChecked = function(checkbox, placeToInnerText,value,variable) {
	// 	if (checkbox.checked === true) {
	// 		placeToInnerText.innerText = `${value}$`
	// 		variable = value;
	// 	} else {
	// 		placeToInnerText.innerText = "";
	// 		variable = 0;
	// 	}
	// }

	accountingCheckbox.addEventListener('click',function (event) {
		if (accountingCheckbox.checked === true) {
			accountingSum.innerText = "35$";
			c = 35;
		} else {
			accountingSum.innerText = "";
			c = 0;
		}
		total.innerText = `$${a+b+c+d+e}`;

	});

	rentalCheckbox.addEventListener('click',function (event) {
		if (rentalCheckbox.checked === true) {
			terminalSum.innerText = "5$";
			d = 5;
		} else {
			terminalSum.innerText = "";
			d = 0;
		}
		total.innerText = `$${a+b+c+d+e}`;

	})

	// selected
	bundleOption.addEventListener('click',function (event) {
		if (bundleOption.value === "basic") {
			bundleName.innerText = `${bundleOption.value}`;
			bundleSum.innerText = "0$";
			e = 0;

		} else if (bundleOption.value === "professional") {
			bundleName.innerText = `${bundleOption.value}`;
			bundleSum.innerText = "25$";
			e = 25;
		} else if (bundleOption.value === "premium") {
			bundleName.innerText = `${bundleOption.value}`;
			bundleSum.innerText = "60$";
			e = 60;
		}
		total.innerText = `$${a+b+c+d+e}`;

	})

});





