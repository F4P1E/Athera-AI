"use client";

import { useState, useEffect, useRef } from "react";
import {
  PlayCircle,
  PauseCircle,
  Music,
  Sparkles,
  Volume2,
} from "lucide-react";

interface MusicTrack {
  name: string;
  src: string;
}

const musicTracks: MusicTrack[] = [
  { name: "Meditation Relax", src: "/music/MeditationRelax.mp3" },
  { name: "Deep Meditation", src: "/music/DeepMeditation.mp3" },
];

export default function Session() {
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<MusicTrack>(musicTracks[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [recommendedTrack, setRecommendedTrack] = useState<MusicTrack | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5); // Default volume at 50%

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    // Only create Audio instance on the client
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new window.Audio(currentTrack.src);
      audioRef.current.volume = volume;
    }
  }, [currentTrack.src, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = currentTrack.src;
      audioRef.current.load();
      audioRef.current.volume = volume;
      if (isPlaying) audioRef.current.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack, isPlaying]);

  // Handle Volume Change
  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  // AI-powered recommendation logic
  const recommendMusic = () => {
    const recommended =
      musicTracks[Math.floor(Math.random() * musicTracks.length)];
    setRecommendedTrack(recommended);
    setCurrentTrack(recommended);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
        onClick={() => setIsRunning(!isRunning)}
        className="mt-4 bg-[#0AA9ED] text-white px-6 py-2 rounded-full flex items-center gap-2"
      >
        {isRunning ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Music Selection */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Choose Music</h2>

        {/* AI Recommended Music */}
        {recommendedTrack && (
          <p className="mt-2 text-sm text-gray-600">
            <Sparkles size={16} className="inline-block mr-1 text-yellow-500" />
            AI Suggests: <strong>{recommendedTrack.name}</strong>
          </p>
        )}

        <select
          onChange={(e) =>
            setCurrentTrack(
              musicTracks.find((track) => track.name === e.target.value) ||
                musicTracks[0]
            )
          }
          className="mt-2 p-2 border rounded-lg"
          value={currentTrack.name}
        >
          {musicTracks.map((track, index) => (
            <option key={index} value={track.name}>
              {track.name}
            </option>
          ))}
        </select>

        {/* Play Music Button */}
        <button
          onClick={togglePlayPause}
          className="mt-3 bg-[#07304A] text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <Music size={20} /> {isPlaying ? "Pause Music" : "Play Music"}
        </button>

        {/* Volume Control */}
        <div className="mt-4 flex items-center gap-2">
          <Volume2 size={20} className="text-gray-600" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
            className="w-full"
          />
        </div>

        {/* AI Recommend Button */}
        <button
          onClick={recommendMusic}
          className="mt-3 bg-[#F59E0B] text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <Sparkles size={20} /> AI Recommend
        </button>
      </div>
    </div>
  );
}
