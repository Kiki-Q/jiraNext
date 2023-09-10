import { useEffect, useState } from "react";

export const isFalsy = ( value: any ): boolean => {
    return value === 0 ? false : !value
}

export const cleanObject = ( obj: Object ) => { 
    let result = { ...obj };
    Object.keys( obj ).forEach( (key)=>{
        // @ts-ignore
        if(isFalsy(obj[key])){
            // @ts-ignore
            delete result[key]
        }
    } )
    return result
}

export const useMount = (callback: () => void) => { 
    useEffect(() => {
        callback()
    }, []);
}

export const useDebounce = <v>(value: v, delay:number = 300) => { 
    let [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout( ()=>{
            setDebounceValue(value)
        }, delay)
    
        return () => clearTimeout(timer)
    }, [value, delay]);

    return debounceValue
}

export const useArray = <P>(initailArray: P[]) => { 
    const [value, setValue] = useState(initailArray)

    return {
        value,
        setValue,
        add: (item: P) => setValue([...value, item]),
        remove: (ind: number) => {
            let copy = [...value]
            copy.splice(ind,1)
            setValue(copy)
        },
        clear: () => setValue([])
    }
}