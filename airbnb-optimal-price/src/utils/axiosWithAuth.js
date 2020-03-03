import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "https://airbnboptimal.herokuapp.com",
        headers: {
            Authorization: token
        }
    });
};