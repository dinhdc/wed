import {useEffect} from 'react';

const CalendarButton = () => {

    // const schema = {
    //     "@context": "https://schema.org",
    //     "@type": "Event",
    //     "name": "LỄ CƯỚI NHÀ NỮ (Đám cưới abc và xyz)",
    //     "description": "Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website: https://abc-xyz-asdadsa.iwedding.info",
    //     "startDate": "2023-02-10T07:30:00+07:00",
    //     "duration": "00:00",
    //     "location": "370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng",
    //     "endDate": "2023-02-10T07:30:00+07:00",
    //     "image": [
    //         "https://add-to-calendar-button.com/demo_assets/img/1x1.png",
    //         "https://add-to-calendar-button.com/demo_assets/img/4x3.png",
    //         "https://add-to-calendar-button.com/demo_assets/img/16x9.png"
    //     ]
    // };
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
      (function() {
        var atcb = document.createElement('script');
        atcb.type = 'text/javascript';
        atcb.async = true;
        atcb.src = 'https://add-to-calendar-button.com/addto.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(atcb, s);
      })();
    `;
        document.head.appendChild(script);
    }, []);

    return (
        <div className="calendar-button">
            <div className="atcb-initialized" style={{display: 'block'}}>

            </div>
        </div>)
}
export default CalendarButton
