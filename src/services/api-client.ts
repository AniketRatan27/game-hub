import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"72e469075bbf433aa8668b9ca5d208ac"
    }
})