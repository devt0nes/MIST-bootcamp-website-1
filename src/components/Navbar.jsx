import { Link } from 'react-router-dom';
import './components.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <div className="navbar-brand">
                    <Link to="/">TechTimes</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/catalogue">Catalogue</Link>
                    <Link to="/submissions">Submissions</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;