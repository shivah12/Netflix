import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://www.moviehdwallpapers.com/wp-content/uploads/2014/10/Gone-Girl-Movie-Wallpapers.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.beyondpixels.at/wp-content/uploads/2015/06/gone-girl-teaser.png"
          alt=""
        />
        <span className="desc">
          Amy is the Amazing Amy but what will happen when she choose something else?
        </span>
        
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}


