import ResponsiveGallery from "react-responsive-gallery";

const images = [
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687272008/BB0A1137_ahkmls.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270115/BB0A1081_tujnvg.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270114/BB0A1190_ye4hj7.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270113/BB0A1175_dtiu8e.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270112/BB0A1230_bmvofe.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270111/BB0A1273_hytm3s.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270108/BB0A1279_iicnqs.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270110/11_atbdwu.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270110/BB0A1234_winfw2.jpg'
    },
    {
        src: 'https://res.cloudinary.com/dzedflvjt/image/upload/v1687270110/BB0A1273_1_otxuzm.jpg'
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270110/11_atbdwu.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270110/BB0A1232_wiwhpu.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270107/BB0A1334_cbkmgk.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270107/BB0A1027_t1r13a.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270107/BB0A1331_yojwvd.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687270107/BB0A0974_ijvssl.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687269735/BB0A1196_jbs9lr.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687267983/BB0A0914_pjgmax.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105863/IMG_6261_vfswhw.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105863/IMG_6260_hbc3ow.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105863/IMG_6254_yzzoyw.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105863/IMG_6252_swhucu.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105862/IMG_6257_xgomov.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687105861/IMG_6251_m1wkqn.jpg"
    },
    {
        src: "https://res.cloudinary.com/dzedflvjt/image/upload/v1687082235/6262_cqqqft.jpg"
    }
];

const Gallery = () => {

    return <section className="gallery-section section-padding" id="gallery">
        <div className="container">
            <div className="row">
                <div className="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <div className="section-title">
                        <h2>Album Hình Cưới</h2>
                        <p>Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn
                            dũng khí.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-xs-10 col-xs-offset-1">
                    <ResponsiveGallery images={images}/>
                </div>
            </div>
        </div>
    </section>
}

export default Gallery