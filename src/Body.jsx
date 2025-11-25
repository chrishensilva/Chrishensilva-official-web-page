import logo from "./assets/logo.png";
import Latest from './Latest.jsx';
import About from './About.jsx';
import Trending from "./Trending.jsx";
import Video from "./Video.jsx";
import Biography from "./Biography.jsx";
import Contacts from './Contacts.jsx';
import Album from './Album.jsx';
import Collaborate from "./Collaborate.jsx";
import Parallax from "./Parallax.jsx";
function Body()
{
    return(
        <>
            <Latest/>
            <Trending/>
            <Biography/>
            <Video/>
            <Collaborate/>
            <Parallax/>
            <Album/>
            <Contacts/>
            <footer>
                <h2>Chrishensilva©All Rights Reserved</h2>
            </footer>
        </>
    );
}

export default Body