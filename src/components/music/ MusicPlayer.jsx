import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
        <div>
            <iframe src="https://www.nhaccuatui.com/mh/background/VyfpdksboLsO" width="1" height="1" frameborder="0" allowfullscreen allow="autoplay"></iframe>
            <audio ref={audioRef} src="I-DO.mp3" loop>

                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default MusicPlayer;