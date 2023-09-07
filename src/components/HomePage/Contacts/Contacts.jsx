export const Contacts = () => {
  return (
    <section className="section" id="contacts">
      <div className="container">
        <div className="contacts">
          <div className="contacts--left-side">
            <div>
              <h2 className="section__title">Контакти</h2>
              <address className="address">
                <ul className="address list">
                  <li className="address__item">
                    <a
                      href="https://goo.gl/maps/EBPHhEcK4U8pQuqV9"
                      target="_blank"
                      className="address__link"
                      rel="noreferrer"
                    >
                      м.Київ, Карельський провулок, 7
                    </a>
                  </li>
                  <li className="address__item">
                    <a href="tel:+380961111111" className="address__link">
                      +38 096 111 11 11
                    </a>
                  </li>
                </ul>
              </address>

              <h3 className="contacts__title--schedule">Графік роботи:</h3>
              <p className="contacts__text--schedule">
                ПН-НД: з 09:00 до 21:00
              </p>
            </div>
          </div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.0810901572277!2d30.633539638669877!3d50.45069572975404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5a4c17b716f%3A0x8d370322e6b061ed!2z0JDQstGC0L7QvNC40LnQutCw!5e0!3m2!1sru!2sua!4v1690836835781!5m2!1sru!2sua"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contacts--right-side"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
