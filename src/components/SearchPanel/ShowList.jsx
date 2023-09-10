import React from 'react'

export default function ShowList({ list }) {
    return (
        <div>
            <ul>
                {
                    list.map( (item)=>{
                        return  <li key={item.id}>{item.name}</li>
                    } )
                }
            </ul>
        </div>
    )
}
