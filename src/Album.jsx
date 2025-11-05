import img1 from './assets/gallery/1.jpg';
import img2 from './assets/gallery/2.jpg';
import img3 from './assets/gallery/3.jpg';
import img4 from './assets/gallery/4.jpg';
import img5 from './assets/gallery/5.jpg';

function Album()
{
    return(
        <>
            <div className="album-body">
                <div className="album-img">
                    
                    <div className='imgbox1'>
                        <img src={img1} className="img1"></img>
                        
                    </div>
                    <div className='imgbox2'>
                        <img src={img2} className="img2"></img>
                    </div>
                    <div className='imgbox3'>
                        <img src={img3} className="img3"></img>
                    </div>
                    <div className='imgbox4'>
                        <img src={img4} className="img4"></img>
                    </div>
                    <div className='imgbox5'>
                        <img src={img5} className="img5"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Album