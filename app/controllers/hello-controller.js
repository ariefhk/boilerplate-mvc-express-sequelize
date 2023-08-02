exports.hello = (req, res) => {
    res.status(201).json({
        status: 'OK',
        message: 'Success! :D',
    });
};
