import React from "react";
import "./semantic.modules.css";

function BadSemanticPage() {
  return (
    <>
      <div className="header">
        <div className="navigation">
          <div className="link">Home</div>
          <div className="link">About</div>
          <div className="link">Contact Us</div>
        </div>
      </div>
      <div className="main">
        <div className="h1">Web Accessibility Tutorial Articles</div>

        <div className="article">
          <div className="h2">First Article</div>
          <div className="paragraph">
            When websites and web tools are properly designed and coded, people
            with disabilities can use them. However, currently many sites and
            tools are developed with accessibility barriers that make them
            difficult or impossible for some people to use. Making the web
            accessible benefits individuals, businesses, and society.
          </div>
        </div>

        <div className="article">
          <div className="h2">Second Article</div>
          <div className="paragraph">
            The Web is fundamentally designed to work for all people, whatever
            their hardware, software, language, location, or ability. When the
            Web meets this goal, it is accessible to people with a diverse range
            of hearing, movement, sight, and cognitive ability.
          </div>
        </div>

        <div className="article">
          <div className="h2">Third Article</div>
          <div className="paragraph">
            when websites, applications, technologies, or tools are badly
            designed, they can create barriers that exclude people from using
            the Web. Accessibility is essential for developers and organizations
            that want to create high-quality websites and web tools, and not
            exclude people from using their products and services.
          </div>
        </div>

        <div className="button-section">
          <div className="button">Access Course</div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default BadSemanticPage;
