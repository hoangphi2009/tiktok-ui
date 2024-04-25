import Header from '~/Components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                {/* children in here is Home page */}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
