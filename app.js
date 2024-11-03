require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/userRoute');




app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));





const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Exit the application with a non-zero status code to indicate an error
    }
};

// Call the main function to connect to MongoDB
main();

app.use("/user", userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
