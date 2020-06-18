const app = require('./api/index');

const PORT = 3000;


app.listen(process.env.PORT || PORT, () => {
    console.log(`Running at ${PORT}`);
});