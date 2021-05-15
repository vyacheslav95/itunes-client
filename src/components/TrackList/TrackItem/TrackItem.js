import React from 'react'
import classes from './TrackItem.module.css'
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const TrackItem = props => {

  const isExpanded = props.expandedTrack === props.index

  const sign = isExpanded ? 'fa fa-minus' : 'fa fa-plus'

  const cls = [
    classes.TrackItem,
    !(props.index % 2)
      ? classes.odd
      : null
  ]

  return (
    <>
      <div
        className={cls.join(' ')}
        onClick={() => props.onExpandTrack(props.index)}
      >
        <div><img src={props.image} alt={'pic'}/></div>
        <div>{props.artist}</div>
        <div>{props.trackName}</div>
        <div>{props.collection}</div>
        <div>{props.genre}</div>
        <div style={{margin: 'auto', cursor: 'pointer', fontSize: 20, fontWeight: 'bolder'}}>
          <i className={sign}/>
        </div>
      </div>
      {isExpanded && <AdditionalInfo
        index={props.index}
        artist={props.artist}
        trackName={props.trackName}
        collection={props.collection}
        trackCount={props.trackCount}
        collectionPrice={props.collectionPrice}
        trackTime={props.trackTime}
        trackPrice={props.trackPrice}
        onExpandTrack={props.onExpandTrack}
      />}
    </>
  )
}

export default TrackItem