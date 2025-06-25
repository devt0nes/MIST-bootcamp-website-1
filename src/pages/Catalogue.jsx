import React, { useState } from "react";
import './Catalogue.css';

const innovations = [
    {
        title: "Wright Flyer",
        brief: "First sustained flight by a manned heavier-than-air powered and controlled aircraft",
        img: "img1.jpg",
        inventors: "Wright brothers",
        year: "1903",
        country: "USA",
        working: "	Uses wings (airfoils) for lift, engines for thrust, and control surfaces for direction.",
        link: "https://www.britannica.com/topic/Wright-flyer-of-1903"
    },
    {
        title: "Audion (Triode Vaccum Tube)",
        brief: "Electronic detecting or amplifying vacuum tube, amplified electrical signals, and was key for radio and early electronics",
        img: "img2.jpg",
        inventors: "Lee De Forest",
        year: "1906",
        country: "USA",
        working: "A heated filament emits electrons; a grid controls their flow to the plate, amplifying signals.",
        link: "https://www.britannica.com/technology/Audion"
    },
    {
        title: "Electrocardiogram (ECG/EKG)",
        brief: "A medical device that records the electrical activity of the heart to diagnose various cardiac conditions",
        img: "img3.jpg",
        inventors: "Willem Einthoven",
        year: "1903",
        country: "Netherlands",
        working: "Electrodes on the skin detect electrical signals from the heart and graph them as waveforms.",
        link: "https://en.wikipedia.org/wiki/Willem_Einthoven"
    },
    {
        title: "Neon Lighting",
        brief: "A type of gas-discharge light that produces bright, colorful illumination using electrified neon gas",
        img: "img4.jpg",
        inventors: "Georges Claude",
        year: "1910",
        country: "France",
        working: "Electric current passes through neon gas in a sealed tube, causing it to glow brightly.",
        link: "https://neonmuseum.org/news/the-evolution-of-neon-signs-from-vintage-to-modern/"
    },
    {
        title: "FM Radio (Frequency Modulation Radio)",
        brief: "A radio broadcasting system that uses frequency modulation to provide clearer sound with reduced static",
        img: "img8.jpg",
        inventors: "Edwin Howard Armstrong",
        year: "1933",
        country: "USA",
        working: "Encodes audio signals by varying the frequency of the carrier wave, improving sound quality and noise resistance.",
        link: "https://en.wikipedia.org/wiki/History_of_radio"
    },
    {
        title: "ENIAC (Electronic Numerical Integrator and Computer)",
        brief: "The first general-purpose, fully electronic digital computer, used primarily for military calculations",
        img: "img5.jpg",
        inventors: "J. Presper Eckert & John Mauchly",
        year: "1945",
        country: "USA",
        working: "Used vacuum tubes to perform arithmetic and logic operations by switching circuits on and off electronically.",
        link: "https://www.britannica.com/technology/ENIAC"
    },
    {
        title: "Colossus (Codebreaking Computer)",
        brief: "The world’s first programmable, electronic, digital computer, used to break German ciphers during WWII",
        img: "img7.jpg",
        inventors: "Tommy Flowers and his team at the Post Office Research Station",
        year: "1944",
        country: "United Kingdom",
        working: "Used vacuum tubes to perform high-speed logical operations on encrypted teleprinter data to decode messages.",
        link: "https://en.wikipedia.org/wiki/Colossus_computer"
    },
    {
        title: "First Nuclear Reactor (Chicago Pile-1)",
        brief: "The first human-made nuclear reactor, it demonstrated a controlled, self-sustaining nuclear chain reaction",
        img: "img6.jpg",
        inventors: "Enrico Fermi and his team",
        year: "1942",
        country: "USA",
        working: "Uranium fuel initiates a chain reaction; graphite slows neutrons, and control rods regulate the reaction.",
        link: "https://news.uchicago.edu/explainer/first-nuclear-reactor-explained"
    },
    {
        title: "BASIC (Beginner’s All-purpose Symbolic Instruction Code)",
        brief: "A simple programming language designed to make computing accessible to beginners and non-scientists",
        img: "img9.jpg",
        inventors: "John G. Kemeny and Thomas E. Kurtz",
        year: "1964",
        country: "USA",
        working: "Uses easy-to-read commands for performing calculations, logic, and input/output, interpreted line-by-line.",
        link: "https://en.wikipedia.org/wiki/BASIC"
    },
    {
        title: "Integrated Circuit (Microchip)",
        brief: "A miniaturized electronic circuit built on a semiconductor, enabling compact and powerful electronic devices",
        img: "img10.jpg",
        inventors: "Jack Kilby and Robert Noyce (independently)",
        year: "1958 (Kilby), 1959 (Noyce)",
        country: "USA",
        working: "Combines transistors, resistors, and capacitors on a single chip to process and control electrical signals.",
        link: "https://en.wikipedia.org/wiki/Integrated_circuit"
    },
    {
        title: "Sputnik 1",
        brief: "The first man-made satellite to orbit Earth, marking the start of the space age and the space race",
        img: "img11.jpg",
        inventors: "Soviet scientists led by Sergei Korolev",
        year: "1957",
        country: "Soviet Union (USSR)",
        working: "Transmitted radio signals while orbiting Earth, powered by onboard batteries and tracked via ground stations.",
        link: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1957-001B"
    },
    {
        title: "Laser (Light Amplification)",
        brief: "A device that emits a highly focused, coherent beam of light through the process of stimulated emission",
        img: "img12.jpg",
        inventors: "Charles Townes and Arthur Schawlow, Theodore H. Maiman, Gordon Gould",
        year: "1960",
        country: "USA",
        working: "Energized atoms emit photons in sync, which are amplified and reflected to produce a narrow light beam.",
        link: "https://www.britannica.com/technology/laser/History"
    },
    {
        title: "Microsoft Windows",
        brief: "A graphical operating system developed by Microsoft, it became the dominant platform for personal computers worldwide",
        img: "img13.jpg",
        inventors: "Microsoft Corporation (led by Bill Gates and Paul Allen)",
        year: "1985 (Windows 1.0 release)",
        country: "USA",
        working: "Provides a graphical user interface (GUI) over MS-DOS, allowing users to run programs and manage files via windows, icons, and menus.",
        link: "https://en.wikipedia.org/wiki/Microsoft_Windows"
    },
    {
        title: "CD-ROM (Compact Disc Read-Only Memory)",
        brief: "A type of optical disc that stores data digitally and is readable by a laser, commonly used for software and multimedia",
        img: "img14.jpg",
        inventors: "Developed by Philips and Sony",
        year: "1982 (for audio), 1985 (for data storage)",
        country: "Netherlands (Philips) & Japan (Sony)",
        working: "A laser reads tiny pits and lands on the disc surface, which represent binary data encoded during manufacturing.",
        link: "https://www.autodesk.com/products/fusion-360/blog/cd-rom/"
    },
    {
        title: "Atari 2600",
        brief: "One of the first widely successful home video game consoles, it popularized interchangeable game cartridges",
        img: "img15.jpg",
        inventors: "Developed by Atari, Inc.; key designers included Jay Miner and Joe Decuir",
        year: "1977",
        country: "USA",
        working: "Uses a microprocessor and ROM cartridges; the console reads game data and sends visual/audio output to a TV.",
        link: "https://en.wikipedia.org/wiki/Atari_2600"
    },
    {
        title: "World Wide Web (WWW)",
        brief: "A system of interlinked hypertext documents accessed via the Internet, revolutionizing how information is shared and consumed",
        img: "img16.jpg",
        inventors: "Tim Berners-Lee",
        year: "1989 (proposal), 1991 (public release)",
        country: "United Kingdom (developed at CERN, Switzerland)",
        working: "Uses HTTP to retrieve linked documents (web pages) identified by URLs, displayed in web browsers via HTML.",
        link: "https://home.cern/science/computing/birth-web"
    },
    {
        title: "iPhone (Smartphone)",
        brief: "The iPhone is a revolutionary smartphone that combines a touch screen, mobile phone capabilities, internet access, and a wide range of applications in a single device, changing how people communicate and interact with technology",
        img: "img18.jpg",
        inventors: "Apple Inc. (led by Steve Jobs, Jonathan Ive, and the Apple team)",
        year: "2007",
        country: "USA",
        working: "The iPhone operates on a touchscreen interface, with a multi-touch display, and uses an operating system (iOS) to run apps, handle communication (calls, messaging), and access the internet.",
        link: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)"
    },
    {
        title: "Facebook",
        brief: "Social media platform that connects people globally, allowing users to share content, communicate, and build communities through posts, messages, and multimedia",
        img: "img19.jpg",
        inventors: "Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes",
        year: "2004",
        country: "USA",
        working: "A social networking platform that became the most widely used in the world, enabling users to connect, share, and communicate online.",
        link: "https://en.wikipedia.org/wiki/History_of_Facebook"
    },
    {
        title: "Neuralink (Brain-Computer Interface)",
        brief: "Neurotechnology company developing brain-machine interfaces (BMIs) to enable direct communication between the human brain and computers, with applications in medical treatments and human augmentation",
        img: "img20.jpg",
        inventors: "Elon Musk and Neuralink team (including Max Hodak, Ben Rapoport)",
        year: "2016 (Founded)",
        country: "USA",
        working: "Neuralink uses tiny, flexible threads implanted in the brain to record and stimulate neural activity, allowing users to control devices or treat neurological disorders by interpreting brain signals.",
        link: "https://en.wikipedia.org/wiki/Neuralink"
    },
    {
        title: "Virtual Reality (Oculus Rift)",
        brief: "A virtual reality headset that immerses users in a 3D, interactive virtual world, enhancing gaming, entertainment, and training experiences through head-tracking and stereoscopic displays",
        img: "img17.jpg",
        inventors: "Oculus VR (led by Palmer Luckey, including Nate Mitchell, Brendan Iribe)",
        year: "2012 (Initial prototype), 2016 (Released to the public)",
        country: "USA",
        working: "Oculus Rift uses sensors and displays to track head movements and deliver immersive visual and auditory experiences, simulating real-world environments for virtual interaction.",
        link: "https://techcrunch.com/2014/03/26/a-brief-history-of-oculus/"
    }
];
const headings = ['1900-1925', '1925-1950', '1950-1975', '1975-2000', '2000-2025'];

