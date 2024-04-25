import Header from '~/Components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {/* children in here is Home page */}
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
