import Header from './components/header/Header';
import DemoCarousel from "./components/slider/carousel.jsx";
import Timing from "./components/timing/Timing.jsx";
import Couple from "./components/couple/Couple.jsx";
import Video from "./components/video/video.jsx";
import LoveStory from "./components/story/LoveStory.jsx";
import EventWedding from "./components/event/EventWedding.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Blog from "./components/blog/Blog.jsx";

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
            <Blog></Blog>
        </>
    );
}

export default App;
