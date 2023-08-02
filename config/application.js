require('dotenv').config();

module.exports = {
    MORGAN_FORMAT: ':remote-user [:date[clf]]  :method :url :status :res[content-length] - :response-time ms',
};
