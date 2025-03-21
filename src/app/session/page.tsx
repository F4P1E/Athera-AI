"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PlayCircle, PauseCircle, Music, Home } from "lucide-react";

interface MusicTrack {
  name: string;
  src: string;
}

const musicTracks: MusicTrack[] = [
  { name: "Calm Waves", src: "/music/calm-waves.mp3" },
  { name: "Forest Birds", src: "/music/forest-birds.mp3" },
  { name: "Deep Meditation", src: "/music/deep-meditation.mp3" },
];

export default function Session() {
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack>(musicTracks[0]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (audio) {
      audio.pause();
      setAudio(new Audio(currentTrack.src));
    }
  }, [currentTrack]);

  const startPause = () => setIsRunning(!isRunning);

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/meditation-background/image.jpg')" }}
    >
      {/* Timer */}
      <h1 className="text-5xl font-bold text-white">{formatTime(timeLeft)}</h1>
      <button 
        onClick={startPause} 
        className="mt-4 bg-[#0AA9ED] text-white px-6 py-2 rounded-full flex items-center gap-2"
      >
        {isRunning ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Music Selection */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Choose Music</h2>
        <select 
          onChange={(e) => setCurrentTrack(musicTracks.find(track => track.name === e.target.value) || musicTracks[0])} 
          className="mt-2 p-2 border rounded-lg"
        >
          {musicTracks.map((track, index) => (
            <option key={index} value={track.name}>{track.name}</option>
          ))}
        </select>
        <button 
          onClick={() => {
            if (audio) {
              audio.play();
            } else {
              const newAudio = new Audio(currentTrack.src);
              newAudio.play();
              setAudio(newAudio);
            }
          }} 
          className="mt-3 bg-[#07304A] text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <Music size={20} /> Play Music
        </button>
      </div>

      {/* Go Back Button */}
      <Link href="/">
        <button className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
          <Home size={20} /> Home
        </button>
      </Link>
    </div>
  );
}
