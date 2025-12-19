import React, { useRef } from "react";
import img1 from "./assets/Colab/1.webp";
import img2 from "./assets/Colab/2.webp";
import img3 from "./assets/Colab/3.webp";
import img4 from "./assets/Colab/4.webp";
import img5 from "./assets/Colab/5.webp";
import img6 from "./assets/Colab/6.webp";
import img8 from "./assets/Colab/8.webp";
import img9 from "./assets/Colab/9.webp";
import img11 from "./assets/Colab/11.webp";
import img12 from "./assets/Colab/12.webp";
import img13 from "./assets/Colab/13.webp";
import img14 from "./assets/Colab/14.webp";
import img15 from "./assets/Colab/15.webp";
import img16 from "./assets/Colab/16.webp";
import img17 from "./assets/Colab/17.webp";
import img18 from "./assets/Colab/18.webp";
import img19 from "./assets/Colab/19.webp";
import img20 from "./assets/Colab/20.webp";
import img21 from "./assets/Colab/21.webp";
import img22 from "./assets/Colab/22.webp";
import img23 from "./assets/Colab/23.webp";
import user from "./assets/user.webp";

function Collaborate() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320; // Adjust based on box width + gap
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Array of collaborator data
  const collaborators = [
    {
      name: "Kaushika Randima",
      img: img1,
      message:
        "The Crooning Balladeer; a smooth, deep baritone voice famous for delivering romantic, late-night standards.",
      songs: ["Prathihari Cover"],
      alt: "Image of Kaushika Randima",
      loading: "lazy",
    },

    {
      name: "Linusha Chandimal",
      img: img2,
      message:
        "The Future R&B Architect; uses a high, agile tenor and intricate vocal runs over sparse, electronic beats.",
      songs: [
        "Unuhuma 2",
        "Kathirina",
        "Kuweni",
        "Seethala Sulaga Hamai",
        "Tharuka Niwa",
      ],
      alt: "Image of Linusha Chandimal",
      loading: "lazy",
    },

    {
      name: "Ravindu Dilshaka",
      img: img23,
      message:
        "The Lonesome Country Drifter; sings with a worn, sincere twang, specializing in acoustic, story-driven folk songs.",
      songs: ["Hathara Kendare Cover"],
      alt: "Image of Ravindu Dilshaka",
      loading: "lazy",
    },

    {
      name: "Patalie Fernando",
      img: img3,
      message:
        "Master storyteller crafting catchy pop hooks with deeply personal, narrative lyrics.",
      songs: ["Pem hamuwa", "Ravana Cover", "Kawiya", "Kathirina Cover"],
      alt: "Image of Patalie Fernando",
      loading: "lazy",
    },
    {
      name: "Nethmi Diwyanjana",
      img: img4,
      message:
        "The Ambient Whisper; known for her ethereal, breathy vocals over layered electronic soundscapes.",
      songs: ["Rawana Cover", "Tharuka Niwa Cover", "Aaley Mal Cover"],
      alt: "Image of Nethmi Diwyanjana",
      loading: "lazy",
    },

    {
      name: "Naveen Anthony",
      img: img5,
      message:
        "The Synth-Pop Hypnotist; utilizes a cool, detached vocal style over pulsing 80s-inspired synthesizers.",
      songs: ["Nadagam Geeya Cover", "Ai kale Cover"],
      alt: "Image of Naveen Anthony",
      loading: "lazy",
    },
    {
      name: "Dev Nadesan",
      img: img6,
      message:
        "The Celtic Storyteller; a clear, expressive voice with a distinct lilt, focusing on ballads and mythological themes.",
      songs: ["Hawasaka Ma Cover"],
      alt: "Image of Dev Nadesan",
      loading: "lazy",
    },
    {
      name: "Mareena Chrishmi",
      img: user,
      message:
        "The Forest Folk Poet; sings with a pure, unadorned tone, focusing on acoustic simplicity and profound, nature-inspired lyrics.",
      songs: ["Hawasaka Ma Cover", "10,000 Reasons"],
      alt: "Image of Mareena Chrishmi",
      loading: "lazy",
    },
    {
      name: "Amila Sahan",
      img: img8,
      message:
        "The Big Band Revivalist; a powerful, theatrical voice that commands a room, focused on swing and theatrical jazz.",
      songs: ["Mahamaya Cover", "Surath Suwaya Cover"],
      alt: "Image of Amila Sahan",
      loading: "lazy",
    },
    {
      name: "Shiwon Sachintha",
      img: img9,
      message:
        "The Blues-Folk Grinder; a deep, resonant voice with a heavy, throaty texture, often accompanied by slide guitar.",
      songs: ["Ahasata Soduruda Cover"],
      alt: "Image of Shiwon Sachintha",
      loading: "lazy",
    },
    {
      name: "Dilmi Sangeetha",
      img: user,
      message:
        "The Gospel-Infused Powerhouse; a technically masterful, wide-ranging voice that commands attention, focused on uplifting, secular themes.",
      songs: ["Ahasata Soduruda Cover"],
      alt: "Image of Dilmi Sangeetha",
      loading: "lazy",
    },
    {
      name: "Dileesha Appuhamy",
      img: img11,
      message:
        "The Piano Man Balladeer; sings with a warm, slightly strained vulnerability, often centered around simple piano melodies.",
      songs: ["Nura Wasanthe Cover", "Muthu Muthu Pinikata Cover"],
      alt: "Image of Dileesha Appuhamy",
      loading: "lazy",
    },
    {
      name: "Ayeshi Silva",
      img: img12,
      message:
        "The Cabaret Cynic; a smoky-voiced performer whose songs tell witty, dark tales accompanied by a lone piano.",
      songs: ["Seethala Sulaga hamai Cover"],
      alt: "Image of Ayeshi Silva",
      loading: "lazy",
    },
    {
      name: "Kavishanka Adithya",
      img: img13,
      message:
        "The Operatic Crossover Tenor; possesses a formal, soaring voice that blends classical training with contemporary music.",
      songs: ["Salalihini Cover", "Sansarini Cover"],
      alt: "Image of Kavishanka Adithya",
      loading: "lazy",
    },
    {
      name: "Angel Fernando",
      img: img14,
      message:
        "The Midnight Groover; a smooth, low contralto voice that effortlessly glides over 90s-style R&B and lo-fi beats.",
      songs: ["Kuweni Cover"],
      alt: "Image of Angel Fernando",
      loading: "lazy",
    },
    {
      name: "Shenuri Angela",
      img: img15,
      message:
        "The Galactic Soprano; her voice is crystal-clear and extraordinarily high, often compared to the sound of shattered glass.",
      songs: ["Udurawi Cover"],
      alt: "Image of Shenuri Angela",
      loading: "lazy",
    },
    {
      name: "Ishan Perera",
      img: img16,
      message:
        "The Modern Doo-Wop Revivalist; a powerful, smooth tenor that fronts an a cappella group, blending vintage harmonies with modern production",
      songs: ["Viramayak Cover", "Seetha Maruthe Mashup"],
      alt: "Image of Ishan Perera",
      loading: "lazy",
    },
    {
      name: "Marlon Roshen",
      img: img17,
      message:
        "The Funk-Pop Showman; a charismatic, versatile tenor that can switch instantly between soulful belts and playful raps over infectious basslines.",
      songs: ["Adariye Cover"],
      alt: "Image of Marlon Roshen",
      loading: "lazy",
    },
    {
      name: "Charaka Vishwaprabhash",
      img: img18,
      message:
        "The Indie Pop Minimalist; a breathy, almost melancholic tone paired with simple, catchy melodies.",
      songs: ["Kailashini Cover"],
      alt: "Image of Charaka Vishwaprabhash",
      loading: "lazy",
    },
    {
      name: "Chamidi Panagoda",
      img: img19,
      message:
        "The Dream Pop Architect; known for her delicate, layered harmonies and atmospheric, synth-driven melodies.",
      songs: ["Chandra Payanna Cover"],
      alt: "Image of Chamidi Panagoda",
      loading: "lazy",
    },
    {
      name: "Niwantha Yasas",
      img: img20,
      message:
        "The Urban Lyricist; a rapid, rhythmic delivery known for complex wordplay and street-smart commentary.",
      songs: ["Radhawani Mashup"],
      alt: "Image of Niwantha Yasas",
      loading: "lazy",
    },
    {
      name: "Navodya Perera",
      img: img21,
      message:
        "The Ambient Vocal Drone; his voice is mixed far into the background, providing a haunting, sustained hum beneath long instrumental pieces.",
      songs: ["Dekopul Kadulin Thema Mashup", "10,000 Reasons"],
      alt: "Image of Navodya Perera",
      loading: "lazy",
    },
    {
      name: "Tharushi Perera",
      img: img22,
      message:
        "The Neo-Soul Poet; a rich, warm voice that effortlessly delivers complex, conscious lyrics over smooth, funky grooves.",
      songs: ["Dekopul Kadulin Thema Mashup"],
      alt: "Image of Tharushi Perera",
      loading: "lazy",
    },
    {
      name: "Mishel Fernando",
      img: user,
      message:
        "The Indie Pop Minimalist; a youthful, slightly flat vocal style delivered over simple, catchy, 8-bit inspired beats",
      songs: ["Seetha Maruthe Mashup"],
      alt: "Image of Mishel Fernando",
      loading: "lazy",
    },
    // Add more collaborators here
  ];

  return (
    <div className="collaborator-container">
      <div className="colhead" data-aos="fade-up">
        <h2>OUR COLLABORATORS</h2>
        <p>HEAR WHAT OUR COLLABORATORS SAY</p>
      </div>

      <div className="scroll-wrapper" data-aos="fade-up">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>

        <div className="message-box" ref={scrollRef}>
          {collaborators.map((col, i) => (
            <div className="msgimgbox" key={i}>
              <img src={col.img} alt={col.name} className="collaborator" />
              <h3>{col.name}</h3>
              <p>{col.message}</p>
              <div className="colsongs">
                {col.songs.map((song, idx) => (
                  <p key={idx}>{song}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Collaborate;
