var express = require('express');
var router = express.Router();

/* GET computation result. */
router.get('/', function(req, res, next) {
    // Generate a random value
    let x = Math.random() * 10; // Random value between 0 and 10

    // Check if there is a query parameter 'x'
    if (req.query.x) {
        x = parseFloat(req.query.x); // Use the query value instead
    }

    // Apply the Math.pow function
    const y = Math.pow(x, 2); // Raise x to the power of 2

    // Format the response
    res.send(`Math.pow applied to ${x} is ${y}`);
});

module.exports = router;
