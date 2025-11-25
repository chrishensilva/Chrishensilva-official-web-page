import image1 from './assets/Latest/1.png';
import image2 from './assets/Latest/2.jpg';
import image3 from './assets/Latest/3.jpg';
import image4 from './assets/Latest/4.jpg';
import image5 from './assets/Latest/5.jpg';
import image6 from './assets/Latest/6.jpg';
import image7 from './assets/Latest/7.jpg';
import image8 from './assets/Latest/8.png';
function Latest()
{
    return(
        <>
            <div className="Latestbody" id='release'>
                <div className="cardtext">
                    <h2 className="cardhead" data-aos="fade-up">LATEST RELEASES</h2>
                    <p className="text"></p>
                </div>
                <a href='https://www.youtube.com/@Chrishensilva' target='_blank' data-aos="fade-up"><button className="allrelease" data-aos="fade-up"> View All Releases</button></a>
                <div className="imagebox">
                    <img className="imgsize" src={image1} alt="image of pem hamuwa" loading='lazy' data-aos="fade-right"/>
                    <img className="imgsize" src={image2} alt="image of seetha maruthe" loading='lazy' data-aos="fade-left"/>
                    <img className="imgsize" src={image3} alt="image of dekopul kadulin thema" loading='lazy' data-aos="fade-right"/>
                    <img className="imgsize" src={image4} alt="image of aaley mal" loading='lazy'  data-aos="fade-left"/>
                    <div className='box'></div>
                </div>
                <a href='https://www.youtube.com/@Chrishensilva' target='_blank'><button className="allrelease2" data-aos="fade-up">View All Releases</button></a>
            </div>
        </>
    );
}

export default Latest