import { RegisterRequest, LoginRequest } from "@/interfaces/auth";
import { baseUrl, manageData } from ".";
import axios from "axios";

//Register Axios Request to register a new user.
export const sendRegister = async (payload: RegisterRequest) => {
    const result = await axios.post(baseUrl + "/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password
    });
    const output = manageData(result.data);
    if (output[0]) {
        return "Successfully registered!";
    } else {
        throw new Error(output[1]);
    }
};

//Login Axios Request to sign in a user.
export const sendLogin = async (payload: LoginRequest) => {
    const result = await axios.post(baseUrl + "/login", {
        email: payload.email,
        password: payload.password
    });
    const output = manageData(result.data);
    if (output[0]) {
        window.localStorage.setItem("session", output[1].token);
        return "Login Successfully done.";
    } else {
        throw new Error(output[1]);
    }
};