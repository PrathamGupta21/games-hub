import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'a9a66bd0141a4cfcb2ceab5b642a5823'
    }
})
