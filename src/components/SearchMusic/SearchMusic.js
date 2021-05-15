import React from 'react'
import classes from './SearchMusic.module.css'

const SearchMusic = props => {

  // to define the content of the button
  return (
    <div className={classes.SearchMusic}>
      <form
        onSubmit={props.onSearchSubmit}
      >
        <input
          type="text"
          placeholder={'Artist, Track, Album...'}
          onChange={event => props.onSearchChange(event.target.value)}
        />
        <button type={'submit'}>
          <i className={'fa fa-search'}></i>
        </button>
      </form>
    </div>
  )
}

export default SearchMusic