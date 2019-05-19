var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
// prompt for info about the item being put up for auction
inquirer
    .prompt([
    {
        name: "item",
        type: "input",
        message: "What is the ID of the product that you would like to purchase?"
    },
    {
        name: "category",
        type: "input",
        message: "What category would you like to place your auction in?"
    },
    {
        name: "startingBid",
        type: "input",
        message: "What would you like your starting bid to be?",
        validate: function(value) {
        if (isNaN(value) === false) {
            return true;
        }
        return false;
        }
    }
    ])
    .then(function(answer) {
    // when finished prompting, insert a new item into the db with that info
    connection.query(
        "INSERT INTO auctions SET ?",
        {
        item_name: answer.item,
        category: answer.category,
        starting_bid: answer.startingBid || 0,
        highest_bid: answer.startingBid || 0
        },
        function(err) {
        if (err) throw err;
        console.log("Your auction was created successfully!");
        // re-prompt the user for if they want to bid or post
        start();
        }
    );
    });
}