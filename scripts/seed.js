require("dotenv").config();
const mongoose = require("mongoose");
const Incident = require("../models/Incident");

const sampleIncidents = [
  {
    title: "AI misclassified sensitive data",
    description:
      "An AI system wrongly labeled sensitive personal data as harmless.",
    severity: "High",
  },
  {
    title: "Autonomous vehicle near-miss",
    description:
      "Self-driving car almost caused an accident at a pedestrian crossing.",
    severity: "Medium",
  },
  {
    title: "Chatbot gave medical misinformation",
    description:
      "A chatbot provided incorrect advice regarding drug interactions.",
    severity: "Low",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Incident.insertMany(sampleIncidents);

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedDB();