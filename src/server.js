const app = require('./express');
const server = app.listen(4001, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s', 4001)
})