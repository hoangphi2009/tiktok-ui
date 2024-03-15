import Header from '~/Components/Layout/components/Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {/* children in here is Home page */}
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
