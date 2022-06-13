import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
    baseURL: "https://pokemon-pichincha.herokuapp.com/pokemons/",
    withCredentials: false,
});

API.interceptors.response.use(
    (response) => response,
    (_error) => {
        toast.error("Ocurrio algun problema con el serivdor");
    }
);

export default API;