function InnLink({ selectedInn }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <p>
        <a href={selectedInn.link} target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {isHovered ? "Rabbithole Time!" : "Learn More?"}
        </a>
      </p>
    );
}

const Catalogue = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedInn, setSelectedInn] = useState(null);

    const handleClose = () => setShowModal(false);

    const handleShow = (inn) => {
        setSelectedInn(inn);
        setShowModal(true);
    };
    
    return (
        <>
            <div className="cat-container">
                {(() => {
                    const chunkArray = (array, chunkSize) => {
                        const chunks = [];
                        for (let i = 0; i < array.length; i += chunkSize) {
                            chunks.push(array.slice(i, i + chunkSize));
                        }
                        return chunks;
                    };
                    const innovationGroups = chunkArray(innovations, Math.ceil(innovations.length / 5));
                    
                    return innovationGroups.map((group, groupIndex) => (
                        <div className="categories" key={groupIndex}>
                            <h2>{headings[groupIndex] || `Group ${groupIndex + 1}`}</h2>

                            <div className="grid">
                                {group.map((inn, index) => (
                                    <div className="card" key={index}>
                                        <img className="card-img" src={`/${inn.img}`} />
                                        <div className="card-body">
                                            <h3>{inn.title}</h3>
                                            <p>{inn.brief}</p>
                                            <button onClick={() => handleShow(inn)}>Open Fact File</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ));
                })()}

                
                {selectedInn && showModal && (
                    <div className="modal-overlay" onClick={handleClose}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleClose}>x</button>
                            <div className="modal-content">
                                <div className="modal-left">
                                    <img src={`/${selectedInn.img}`} alt={selectedInn.title} />
                                </div>
                                <div className="modal-right">
                                    <h2>{selectedInn.title}</h2>
                                    <p><strong>Inventors: </strong>{selectedInn.inventors}</p>
                                    <p><strong>Year: </strong>{selectedInn.year}</p>
                                    <p><strong>Country: </strong>{selectedInn.country}</p>
                                    <p><strong>Working: </strong>{selectedInn.working}</p>
                                    <InnLink selectedInn={selectedInn} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Catalogue;