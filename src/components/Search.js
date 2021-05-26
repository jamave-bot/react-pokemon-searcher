import React from 'react'

const Search = props => {

  let handleChange=(evt)=>{
    props.setSearchTerm(evt.target.value)
    console.log(evt.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={props.value}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
