import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
        <audio ref={audioRef} src="./I-DO.mp3" loop>
            Your browser does not support the audio element.
        </audio>
    );
};

export default MusicPlayer;