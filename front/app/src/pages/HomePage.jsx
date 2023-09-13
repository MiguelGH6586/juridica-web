import { useState } from 'react';
import PageNav from '../components/PageNav';
import UserFormData from '../components/UserFormData';
import styles from './HomePage.module.css';
function HomePage() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <main>
        <PageNav></PageNav>
        <section className={styles.sectionHero}>
          <div className={styles.hero}>
            <div className={styles.heroTextBox}>
              <h1 className={styles.headingPrimary}>
                Resuelve tus problemas juridicos y no pierdas tiempo en tramites
                imnecesarios.
              </h1>
              <p className={styles.heroDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                inventore velit animi numquam tempore explicabo error aliquid,
                exercitationem odio? Corporis laudantium et quis praesentium
                sapiente quasi dicta quam voluptate tempore?{' '}
              </p>
              <button
                className={styles.btn}
                onClick={() => setToggle(toggle => !toggle)}
              >
                Apela y ahorra
              </button>
              {/* <a href="#">Learn more</a> */}
            </div>
            <div className="heroImgBox">
              <img
                className={styles.heroImge}
                src="src/assets/img/hero.jpg"
                alt="Caotic trafic"
              />
            </div>
          </div>
        </section>
      </main>
      <UserFormData toggle={toggle} setToggle={setToggle} ></UserFormData>
    </>
  );
}

export default HomePage;
