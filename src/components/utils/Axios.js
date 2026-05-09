import Axios from "axios";
const AxiosInstance = Axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/portfolio`
});
export default AxiosInstance;