import { Suspense } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import './pageWrapper.scss';

const PageWrapper = () => {
    const navigate = useNavigate();
    const isLoggedIn = false;

    return (
        <>
        <nav>
            <ul className='navbar'>
                <li className='nav-item left'><Link to="/">Home</Link> </li>
                <li className='nav-item right'><Link to="/signup">Sign up</Link></li>
                <li className='nav-item right'><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <main>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </main>
        </>
    )
}

export default PageWrapper;