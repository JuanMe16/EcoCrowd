import { RegisterRequest, LoginRequest } from "@/interfaces/auth";
import axios from "axios";

const baseUrl = "/api/auth";

//Manages the data retrieven by the REST API.
const manageData = (dataPayload: any) => {
    if (dataPayload.error) {
        return [false, dataPayload.error];
    } else {
        return [true, dataPayload];
    }
}

//Register Axios Request to register a new user.
export const sendRegister = async (payload: RegisterRequest) => {
    const result = await axios.post(baseUrl + "/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password
    });
    const output = manageData(result.data);
    return output[0] ? "Successfully registered!" : output[1];
}

//Login Axios Request to sign in a user.
export const sendLogin = async (payload: LoginRequest) => {
    const result = await axios.post(baseUrl + "/login", {
        email: payload.email,
        password: payload.password
    });
    const output = manageData(result.data);
    window.localStorage.setItem("session", output[1].token);
    return output[0] ? "Login Sucessfully done." : output[1];
}