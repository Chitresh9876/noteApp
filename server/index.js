import { app } from "./app.js";
import { connectToMongoDB } from "./config/dp.js";


connectToMongoDB();

app.listen(process.env.PORT, () => {
  console.log(`server started on port = ${process.env.PORT}`);
});
