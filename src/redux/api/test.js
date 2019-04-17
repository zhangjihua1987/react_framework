import axios from 'axios'


export const test = async () => {
    return await axios.get('http://localhost:8888')
}