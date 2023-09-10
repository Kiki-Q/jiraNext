import { User } from "components/SearchPanel"

const localStorageKey = '__auth__provider__token__'
const apiUrl = process.env.REACT_APP_API_URL


export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: {user: User}) => { 
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
 }

export const login = (data: { username: string; password: string }) => { 
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json())
        }else{
            return Promise.reject(data)
        }
    })
 }

 export const register = (data: { username: string; password: string }) => { 
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(async (res) => {
        if (res.ok) {
            return handleUserResponse(await res.json())
        }else{
            return Promise.reject(data)
        }
    })
 }

 export const loginOut = async () => {
    console.log('222');
    
    window.localStorage.removeItem(localStorageKey)
 }
