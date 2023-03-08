import { useState } from "react";

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


const PlaySound = (
    {handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying, currentSong, setSong, isPlaying, setIsPlaying, isLooped, setLoop}
) => {


    const playlist = [  Price, LayerCake, LifeGoesOn, 
                        WhimsOfFate,WakeUpGetUp, NoMoreWhatIfs,
                        BeneathTheMask, TakeOver];


    return (
        <div className="sound-player">
            <h1 className="heading-sound">Listen to some tunes while you task away...</h1>

            <button className= "loop-btn" onClick={() => setLoop(!isLooped)} > {!isLooped ? "Loop": "Unloop"}
                <i class=" fas fa-undo"></i>
            </button>

            <button className= "play-btn" onClick={() => setIsPlaying(!isPlaying)} > {!isPlaying ? "Play": "Stop"}
                <i className=" fas fa-solid fa-play"></i>
            </button>
            
            <Sound 
                url={currentSong}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
                }
                loop={isLooped}
                volume = {20}
                playFromPosition={300}
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