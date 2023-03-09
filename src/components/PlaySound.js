//importing songs
import Sound from "react-sound";
import Price from "../audio/price.mp3";
import LifeGoesOn from "../audio/lifegoeson.mp3";
import LayerCake from "../audio/layercake.mp3";
import WhimsOfFate from "../audio/whimsoffate.mp3";
import WakeUpGetUp from "../audio/wakeupgetup.mp3";
import NoMoreWhatIfs from "../audio/nomorewhatifs.mp3";
import BeneathTheMask from "../audio/beneaththemask.mp3";
import TakeOver from "../audio/takeover.mp3";
import CinematicTale from "../audio/cinematictale.mp3";
import MazeOfLife from "../audio/mazeoflife.mp3";
import PullTheTrigger from "../audio/pullthetrigger.mp3";
import RoadLessTaken from "../audio/roadlesstaken.mp3";


const PlaySound = (
    {handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying, currentSong, setSong, isPlaying, setIsPlaying, isLooped, setLoop}
) => {

    //array to store a simple playlist full of the songs
    const playlist = [  Price, LayerCake, LifeGoesOn, 
                        WhimsOfFate,WakeUpGetUp, NoMoreWhatIfs,
                        BeneathTheMask, TakeOver, CinematicTale,
                        MazeOfLife, PullTheTrigger, RoadLessTaken
                    ];

    //function to change icons when the play button is clicked
    const handleClickIcon = () => {
        let iClass = [" fas fa-solid fa-play", "play-btn"];
        if(!isPlaying){
            return iClass;
        }else{
            iClass = [" fas fa-solid fa-stop", "stop-btn"];
            return iClass;
        }
    }
    return (
        <div className="sound-player">
            <h2 className="heading-sound">Listen to some tunes while you task away...</h2>
            <hr></hr>
            <button className= "loop-btn" onClick={() => setLoop(!isLooped)} > {!isLooped ? "Loop": "Unloop"}
                <i class=" fas fa-undo"></i>
            </button>

            <button className= {handleClickIcon(!isPlaying)[1]} onClick={() => setIsPlaying(!isPlaying)} > 
                {!isPlaying ? "Play": "Stop"}
                <i className= {handleClickIcon(!isPlaying)[0]}></i>
            </button>
            
            <Sound 
                url={currentSong}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
                }
                loop={isLooped}
                volume = {20}
                onloading={handleSongLoading}
                onPlaying= {handleSongPlaying}
                onFinishedPlaying = {handleSongFinishedPlaying}
      
            />
            <button className= "shuffle-btn" onClick={() => setSong(playlist[Math.floor(Math.random()*playlist.length)])}>
                {"Shuffle!"}<i class="fas fa-solid fa-random"></i>
                </button>
        </div>
    )
}

export default PlaySound;