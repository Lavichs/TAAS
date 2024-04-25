import axios from "axios";
import {API_RESOURCE_TOURS} from "./constsURL";

export default class TourService {
    static async getAll(limit = 10, page = 1) {
        //return response
        return await axios.get(API_RESOURCE_TOURS, {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }
}