import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4c4e7875ddc9369e4a72a458cb9af1f1~c5_300x300.webp?lk3s=a5d48078&x-expires=1714413600&x-signature=%2FCaEwS%2Fh%2FYXkgeLMG9GlNr%2FJM34%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thi Kim Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenthikimhoa</span>
            </div>
        </div>
    );
}

export default AccountItem;