import fb from './assets/logo/fb.png';
import inster from './assets/logo/inster.png';
import spotify from './assets/logo/spotify.png';
import itunes from './assets/logo/itunes.png';
import yt from './assets/logo/yt.png';
import soundcloud from './assets/logo/soundcloud.png';
import deezer from './assets/logo/deezer.png';
import tele from './assets/logo/tele.png';
import email from './assets/logo/email.png';
import home from './assets/logo/home.png';
function Contacts()
{
    return(
        <>
        <div className="contact-main" id='contact'>
            <div className="contact-container">
                <div className="contact-head">
                    <h2>CONTACT</h2>
                </div>
                <div className="contact-body">
                    <div className="contact-me">
                        <div className='contact-heading'>
                            <h3><img src={home} className='conlogo'></img> Address</h3>
                            <h3><img src={email} className='conlogo'></img>Email</h3>
                            <h3><img src={tele} className='conlogo'></img>Contact Number</h3>
                        </div>
                        <div className='contact-p'>
                            <p>No.76, Walanagoda, Katunayake</p>
                            <p>chrishensilva@gmail.com</p>
                            <p>070 169 0749/076 222 5024</p>
                        </div>
                        
                    </div>
                </div>
                <div className="socialmedia">
                    <h3>Follow me on</h3>
                    <div className="media">
                        <img src={fb} className='logo'></img>
                        <img src={inster} className='logo'></img>
                        <img src={spotify} className='logo'></img>
                        <img src={itunes} className='logo'></img>
                        <img src={yt} className='logo'></img>
                        <img src={soundcloud} className='logo'></img>
                        <img src={deezer} className='logo'></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contacts