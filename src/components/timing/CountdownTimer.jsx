import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DATE = 24 * HOUR;

const CountdownTimer = ({ seconds }) => {
    const [countdown, setCountdown] = useState(seconds);
    const [timing, setTiming] = useState(null);

    useEffect(() => {
        let times = countdown;
        const dates = Math.floor(times / DATE);
        times = times - dates * DATE;
        const hours = Math.floor(times / HOUR);
        times = times - hours * HOUR;
        const minutes = Math.floor(times / MINUTE);
        times = times - minutes * MINUTE;
        const second = times;
        setTiming({ dates, hours, minutes, second });
    }, [countdown])

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="count-down-clock">
            <div id="clock" data-date="2023-06-24" data-text-day="Ngày" data-text-hour="Giờ"
                data-text-minute="Phút" data-text-second="Giây">
                <div className="box">
                    <div>{timing?.dates}</div>
                    <span>Ngày</span></div>
                <div className="box">
                    <div>{timing?.hours}</div>
                    <span>Giờ</span></div>
                <div className="box">
                    <div>{timing?.minutes}</div>
                    <span>Phút</span></div>
                <div className="box">
                    <div>{timing?.second}</div>
                    <span>Giây</span></div>
            </div>
        </div>
    );
}

CountdownTimer.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default CountdownTimer;