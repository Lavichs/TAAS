import axios from "axios";
import {API_RESOURCE_TOURS} from "./constsURL";

export default class TourService {
    static async getAll() {
        const response = await axios.get(API_RESOURCE_TOURS);
        return response.data;
    }
}