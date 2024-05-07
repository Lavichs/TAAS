import axios from "axios";
import {API_RESOURCE_TOURS, API_RESOURCE_TOURS_CREATE} from "./constsURL";

export default class TourService {
    static async getAll(limit = 10, page = 1) {
        return await axios.get(API_RESOURCE_TOURS, {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }
    static async create(tour) {
        return await axios.post(API_RESOURCE_TOURS_CREATE, {
            ...tour
        })
    }
}