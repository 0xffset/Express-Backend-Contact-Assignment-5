const app = require('./express');
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s', PORT)
})