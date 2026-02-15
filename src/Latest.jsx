import image1 from "./assets/Latest/1.webp";
import image2 from "./assets/Latest/2.webp";
import image3 from "./assets/Latest/3.webp";
import image4 from "./assets/Latest/4.webp";
function Latest() {
    return (
        <>
            <div className="latestwrapper">
                <div className="Latestbody" id="release">
                    <div className="cardtext" data-aos="fade-up">
                        <h2 className="cardhead">LATEST RELEASES</h2>
                        <p className="section-subtitle">Explore the newest soundscapes and visual journeys.</p>
                    </div>

                    <div className="imagebox">
                        {[
                            { img: image1, title: "Premiye" },
                            { img: image2, title: "Muthu Muthu Pinikata" },
                            { img: image3, title: "Pem Hamuwa" },
                            { img: image4, title: "Seetha Maruthe" }
                        ].map((item, index) => (
                            <div
                                className="latest-item"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img
                                    className="imgsize"
                                    src={item.img}
                                    alt={`image of ${item.title}`}
                                    loading="lazy"
                                />
                                <div className="latest-overlay">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="latest-action" data-aos="fade-up">
                        <a
                            href="https://www.youtube.com/@Chrishensilva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="allrelease"
                        >
                            View All Releases
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Latest;