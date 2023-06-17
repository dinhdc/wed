import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.scss"
import {Banner1} from './../../assets/banner/IMG_6250.JPG'

const DemoCarousel = () => {


    return (
        <section className="hero-slider hero-style-1" id="home">
            <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                <Carousel autoPlay={true} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img
                            alt={""}
                            src={Banner1} />
                    </div>
                    <div>
                        <img
                            alt={""}
                            src="./../../assets/banner/IMG_6251,JPG" />
                    </div>
                </Carousel>
                <div className="slide-main-text" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="container">
                        <div className="slide-title">
                            <h2><span>abc</span> <i className="ti-heart"></i> <span>xyz</span></h2>
                        </div>
                        <div className="wedding-date">
                            <span>01 Tháng 6 2023</span>
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