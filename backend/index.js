const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./server");

dotenv.config();

const PORT = process.env.PORT || 5000;

// Only connect to DB if not running in test mode
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("DB connection error:", err));

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
