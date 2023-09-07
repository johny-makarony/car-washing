export const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">Про нас</h2>
        <p className="about__text">
          Ми - команда професіоналів, які присвятили себе догляду за вашими
          автомобілями. Наша мета - зробити ваш транспортний засіб як новий і
          забезпечити вам найкращий досвід обслуговування.
        </p>

        <h3 className="features__title">Чому саме ми?</h3>
        <ul className="features__list">
          <li>
            <p className="features__text">
              <strong className="features__strong-text">
                Досвід та професіоналізм.&nbsp;
              </strong>
              Наша команда складається з висококваліфікованих фахівців, які
              знають, як зробити ваш автомобіль сяючим і чистим.
            </p>
          </li>
          <li>
            <p className="features__text">
              <strong className="features__strong-text">
                Сучасне обладнання.&nbsp;
              </strong>
              Ми використовуємо найновішу технологію та обладнання, щоб
              забезпечити вам найкращий результат.
            </p>
          </li>
          <li>
            <p className="features__text">
              <strong className="features__strong-text">
                Екологічність.&nbsp;
              </strong>
              Ми пильно стежимо за екологічністю наших послуг та використовуємо
              екологічно чисті засоби для догляду за автомобілем.
            </p>
          </li>
          <li>
            <p className="features__text">
              <strong className="features__strong-text">
                Зручний сервіс.&nbsp;
              </strong>
              Ми розуміємо, що ваш час дорогоцінний, тому ми пропонуємо швидке
              та зручне обслуговування без зайвої затримки.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
