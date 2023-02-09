const mongoose = require("mongoose");
let DB = 'mongodb+srv://rasikh:malikrasikh786@rasikhapi.nybbgrq.mongodb.net/SolarSpark?retryWrites=true&w=majority'
const connectDatabase = () => {
  mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb connected with server : ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
