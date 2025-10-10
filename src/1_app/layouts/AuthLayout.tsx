import { ToastContainer } from 'react-toastify';
import s from './AuthLayout.module.scss';
export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className={s.body}>
            {children}
            <ToastContainer/>
        </div>
    );
}