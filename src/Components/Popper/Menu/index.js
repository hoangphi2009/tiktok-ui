import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => { };
function Menu({ children, items = [], onchange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onchange(item)
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            // visible
            // trái ngang phải cao
            offset={[10, 10]} 
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
