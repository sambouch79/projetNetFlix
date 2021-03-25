import axios from "axios"



const url = "http://localhost:57026/api/"
export const getFilms = () => {
    return axios.get(url + 'Film', {
        headers: {
            "Access-Control-Allow-Origin": "*"

        }
    })
}

export const getFilm = (id) => {
    return axios.get(url + 'Film/' + id, {
        headers: {
            "Access-Control-Allow-Origin": "*"

        }
    })
}

export const testToken = () => {
    return axios.get(url + 'user/testToken', {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
}



export const login = (user) => {
    return axios.post(url + 'euser/login', { ...user }, {
        headers: {
            "content-type": "application/json",
        }
    })
}