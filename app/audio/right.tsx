"use client"
import React from 'react'
import Image from 'next/image';
import { useState, useRef } from 'react';


const Right = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const togglePlay = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex  flex-col  items-center mx-9 my-16">
        <div className="flex w-full justify-center items-center">
            {/*image  */}
            <Image
            src={"/images/audiobook_example.jpg"}
            height={300}
            width={300}
            alt="magic"
            className="rounded-md   border border-white "
            ></Image>
        </div>
        {/* text */}
        <div className="flex jost text-white text-[20px] justify-center">
            THE MAGIC STAR
        </div>
        {/* Audio Player */}
        <div>
            <button onClick={togglePlay} className="bg-black text-white rounded-full p-4 focus:outline-none">
                {isPlaying ? 
                <Image src={"/icons/play.png"} width={34} height={34} alt='play'></Image>
                : 
                <Image src={"/icons/pause.png"} width={34} height={34} alt='pause'></Image>}
            </button>
            <audio ref={audioRef} src="/audio/audiobook_example.mp3" className="mt-4 w-full" />
        </div>
        </div>
    );
};

export default Right;