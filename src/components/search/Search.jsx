import './Search.scss'
// import search from './components/icon/search.png'
import React from 'react'

export default function Search({getValue, getInfo , dark ,message}) {
  return (
    <div className='search' style={{background : dark? "#1E2A47" : "#FEFEFE" }}>
      {/* <img src={search} alt="search" /> */}
      <input type="text" placeholder='Search GitHub username…' onChange={getValue} />
      <p>{message}</p>
      <button onClick={getInfo}>Search</button>
      </div>
  )
}
