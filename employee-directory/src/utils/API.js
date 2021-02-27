import axios from "axios";

const query = "https://randomuser.me/api/?results=20&nat=US";
const API = {
    search: function () {
        return axios.get(query);
    }
}

export default API
