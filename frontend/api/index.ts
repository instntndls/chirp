import axios from 'axios'
import { AppConfig } from '@/config'

interface IJWTToken {
    username: string,
    password: string
}

async function getJWT(loginData: IJWTToken) {
    await axios.post(
        `${AppConfig.baseAPI}/jwt/tokens`,
        new URLSearchParams({
            'username': loginData.username,
            'password': loginData.password,
        }),
        {
            headers: {
                'accept': 'application/json'
            }
        }
    ).then((response) => {
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
    })
}

async function getUserData() {
    const response = await axios.get(
        `${AppConfig.baseAPI}/user/`,
        {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response.data
}


export { getJWT, getUserData}