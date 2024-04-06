import React from 'react';
import './styles.css'; // Import your CSS file


function Next() {
  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container">
          <div className="small-bold-text banner-text">
            Hassle at Traffic! Making Traffic Easy🎉 →
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo">
            <img src="..//assets/web-logo.png" alt="company logo" />
          </a>
          <div className="nav-links">
            <ul className="flex">
              <li><a href="#" className="hover-links"></a>Parking</li>
              <li><a href="#" className="hover-links"></a>Traffic</li>
              <li><a href="#" className="hover-links">Pedesterian</a></li>
              <li><a href="#" className="hover-links">IVR</a></li>
              <li><a href="#" className="hover-links secondary-button">Officials</a></li>
              <li><a href="#" className="hover-links primary-button">Users</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Drive Efficiently</h1>
            <p>Park&Go revolutionizes the driving challenges and enhances the way drivers drive and navigates in the streets!  </p>
            <a href="#" className="primary-button get-started-btn">Get Started</a>
          </div>
          <div className="header-right">
            <img src="" alt="hero image" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">End To End Centralized Solution to Traffic & Transportation challenges</h2>
            <a href="#" className="secondary-button">See all features <i className="fa-solid fa-right-long"></i></a>
          </div>
          <div className="features-area flex">
            {/* Features cards here */}
          </div>
        </div>
      </section>

      {/* Big Feature Section */}
      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          {/* Big feature content here */}
        </div>
      </section>

      {/* Example Section */}
      <section className="example-section">
        <div className="container">
          <div className="example-header flex">
            <h2 className="example-heading-text">One platform, endless possibilities</h2>
            <a href="#" className="secondary-button">See more examples <i className="fa-solid fa-right-long"></i></a>
          </div>
          <div className="example-area flex">
            {/* Example cards here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container flex cta-section-container">
          <h2>Join the most Centralized and Reliable</h2>
          <p>See why Park&Go has intended To revolutionizes the Traffic </p>
          <a href="#" className="primary-button ">Get Started </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container flex footer-container">
          {/* Footer content here */}
        </div>
      </footer>

      {/* Subfooter */}
      <div className="subfooter">
        <div className="container flex subfooter-container">
          {/* Subfooter content here */}
        </div>
      </div>
    </>
  );
}

export default Next;
