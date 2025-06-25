import React, {useState} from 'react';
import './Submissions.css'

function Submissions(){
    
    const [formData, setFormData] = useState({
    title: '',
    brief: '',
    img: '',
    inventors: '',
    year: '',
    country: '',
    working: ''
  });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData(p => ({...p, [name]:value}));
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted innovation:", formData);
        alert("Innovation submitted successfully!");
        
        setFormData({ title: '', brief: '', img: '', inventors: '', year: '', country: '', working: '' });
    };

    return(
        <>
        <div className='submissions-page'>
            <div className="submission-container">
                <h2>Submit Your Innovation</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                    <input type="text" name="brief" placeholder="Brief Description" value={formData.brief} onChange={handleChange} required />
                    <input type="text" name="img" placeholder="Image file name or URL" value={formData.img} onChange={handleChange} required />
                    <input type="text" name="inventors" placeholder="Inventor(s)" value={formData.inventors} onChange={handleChange} required />
                    <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                    <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
                    <textarea name="working" placeholder="How it works" value={formData.working} onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
        </div>
    </div>
        </>);
}

export default Submissions