import axios from "axios";
import {API_RESOURCE_BOOKINGS_GET, API_RESOURCE_BOOKINGS_PUT} from "./constsURL";

export default class BookingService {
    static async getAll(limit = 10, page = 1) {
        //return response
        return await axios.get(API_RESOURCE_BOOKINGS_GET, {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async update(status, payMethod) {
        return await axios.get(API_RESOURCE_BOOKINGS_PUT, {
            params: {
                status,
                payMethod
            }
        })
    }
}