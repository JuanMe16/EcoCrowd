import axios from "axios";
import { baseUrl, manageData } from ".";

//Axios request to fetch from the resume endpoint.
export const sendProfileResume = async (session: string) => {
    if (!session) throw new Error("Not authenticated.");
    const result = await axios.get(baseUrl + "/me", {
        headers: {
            session: session
        }
    })
    const output = manageData(result.data);
    if (output[0]) {
        return output[1].info
    } else {
        throw new Error(output[1]);
    }
};