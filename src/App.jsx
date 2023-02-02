import { BrowserRouter, Route, Routes} from "react-router-dom";
import Player from './Player/Player';
import { useRef, useState, useEffect } from 'react';
import './App.css';

import Header from "./pages/Header";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import AddMusic from "./pages/AddMusic";
import DeleteMusic from "./pages/DeleteMusic";
import ModifyMusic from "./pages/ModifyMusic";

import music from "../src/Musique/Travis Scott - goosebumps ft. Kendrick Lamar.mp3"




function App() {

  const [songs, setSongs] = useState("");
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState([1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={< Home/>}/>
              <Route path="/Search" element={< Search/>}/>
              <Route path="/Library" element={< Library/>}/>
              <Route path="/AddMusic" element={< AddMusic/>}/>
              <Route path="/DeleteMusic" element={<DeleteMusic />}/>
              <Route path="/ModifyMusic" element={<ModifyMusic />}/>
            </Routes>


              <div className="App">
                <audio src={music} ref={audioElem} onTimeUpdate={onPlaying} />
                <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
              </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
