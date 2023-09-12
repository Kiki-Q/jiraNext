import { useState } from "react"

interface State<D>{
    data: D | null,
    error: Error | null,
    stat: 'Idle' | 'Loading' | 'Error' | 'Success'
}

const defaultInitialState: State<null> = {
    stat: 'Idle',
    data: null,
    error: null
}
export const useAsync = <D>(initialState?: State<D> ) => { 
    const [state, setState] = useState<State<D>>({
        ...defaultInitialState,
        ...initialState,
    })

    const setData = (data: D) => setState({
        data,
        error: null,
        stat: 'Success'
    })

    const setError = (error: Error) => setState({
        data: null,
        error,
        stat: 'Error'
    })

    const run = (promise: Promise<D>) => { 
        if (!promise || !promise.then) {
            throw new Error("请传入promise数据");
        }

        setState({ ...state, stat: 'Loading'})

        return promise.then( data => {
            setData(data)
            return data
        }).catch( error => {
            setError(error)
            // return error
            return Promise.reject(error)
        })
    }

    return {
        isIdle: state.stat === 'Idle',
        isLoading: state.stat === 'Loading',
        isError: state.stat === 'Error',
        isSuccess: state.stat === 'Success',
        run,
        setData,
        setError,
        ...state
    }
 }