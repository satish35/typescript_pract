
import React, { useState } from 'react'

type prop={
    title: string
}

const Home: React.FC<prop> = ({title}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }

    const [name, setName] = useState<string>("")
  return (
    <div>
        <h1>
            It's a hello from my home
        </h1>
        <h2>{title}</h2>
        {!name?<h3>Nothing!!!!!!!!!</h3>:<h3>Your name: <b><span>{name}</span></b></h3>}
        <input type='text' placeholder='Enter your name' onChange={handleChange}></input>
    </div>
  )
}

export default Home