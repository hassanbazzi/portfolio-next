import styles from "components/about";
import Typewriter from "components/Typewriter";
export default () => (
  <div class={styles.aboutContainer}>
    <div class={styles.picture}>
      <div class={styles.imgContainer}>
        <img alt="Portrait" src="/assets/portrait.jpg" />
      </div>
    </div>
    <div class={styles.description}>
      <h1>Hassan Bazzi</h1>
      <Typewriter>Engineering - Product - Fullfillment Coach</Typewriter>
      <p>
        Engineering leader with 15+ years of experience. Hassan has built
        products in a wide variety of spectrums ranging from entertainment to
        finance. Hassan is obsessed with building workplaces where dreamers can
        strive. He also has deep hands-on experience in all pieces of software
        engineering. Hence, Hassan can build and lead projects that range from
        networking, distributed cloud, back-end, and front-end development.
      </p>
      <p>
        Hassan's latest focus has been on{" "}
        <a
          href="https://medium.com/@habazzi/what-the-hell-do-we-want-in-life-anyways-b6456bd82f3d"
          rel="noopener"
          target="_blank"
        >
          helping others figure out their dreams.
        </a>
      </p>
    </div>
  </div>
);
