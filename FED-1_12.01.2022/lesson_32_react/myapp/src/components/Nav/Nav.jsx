import s from './index.module.css';
import logo from './logo.jpg';


function Nav() {
    return (
        <nav className={s.main}>
            <a className={s.logo} href="#">
                <img src={logo} alt="" />
            </a>
            <a href="#">ЛОГО</a>
            <ul className={s.main__list}>
                <li>О нас</li>
                <li>Товары</li>
                <li>Контакты</li>
            </ul>
            <ul className={s.main__list}>
                <li>Войти</li>
                <li>Зарегистрироваться</li>
            </ul>
        </nav>
    );
}

export default Nav;
