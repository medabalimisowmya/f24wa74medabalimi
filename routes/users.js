var express = require('express');
var router = express.Router();

// Step 2: Initialize variables
let value = 0;
let total = 1;

router.get('/', function(req, res, next) {
  // Step 3: Modify value and total
  value += 2;       // Increment value by 2
  total += value;   // Add value to total

  // Step 4: Change send text
  res.send(`Total is: ${total}`);  // Use string interpolation
});

module.exports = router;
