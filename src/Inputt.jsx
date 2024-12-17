import React from 'react'

const Inputt = () => {
  return (
    <div>
        <input
        type="text"
        placeholder="type something"
        value={inputvalue}
        onChange={handlechange}
        />
        <p>you typed:{inputvalue}</p>
    </div>
  )
}
const root= ReactDOM.createRoot
export default Inputt
