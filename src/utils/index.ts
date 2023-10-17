export const baseUrl = "/api/auth";

//Manages the data retrieven by the REST API.
export const manageData = (dataPayload: any) => {
    if (dataPayload.error) {
        return [false, dataPayload.error];
    } else {
        return [true, dataPayload];
    }
};