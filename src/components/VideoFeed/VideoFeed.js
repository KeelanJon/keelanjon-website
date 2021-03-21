import React from "react"

function VideoFeed() {
  function getData() {
    fetch(`https://www.googleapis.com/youtube/v3/videos`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  getData()

  return (
    <div>
      Youtube video VideoFeed
      <iframe
        src="https://youtu.be/GFAo8iIjyuY"
        frameborder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  )
}

export default VideoFeed
