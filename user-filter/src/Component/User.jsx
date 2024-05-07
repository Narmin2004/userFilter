import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './User.css'

const User = () => {
    const [resultData, setResultData] = useState([])
    useEffect(() => {
        fetch('https://655f3ae5879575426b44e120.mockapi.io/Users')
            .then(res => res.json())
            .then(data => {
                setResultData(data)
            })
    }, [])

    const [searchMyData, setSearchMyData] = useState("")

    const searchData = (e) => {
        setSearchMyData(e.target.value.toLowerCase())
    }

    return (
        <div className='container'>
            <input type='text' placeholder='Search..' onChange={searchData} />
            {
                resultData.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a, b) => (
                    <div className='list-item' key={b}>
                     <h4>{a.name}</h4>
                    </div>
                ))
            }
        </div>
    )

}

export default User