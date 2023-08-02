const router = require('express').Router();

//route segment
const hello = require('./hello-route');

//API Versioning
const prefix = '/api/v1'; //versioning API

// Appliying Routes
router.use(`${prefix}/hello`, hello);

// Initiate Api
router.use(`${prefix}`, (req, res) => {
    res.status(201).json({
        status: 'OK',
        message: 'Welcome to Our Api!',
    });
});

// Handling Error route not found
router.use((req, res) => {
    res.status(404).json({
        status: 'FAIL',
        message: 'Route not found!',
    });
});

module.exports = router;
