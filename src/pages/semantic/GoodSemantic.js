import React from "react";
import styles from "./semantic.module.css";

function GoodSemanticPage() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navigation}>
            <li className={styles.list}>
              <a className={styles.link} href="/">
                Home
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} href="/about">
                About
              </a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.h1}>Web Accessibility Tutorial Articles</h1>

        <article className={styles.article}>
          <h2 className={styles.h2}>First Article</h2>
          <p className={styles.paragraph}>
            When websites and web tools are properly designed and coded, people
            with disabilities can use them. However, currently many sites and
            tools are developed with accessibility barriers that make them
            difficult or impossible for some people to use. Making the web
            accessible benefits individuals, businesses, and society
          </p>
        </article>

        <article className={styles.article}>
          <h2 className={styles.h2}>Second Article</h2>
          <p className={styles.paragraph}>
            The Web is fundamentally designed to work for all people, whatever
            their hardware, software, language, location, or ability. When the
            Web meets this goal, it is accessible to people with a diverse range
            of hearing, movement, sight, and cognitive ability.
          </p>
        </article>

        <article className={styles.article}>
          <h2 className={styles.h2}>Third Article</h2>
          <p className={styles.paragraph}>
            when websites, applications, technologies, or tools are badly
            designed, they can create barriers that exclude people from using
            the Web. Accessibility is essential for developers and organizations
            that want to create high-quality websites and web tools, and not
            exclude people from using their products and services.
          </p>
        </article>

        <div className={styles["button-section"]}>
          <button className={styles.button}>Access Course</button>
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}

export default GoodSemanticPage;
