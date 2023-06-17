import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
        <div>
            <iframe src="https://www.nhaccuatui.com/mh/background/VyfpdksboLsO" width="1" height="1" frameborder="0" allowfullscreen allow="autoplay"></iframe>
        </div>
    );
};

export default MusicPlayer;