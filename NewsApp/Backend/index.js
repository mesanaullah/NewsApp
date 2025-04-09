import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webhookRouter from "./routes/webhook.route.js";
import { Svix } from "svix";


const app = express();
app.use(express.json())

// console.log(process.env.test)
// console.log("working")

// app.get("/test", (req,res)=>{
//     res.status(200).sent("It Work")
// })

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webhookRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack,
    });
});

app.listen(3000, () => {
    connectDB()
    console.log("server is running")
})

// node --watch index.js (update live changes)
// node --env-file .env --watch index.js