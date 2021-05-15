import React from 'react'
import classes from './AdditionalInfo.module.css'

const AdditionalInfo = props => {

  const cls = [
    classes.AdditionalInfo,
    !(props.index % 2)
      ? classes.odd
      : null
  ]

  return (
    <div
      className={cls.join(' ')}
      onClick={() => props.onExpandTrack(props.index)}
    >
      <div></div>
      <div className={classes.cell}>
        <span>{props.artist} - {props.trackName}&nbsp;<i className={'fa fa-music'}/></span>
        <div><strong>Collection:</strong>&nbsp;{props.collection}</div>
        <div><strong>Track Count:</strong>&nbsp;{props.trackCount}</div>
        <div><strong>Price:</strong>&nbsp;{props.collectionPrice}</div>
      </div>
      <div style={{margin: '2.3em 0'}}>
        <div><strong>Track duration:</strong>&nbsp;{props.trackTime}</div>
        <div><strong>Track Price:</strong>&nbsp;{props.trackPrice} USD</div>
      </div>
    </div>
  )
}

export default AdditionalInfo