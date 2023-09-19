const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        if (err.status === 400) {
            return res.status(400).json({ error: 'Bad Request', message: err.message });
        } else if (err.status === 401) {
            return res.status(401).json({ error: 'Unauthorized', message: err.message });
        } else if (err.status === 403) {
            return res.status(403).json({ error: 'Forbidden', message: err.message });
        } else if (err.status === 404) {
            return res.status(404).json({ error: 'Not Found', message: err.message });
        } else if (err.status === 500) {
            return res.status(500).json({ error: 'Internal Server Error', message: err.message });
        }
    }

    return res.status(500).json({ error: 'Internal Server Error', message: 'Unexpected error!'});
};
