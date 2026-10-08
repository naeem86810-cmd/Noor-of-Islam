const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Noor of Islam backend is running successfully!"
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const filePath = path.join(__dirname, "messages.json");

  let messages = [];

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    messages = JSON.parse(fileData);
  } catch (error) {
    messages = [];
  }

  messages.push({
    name,
    email,
    message,
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  console.log("New Contact Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Your message has been received successfully!"
  });
});
app.get("/api/messages", (req, res) => {
  const filePath = path.join(__dirname, "messages.json");

  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    const messages = JSON.parse(fileData);

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to load messages."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});