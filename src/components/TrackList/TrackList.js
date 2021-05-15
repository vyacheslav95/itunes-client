import React from 'react'
import classes from './TrackList.module.css'
import TrackItem from "./TrackItem/TrackItem";
import NoTracks from "./NoTracks/NoTracks";

const TrackList = props => {

  // the function converts millis to min:sec
  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000)
    let seconds = ((millis % 60000) / 1000).toFixed(0)
    return (
      seconds === 60
        ? `${minutes + 1}:00`
        : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    )
  }

  const tracks = props.tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        index={index}
        image={track.artworkUrl100}
        artist={track.artistName}
        trackName={track.trackName}
        genre={track.primaryGenreName}
        collection={track.collectionName}
        trackCount={track.trackCount}
        collectionPrice={track.collectionPrice}
        trackTime={millisToMinutesAndSeconds(track.trackTimeMillis)}
        trackPrice={track.trackPrice}
        expandedTrack={props.expandedTrack}
        onExpandTrack={props.onExpandTrack}
      />
    )
  })

  return (
    <>
      <div className={classes.TrackList}>
        <div></div>
        <div>Artist</div>
        <div>Track</div>
        <div>Collection</div>
        <div>Genre</div>
        <div></div>
      </div>
      <hr/>
      {tracks.length ? tracks : <NoTracks/>}
    </>
  )
}

export default TrackList