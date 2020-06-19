const app = require('./api/index');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.listen(process.env.PORT || PORT, () => {
    console.log(`Running at ${PORT}`);
});