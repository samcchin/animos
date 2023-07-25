import './LandingPage.css';
import Logo from '../assets/images/animoslogo.png';
import Photo from '../assets/images/landingpage_photo.png';

function LandingPage() {
    return (
        <>
            <div className="landingpage_container">
                <div className="grid">
                    <div>
                        <div className="logo_subtitle">
                            <img className="logo" src={Logo} alt=""></img>
                            <h4>
                                Expand your furry friend’s social circle
                                <br />
                                and gather at your next pet-outing.
                            </h4>
                        </div>
                        <div className="buttons">
                            <button className="get_started_button button">
                                <a
                                    className="nav-link nav-link-signup"
                                    aria-current="page"
                                    href="/signup"
                                >
                                    Get Started
                                </a>
                            </button>
                            <button className="login_button button">
                                <a
                                    className="nav-link nav-link-signup"
                                    aria-current="page"
                                    href="/login"
                                >
                                    Login
                                </a>
                            </button>
                        </div>
                    </div>
                    <img className="photo" src={Photo} img="" alt=""></img>
                    <div className="content"></div>
                </div>
            </div>
        </>
    );
}
export default LandingPage;
