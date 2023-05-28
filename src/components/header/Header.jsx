import {useState} from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <header id="header" className="site-header header-style-1">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="site-logo">
                                <a href="/">
                                    <h1>abc <i className="ti-heart"></i> xyz</h1>
                                    <span>Just Married</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navigation navbar navbar-default original">
                <div className="container">
                    <div className="navbar-header">
                        <div className="logo">
                            <a href="#home"><span>A</span> <i className="ti-heart"></i> <span>X</span></a>
                        </div>
                        <button onClick={() => setToggle(true)} type="button" className="open-btn">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar"
                         className={`navbar-collapse collapse navigation-holder ${toggle ? 'slideInn' : ''}`}>
                        <button onClick={() => setToggle(false)} className="close-navbar"><i className="ti-close"></i>
                        </button>
                        <ul className="nav navbar-nav">
                            <li><a href="#couple">Cặp đôi</a></li>

                            <li><a href="#story">Chuyện tình yêu</a></li>

                            <li><a href="#gallery">Album cưới</a></li>

                            <li><a href="#featured-people">Phù dâu &amp; Phù rể</a></li>

                            <li><a href="#events">Sự kiện</a></li>

                            <li><a href="#wishes">Lời chúc</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navigation navbar navbar-default sticky-header">
                <div className="container">
                    <div className="navbar-header">
                        <div className="logo">
                            <a href="#home"><span>A</span> <i className="ti-heart"></i> <span>X</span></a>
                        </div>
                        <button type="button" className="open-btn">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>
                        <ul className="nav navbar-nav">
                            <li><a href="#couple">Cặp đôi</a></li>

                            <li><a href="#story">Chuyện tình yêu</a></li>

                            <li><a href="#gallery">Album cưới</a></li>

                            <li><a href="#featured-people">Phù dâu &amp; Phù rể</a></li>

                            <li><a href="#events">Sự kiện</a></li>

                            <li><a href="#wishes">Lời chúc</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
        ;
};

export default Header;
