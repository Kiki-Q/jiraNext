import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'
import { cleanObject } from 'utils';

export const useUrlQueryParams = <K extends string>(keys: K[]) => {
    const [searchParms, setSearchParms] = useSearchParams();
    return [
        useMemo( ()=> keys.reduce((prev, key)=>{
                return {...prev, [key]: searchParms.get(key) || ''}
            }, {} as {[key in K]: string})
        ,[searchParms]),
        (params: Partial< {[key in K]:unknown} >) => {
            const o = cleanObject({...Object.fromEntries(searchParms),...params}) as URLSearchParams;
            return setSearchParms(o);
        }
    ] as const
}