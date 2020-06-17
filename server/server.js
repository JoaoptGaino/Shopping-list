const app = require('./api/index');

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
});