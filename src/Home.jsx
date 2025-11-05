import Featured from "./Featured.jsx";
import Body from "./Body.jsx";

function Home()
{
    return(
        <>
        <div className='navigation'>
            <h2>Chrishen</h2>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#release">Releases</a></li>
                <li><a href="#bio">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <Featured/>
        <Body/>

        </>
        
    );
}

export default Home