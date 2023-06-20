const Video = () => {
    return <section className="video-section event-section section-padding p-t-0 p-b-0" id="video">
        <div className="top-area"
             style={{background: "url(https://res.cloudinary.com/dzedflvjt/image/upload/v1687269815/11_rvrq9u.jpg) center center/cover no-repeat local"}}
        >
            <h2>Xem video cưới của chúng tôi</h2>
            <p>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.</p>
            <div className="video-btn">
                <a href="https://www.youtube.com/watch?v=D6VNJLQIU_U" rel="noreferrer" target="_blank"
                   className="video-play-btn">
                    <i className="ti-control-play"></i></a></div>
        </div>
    </section>
}
export default Video;