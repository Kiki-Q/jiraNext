import { useEffect, useState } from "react";

export const isFalsy = ( value: any ): boolean => {
    return value === 0 ? false : !value
}

export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = ( obj: { [key: string] : unknown} ) => { 
    let result = { ...obj };
    Object.keys( obj ).forEach( (key)=>{
        if(isVoid(obj[key])){
            delete result[key]
        }
    } )
    return result
}

export const useMount = (callback: () => void) => { 
    useEffect(() => {
        callback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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