import { Link } from 'react-router-dom';
import page from '../../assets/4o4.jpg';

const ErrorPage = () => {
    return (
        <div className='flex relative items-center justify-center'>
                <img src={page} alt="" />
                <h3 className='absolute font-bold text-2xl underline bottom-1/4 left-[13%]'><Link>Back To Home</Link></h3>
        </div>
    );
};

export default ErrorPage;