import React, { useState } from "react";
import styles from "./semantic.module.css";

function BadSemanticPage() {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    console.log("Form submitted");
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navigation}>
          <div className={styles.link}>Home</div>
          <div className={styles.link}>About</div>
          <div className={styles.link}>Contact Us</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.h1}>Web Accessibility Tutorial Articles</div>

        <div className={styles.article}>
          <div className={styles.h2}>First Article</div>
          <div className={styles.paragraph}>
            When websites and web tools are properly designed and coded, people
            with disabilities can use them. However, currently many sites and
            tools are developed with accessibility barriers that make them
            difficult or impossible for some people to use. Making the web
            accessible benefits individuals, businesses, and society.
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.h2}>Second Article</div>
          <div className={styles.paragraph}>
            The Web is fundamentally designed to work for all people, whatever
            their hardware, software, language, location, or ability. When the
            Web meets this goal, it is accessible to people with a diverse range
            of hearing, movement, sight, and cognitive ability.
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.h2}>Third Article</div>
          <div className={styles.paragraph}>
            when websites, applications, technologies, or tools are badly
            designed, they can create barriers that exclude people from using
            the Web. Accessibility is essential for developers and organizations
            that want to create high-quality websites and web tools, and not
            exclude people from using their products and services.
          </div>
        </div>

        <div className={styles["button-section"]}>
          <div className={styles.button}>Access Course</div>
        </div>

        <form className={`${styles.form} form`} onSubmit={handleSubmit}>
          <p>Fill form to subscribe: </p>
          <input
            className={error ? styles.inputError : styles.input}
            placeholder="Email e.g test@me.com"
          />
          <button className={`${styles.button} button`}>Subscribe</button>
        </form>
      </div>
      <div className={styles.footer}>Footer</div>
    </>
  );
}

export default BadSemanticPage;
