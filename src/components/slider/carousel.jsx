import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.scss"

const DemoCarousel = () => {


    return (
        <section className="hero-slider hero-style-1" id="home">
            <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                <Carousel autoPlay={true} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img
                            alt={""}
                            src="https://res.cloudinary.com/dzedflvjt/image/upload/v1687082236/6255_3p2_adffwk.jpg" />
                    </div>
                    <div>
                        <img
                            alt={""}
                            src="https://res.cloudinary.com/dzedflvjt/image/upload/v1687082235/6262_cqqqft.jpg" />
                    </div>
                </Carousel>
                <div className="slide-main-text" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="container">
                        <div className="slide-title">
                            <h2><span>Đoàn Tuấn</span> <i className="ti-heart"></i> <span>Đoàn Vui</span></h2>
                        </div>
                        <div className="wedding-date">
                            <span>25 Tháng 6 2023</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="pattern">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DemoCarousel