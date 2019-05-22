var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"J21-Ldm47",
	database:"bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    itemPurchaseRequest();
  });

var itemPurchaseRequest = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var showProducts = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,15]
		});
		for(var i = 0; i < res.length; i++){
			showProducts.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(showProducts.toString());
		purchasePrompt();
	});
}

function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter ID of the item that you would like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many of the item do you want to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, quantityNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(quantityNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * quantityNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + quantityNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");

            //"UPDATE products SET stock_quantity = " + (SOME VARIABLE) + " WHERE item_id = " + ID

			connection.query("UPDATE products SET stock_quantity = " + (quantityNeeded) + " WHERE item_id = " + ID);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		itemPurchaseRequest();
	});
};
