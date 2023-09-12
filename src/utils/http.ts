import qs from "qs"
import { cleanObject } from "utils"
import * as auth from "context/AuthProvider";
import { useAuth } from "context/AuthContext";

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
    token ?: string
    data ?: { [key: string] : unknown}
}

export const http = async (endPoint: string, {data, token, headers, ...custumConfig}: Config = {}) => { 
    const config = {
        method:'GET',
        headers: {
            "Content-Type": data ? "application/json" : '',
            Authorization: token ? `Bearer ${token}` : ''
        },
        ...custumConfig
    }

    if(config.method.toUpperCase() === 'GET') {
        if(data) endPoint += `?${qs.stringify( cleanObject(data) )}` 
    }else{
        config.body = JSON.stringify(data || {})
    }
    
    return window.fetch(`${apiUrl}${endPoint}`, config).then(async res => {
        if(res.status === 401){
            await auth.loginOut()
            window.location.reload()
            return Promise.reject({ message: '请重新登录' })
        }

        let data = await res.json()

        if(res.ok){
            return data
        }else{
            return Promise.reject( data )
        }
    })

}

export const useHttp = () => {
    const { user } = useAuth()
    return (...[endPoint, config]: Parameters<typeof http>) => http(endPoint, {...config, token: user?.token})
}