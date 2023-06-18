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
                            <h3>LỄ CƯỚI NHÀ NỮ</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/7744fc9739685fe61c53cd8fe2cf7e52.png"
                                    alt=""/>
                            </div>
                            <p><strong>07:30 AM 10/02/2023</strong></p>
                            <p>370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng</p>
                            <a className="see-location-btn"
                               href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA"
                               target="_blank" rel="noreferrer">Xem bản đồ</a>
                        </div>
                        <div className="grid section-bg-img">
                            <h3>TIỆC CƯỚI NHÀ NỮ</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/0ea5ba9f2cbe132b3fe488103eb61817.png"
                                    alt=""/>
                            </div>
                            <p><strong>11:30 AM 10/02/2023</strong></p>
                            <p>187 Hà Huy Tập, P. Hoà Khê, Quận Thanh Khê, Đà Nẵng</p>
                            <a className="see-location-btn"
                               href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA"
                               target="_blank" rel="noreferrer">Xem bản đồ</a>
                        </div>
                        <div className="grid section-bg-img">
                            <h3>LỄ CƯỚI NHÀ NAM</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png"
                                    alt=""/>
                            </div>
                            <p><strong>09:00 AM 12/09/2023</strong></p>
                            <p>120A Nguyễn Văn Thoại, Quận Ngũ Hành Sơn, Đà Nẵng</p>
                            <a className="see-location-btn"
                               href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA"
                               target="_blank" rel="noreferrer">Xem bản đồ</a>
                        </div>
                        <div className="grid section-bg-img">
                            <h3>TIỆC CƯỚI NHÀ NAM</h3>
                            <div className="image-wrap">
                                <img
                                    src="https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png"
                                    alt=""/>
                            </div>
                            <p><strong>12:00 AM 12/09/2023</strong></p>
                            <p>A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng</p>
                            <a className="see-location-btn"
                               href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA"
                               target="_blank" rel="noreferrer">Xem bản đồ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default EventWedding

