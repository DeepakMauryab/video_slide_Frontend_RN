
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const confirmPassMessage = "Password & Confirm Password doesn't match";

const Validation = {
    mobileNumber: {
        required: "Enter Your Mobile Number",
        maxLength: { value: 10, message: "Enter Correct Mobile Number" },
        minLength: { value: 10, message: "Enter Correct Mobile Number" },
    },
    password: {
        required: "Enter Password",
        pattern: {
            value: strongPasswordRegex,
            message: "Enter Strong Password",
        },
    },
    confirmPassMessage,
    Name: {
        required: "Enter Your Name",
    }
};
export default Validation;