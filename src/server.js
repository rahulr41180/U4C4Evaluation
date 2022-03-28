
const app = require("./index");

const Connectdb = require("./configs/db");

app.listen(5000, async() =>
{
    try
    {
        Connectdb();

        console.log("listening on port 5500");
    }
    catch(error)
    {
        console.log("error : ", error);
    }
})