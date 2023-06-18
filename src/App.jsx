import Header from './components/header/Header';
import DemoCarousel from "./components/slider/carousel.jsx";
import Timing from "./components/timing/Timing.jsx";
import Couple from "./components/couple/Couple.jsx";
import Video from "./components/video/video.jsx";
import LoveStory from "./components/story/LoveStory.jsx";
import EventWedding from "./components/event/EventWedding.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import TheEnd from './components/end/End';

function App() {
    return (
        <>
            <Header></Header>
            <DemoCarousel></DemoCarousel>
            <Timing></Timing>
            <Couple></Couple>
            <Video></Video>
            <LoveStory></LoveStory>
            <EventWedding></EventWedding>
            <Gallery></Gallery>
            {/* <TheEnd></TheEnd> */}
        </>


    );
}

export default App;
