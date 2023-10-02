import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'

export const useUrlQueryParams = <K extends string>(keys: K[]) => {
    const [searchParms, setSearchParms] = useSearchParams();
    return [
        useMemo( ()=> keys.reduce((prev, key)=>{
                return {...prev, [key]: searchParms.get(key) || ''}
            }, {})
        ,[searchParms]),
        setSearchParms
    ]
}