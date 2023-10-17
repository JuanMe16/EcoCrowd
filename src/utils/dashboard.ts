import axios from "axios";
import { baseUrl, manageData } from ".";

//Axios request to fetch from the resume endpoint.
export const sendProfileResume = async () => {
    const sessionToken = window.localStorage.getItem("session");
    if (!sessionToken) return "Not authenticated.";
    const result = await axios.get(baseUrl + "/me", {
        headers: {
            session: sessionToken
        }
    })
    const output = manageData(result.data);
    return output[0] ? output[1].info : output[1];
};