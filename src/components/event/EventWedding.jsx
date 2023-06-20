import CalendarButton from "./CalendarButton.jsx";

const EventWedding = () => {
    return <section className="event-section section-padding p-t-0 section-bg-color" id="events">
        <div className="top-area"
             style={{background: "url(https://res.cloudinary.com/dzedflvjt/image/upload/v1687082480/6250_t8lovz.jpg) center center/cover no-repeat local"}}>
            <h2>Sự Kiện Cưới</h2>
            <p className="">...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một
                hướng...</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="event-grids clearfix">
                        <div className="grid section-bg-img">
                         <h3>TIỆC CƯỚI NHÀ TRAI</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png"
                                    alt=""/>
                            </div>
                            <p><strong>08:00 AM 25/06/2023</strong></p>
                            <p>Thôn Đồng Tiến, Xã Việt Thuận, Huyện Vũ Thư, Tỉnh Thái Bình</p>
                        </div>
                        <div className="grid section-bg-img">
                            <h3>LỄ CƯỚI NHÀ TRAI</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png"
                                    alt=""/>
                            </div>
                            <p><strong>10:00 AM 25/06/2023</strong></p>
                            <p>Thôn Đồng Tiến, Xã Việt Thuận, Huyện Vũ Thư, Tỉnh Thái Bình</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default EventWedding

