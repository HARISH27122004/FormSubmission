const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        regNum: {
            type: Number,
            required: [true, "Enter Registration Number"]
        },
        stdName: {
            type: String,
            required: [true, "Enter Student Name"]
        },
        email: {
            type: String,
            required: [true, "enter your email id"]
        },
        branch: {
            type:String,
            required:[true, "Select your branch"]
        }
    },
    {
        timestamps: true
    }
)

const Registration = mongoose.model("Registration", studentSchema)

module.exports = Registration

