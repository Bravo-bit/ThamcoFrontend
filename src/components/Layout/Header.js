import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </Fragment>
    );
};

export default Header;