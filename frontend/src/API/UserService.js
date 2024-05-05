import axios from "axios";
import {API_AUTHORIZATION} from "./constsURL";

export default class UserService {
    static async login({login, password}) {
        return await axios.post(API_AUTHORIZATION, {
            login,
            password
        })
            // .then(function (response) {
            //     console.log(response);
            //     console.log(response.data.token);
            //     return response.data.token
            // })
            // .catch(function (error) {
            //     console.log(error);
            //     return false
            // });
    }
}