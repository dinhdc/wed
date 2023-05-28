const Video = () => {
    return <section className="video-section event-section section-padding p-t-0 p-b-0" id="video">
        <div className="top-area"
             style={{background: "url(https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/f35716003ab48d57adf77b616c32daaf.jpg) center center/cover no-repeat local"}}
        >
            <h2>Xem video cưới của chúng tôi</h2>
            <p>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.</p>
            <div className="video-btn">
                <a href="https://www.youtube.com/watch?v=f6ZfmGNV8d8" rel="noreferrer" target="_blank"
                   className="video-play-btn">
                    <i className="ti-control-play"></i></a></div>
        </div>
    </section>
}
export default Video;