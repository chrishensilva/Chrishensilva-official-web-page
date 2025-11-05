import image1 from './assets/Latest/1.png';
import image2 from './assets/Latest/2.jpg';
import image3 from './assets/Latest/3.jpg';
import image4 from './assets/Latest/4.jpeg';
import image5 from './assets/Latest/5.jpg';
import image6 from './assets/Latest/6.jpg';
import image7 from './assets/Latest/7.jpg';
import image8 from './assets/Latest/8.png';

function newLatest()
{
    return(
        <>
    <ul class="conteiner" >
        <li>
            <img src={image1} alt=""/>
            <div class="content" >
                <span>
                <h2>Pem Hamuwa</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image2} alt=""/>
            <div class="content">
                <span>
                    <h2>Seetha Maruthe</h2> 
                </span>
            </div>
        </li>
         <li>
            <img src={image3} alt=""/>
            <div class="content">
                <span>
                    <h2>Dekopul Kadulin Thema</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image4} alt=""/>
            <div class="content">
                <span>
                    <h2>Dehiwala</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image5} alt=""/>
            <div class="content">
                <span>
                    <h2>Dehiwala</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image6} alt=""/>
            <div class="content">
                <span>
                    <h2>Dehiwala</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image7} alt=""/>
            <div class="content">
                <span>
                    <h2>Dehiwala</h2>
                </span>
            </div>
        </li>
        <li>
            <img src={image8} alt=""/>
            <div class="content">
                <span>
                    <h2>Dehiwala</h2>
                </span>
            </div>
        </li>
    </ul>
        </>
    );
}

export default newLatest