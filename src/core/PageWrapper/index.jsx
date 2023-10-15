import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import './pageWrapper.scss';

const PageWrapper = () => {
    
    return (
        <>
        <nav>
            <ul className='s-navbar'>
                <li className='s-nav-item s-left'><Link to="/">Home</Link> </li>
                <li className='s-nav-item s-right'><Link to="/signup">Sign up</Link></li>
                <li className='s-nav-item s-right'><Link to="/login">Login</Link></li>
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