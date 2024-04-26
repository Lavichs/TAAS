import axios from "axios";
import {API_RESOURCE_TOUR_OPERATORS} from "./constsURL";

export default class TourOperatorService {
    static async getAll() {
        //return response
        return await axios.get(API_RESOURCE_TOUR_OPERATORS);
    }
}