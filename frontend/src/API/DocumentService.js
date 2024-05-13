import axios from "axios";
import {API_CONTRACT, API_REPORT, API_RESOURCE_TOURS, API_RESOURCE_TOURS_CREATE} from "./constsURL";

export default class DocumentService {
    static async getReport() {
        return await axios.get(API_REPORT, {responseType: 'blob'});
    }
    static async getContract(idBooking) {
        return await axios.get(API_CONTRACT, {
            responseType: 'blob',
            params: {
                _id: idBooking
            }
        });
    }
}