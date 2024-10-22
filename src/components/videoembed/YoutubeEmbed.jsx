import React from "react";
import './YoutubeEmbed.css'
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;