import React from 'react'
import classes from './SearchMusic.module.css'

const SearchMusic = ({
                       onSearchChange,
                       onSearchSubmit,
                     }) => {

  // to define the content of the button
  return (
    <div className={classes.SearchMusic}>
      <form
        onSubmit={onSearchSubmit}
      >
        <input
          type="text"
          placeholder={'Artist, Track, Album...'}
          onChange={event => onSearchChange(event.target.value)}
        />
        <button type={'submit'}>
          <i className={'fa fa-search'}></i>
        </button>
      </form>
    </div>
  )
}

export default SearchMusic