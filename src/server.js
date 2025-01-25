const express = require("express")
const app = express();
const PORT = 1200;

// // files
// import userRouter from './routes/user.router.js';
// import courseRouter from './routes/course.router.js';

// dotenv configuration
// dotenv.config();
// const PORT = process.env.PORT || 9001

// db Connection
// dbConnection(process.env.MONGO_URL).then(() => {
//     console.log("DB connected")
// }).catch((err) => {
//     console.log(err);
// })

// middlewares
// app.use(express.json());
// app.use(express.urlencoded ({ extended: false }));
// app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// endpoints
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/course", courseRouter);

// listen
app.listen(PORT, () => console.log(`server started at ${PORT}`))