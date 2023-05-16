import React from 'react';
import Man from "../image/3d monkey.png"
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img  alt='logo' className='logo' src={Man} />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Student list</Link></li>
                        <li><Link to="/add">Add Student</Link></li>
                        
                        
                        <li> <Link onClick={logout} to="/signup">Logout ({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup"><span className='sin_up'>Sign Up</span></Link></li>
                        <li><Link to="/login"><span className='sin_up'>Login</span></Link></li>
                    </ul>
            }


        </div>
    )
}

export default Nav;