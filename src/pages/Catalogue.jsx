import React, { useState } from "react";
import './Catalogue.css';

const innovations = [
    {
        title: "Wright Flyer",
        brief: "First sustained flight by a manned heavier-than-air powered and controlled aircraft",
        img: "img1.jpg",
        inventors: "Wright brothers",
        year: 1903,
        country: "USA",
        working: "	Uses wings (airfoils) for lift, engines for thrust, and control surfaces for direction.",
    },
    {
        title: "Audion (Triode Vaccum Tube)",
        brief: "Electronic detecting or amplifying vacuum tube, amplified electrical signals, and was key for radio and early electronics",
        img: "img2.jpg",
        inventors: "Lee De Forest",
        year: 1906,
        country: "USA",
        working: "A heated filament emits electrons; a grid controls their flow to the plate, amplifying signals."
    },
    {
        title: "Electrocardiogram (ECG/EKG)",
        brief: "A medical device that records the electrical activity of the heart to diagnose various cardiac conditions",
        img: "img3.jpg",
        inventors: "Willem Einthoven",
        year: 1903,
        country: "Netherlands",
        working: "Electrodes on the skin detect electrical signals from the heart and graph them as waveforms."
    },
    {
        title: "Neon Lighting",
        brief: "A type of gas-discharge light that produces bright, colorful illumination using electrified neon gas",
        img: "img4.jpg",
        inventors: "Georges Claude",
        year: 1910,
        country: "France",
        working: "Electric current passes through neon gas in a sealed tube, causing it to glow brightly."
    },
    {
        title: "FM Radio (Frequency Modulation Radio)",
        brief: "A radio broadcasting system that uses frequency modulation to provide clearer sound with reduced static",
        img: "img8.jpg",
        inventors: "Edwin Howard Armstrong",
        year: 1933,
        country: "USA",
        working: "Encodes audio signals by varying the frequency of the carrier wave, improving sound quality and noise resistance."
    },
    {
        title: "ENIAC (Electronic Numerical Integrator and Computer)",
        brief: "The first general-purpose, fully electronic digital computer, used primarily for military calculations",
        img: "img5.jpg",
        inventors: "J. Presper Eckert & John Mauchly",
        year: 1945,
        country: "USA",
        working: "Used vacuum tubes to perform arithmetic and logic operations by switching circuits on and off electronically."
    },
    {
        title: "Colossus (Codebreaking Computer)",
        brief: "The world’s first programmable, electronic, digital computer, used to break German ciphers during WWII",
        img: "img7.jpg",
        inventors: "Tommy Flowers and his team at the Post Office Research Station",
        year: 1944,
        country: "United Kingdom",
        working: "Used vacuum tubes to perform high-speed logical operations on encrypted teleprinter data to decode messages."
    },
    {
        title: "First Nuclear Reactor (Chicago Pile-1)",
        brief: "The first human-made nuclear reactor, it demonstrated a controlled, self-sustaining nuclear chain reaction",
        img: "img6.jpg",
        inventors: "Enrico Fermi and his team",
        year: 1942,
        country: "USA",
        working: "Uranium fuel initiates a chain reaction; graphite slows neutrons, and control rods regulate the reaction."
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },
    {
        title: "",
        brief: "",
        img: "",
        inventors: "",
        year: 1,
        country: "",
        working: ""
    },    
];
const headings = ['1900-1925', '1925-1950', '1950-1975', '1975-2000', '2000-2025'];

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
                    const innovationGroups = chunkArray(innovations, Math.ceil(innovations.length / 4));
                    
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
                            <button className="modal-close" onClick={handleClose}>×</button>
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