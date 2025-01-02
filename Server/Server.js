require('./Config/db')
require('dotenv').config();
const app = require('./app')

const cors = require('cors')
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server succefully runnig on http://localhost:${PORT}`);
});