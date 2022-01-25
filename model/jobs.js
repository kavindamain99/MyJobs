const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: "string",
      required: [true, "please provide a company name"],
    },
    description: {
      type: "string",
      required: [true, "please provide a description"],
    },
    status: {
      type: "string",
      enum: ["active", "closed", "pending"],
      default: "active",
    },
    email: {
      type: "string",
      required: [true, "please Enter email"],
      //validate email
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "please provide valid email",
      ],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
