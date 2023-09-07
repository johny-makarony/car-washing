import { ReactComponent as MyLogo } from '../../../images/icons/logo-without-star.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#home">
          <MyLogo width="60px" height="60px" className="logo" />
        </a>

        <nav>
          <ul className="nav list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Головна
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Про нас
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Послуги
              </a>
            </li>
            <li className="nav__item">
              <a href="#gallery" className="nav__link">
                Галерея
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-contacts">
          <a href="tel:+380961111111" className="header-contacts__link">
            <svg className="contacts__icon" width="20px" height="20px">
              <use href="./images/icons.svg#tel"></use>
            </svg>
            +38 096 111 11 11
          </a>
          <a href="#reserve" className="btn header__btn">
            Замовити послугу
          </a>
        </div>
      </div>
    </header>
  );
};
