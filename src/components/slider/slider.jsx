const HeroSlider = () => {
    return <section className="hero-slider hero-style-1" id="home">
        <div className="swiper-container swiper-container-horizontal swiper-container-ios">
            <div className="slide-main-text">
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
            <div className="swiper-wrapper"
                 style={{transitionDuration: "0ms", transform: "translate3d(-2932px, 0px, 0px)"}}>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                     data-swiper-slide-index="1" style={{width: "1466px", transition: "all 0ms ease 0s"}}>
                    <div className="slide-inner slide-bg-image"
                         data-background="https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg"
                         style={{transform: "translate3d(1466px, 0px, 0px)", transition: "all 0ms ease 0s", backgroundImage: "url(https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg)"}}></div>
                </div>
                <div className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0"
                     style={{width: "1466px", transition: "all 0ms ease 0s"}}>
                    <div className="slide-inner slide-bg-image"
                         data-background="https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/c3d27a123d944f20a89f69d7d40a4bb0.jpg"
                         style={{transform: "translate3d(1466px, 0px, 0px)", transition: "all 0ms ease 0s", backgroundImage: "url(https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/c3d27a123d944f20a89f69d7d40a4bb0.jpg)"}}></div>
                </div>
                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1"
                     style={{width: "1466px", transition: "all 0ms ease 0s"}}>
                    <div className="slide-inner slide-bg-image"
                         data-background="https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg"
                         style={{transform: "translate3d(1466px, 0px, 0px)", transition: "all 0ms ease 0s", backgroundImage: "url(https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg)"}}></div>
                </div>
                {/*<div className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"*/}
                {/*     data-swiper-slide-index="0" style={{width: "1466px", transition: "all 0ms ease 0s"}}>*/}
                {/*    <div className="slide-inner slide-bg-image"*/}
                {/*         data-background="https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg"*/}
                {/*         style={{*/}
                {/*             transform: "translate3d(-733px, 0px, 0px)",*/}
                {/*             transition: "all 0ms ease 0s",*/}
                {/*             backgroundImage: "url(https://cdn.biihappy.com/ziiweb/default/template/6174ef83a62963738e0a367c/cde33ed0f326a6a1dce7cecfd64a2892.jpg)"*/}
                {/*         }}></div>*/}
                {/*</div>*/}
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                className="swiper-pagination-bullet"></span><span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    </section>
}

export default HeroSlider;