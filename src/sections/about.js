import styles from "components/about";
export default () => (
  <div class={styles.aboutContainer}>
    <div class={styles.picture}>
      <div class={styles.imgContainer}>
        <img src="/assets/portrait.jpg" />
      </div>
    </div>
    <div class={styles.description}>
      <h1>Hassan Bazzi</h1>
      <h3>Engineering - Design - Product</h3>
      <p>
        Hassan is a software engineer and designer with a massive passion for
        performance and easy UX. He started coding at the age of 12, and has
        since been painting a world where performance and amazing user
        experiences don't have to collide. Hassan is also a core contributor on
        the Preact team and focuses his work on Preact CLI. His day to day
        includes building products and engineering startups. Hassan's passion
        for web development took him half-way across the world from Lebanon to
        San Francisco where he hopes to advance the web. He hopes that one day
        emergent markets like Lebanon can enjoy the web at the same level and
        accessibility of advanced countries. Outside of work, Hassan loves to
        play soccer, explore remote places in the world, and tries to keep it
        interesting with novel events and experiences.
      </p>
      <p>
        Hassan's latest focus has been on{" "}
        <a
          href="https://medium.com/@habazzi/what-the-hell-do-we-want-in-life-anyways-b6456bd82f3d"
          target="_blank"
        >
          helping others figure out their dreams.
        </a>
      </p>
    </div>
  </div>
);
