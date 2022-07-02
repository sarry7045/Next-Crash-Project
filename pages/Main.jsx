import Image from "next/image";

const Main = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="navbar">
          <div className="logo">
            <Image src="/img/logo.svg" height={0} width={0} />
          </div>
          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-link active">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  about
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  services
                </a>
              </li>
              <li>
                <a href="#package" className="nav-link">
                  package
                </a>
              </li>
              <li>
                <a href="#gallery" className="nav-link">
                  gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Start Home Section */}
      <section className="home">
        <div className="container">
          <div className="home-img">
            <Image src="/img/home-img.png" height={0} width={0} />
          </div>
          <div className="home-content">
            <h1>
              Your big day
              <br />
              <span>in style</span>
            </h1>
            <p>
              Come see our bride's corner and take the opportunity to schedule
              your date.
            </p>
            <a href="#" className="btn btn-outline">
              <i className="fab fa-whatsapp"></i>
              Schedule your time
            </a>
          </div>
        </div>
      </section>
      {/* End Home Section */}

      {/* Start About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h1>our story</h1>
            <span>studio hair</span>
          </div>
          <div className="about-detail">
            <div className="about-detail-content">
              <div className="about-img">
                <Image src="/img/about-img.jpg" height={0} width={0} />
              </div>
              <div className="about-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit
                  possimus a sint
                </p>
                <p>
                  Obcaecati porro accusamus iusto rem aperiam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Velit possimus a sint
                </p>
                <p>
                  Eligendi nostrum architecto quibusdam. Neque odio enim quasi
                  ad culpa similique quas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Start Services Section */}
      <section className="services" id="services">
        <div className="services-content">
          <div className="section-title">
            <h1>services</h1>
            <span>what we do</span>
          </div>
          <div className="services-content-description">
            <div className="box">
              <div className="inner">
                <Image src="/img/services/manicure.png" height={0} width={0} />
                <p>manicure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image src="/img/services/pedicure.png" height={0} width={0} />
                <p>padicure</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image src="/img/services/makeup.png" height={0} width={0} />
                <p>makeup</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image src="/img/services/hairstyle.png" height={0} width={0} />
                <p>hairstyle</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image src="/img/services/haircut.png" height={0} width={0} />
                <p>haircut</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image
                  src="/img/services/eyebrow design.png"
                  height={0}
                  width={0}
                />
                <p>eyebrow design</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image src="/img/services/waxing.png" height={0} width={0} />
                <p>waxing</p>
              </div>
            </div>
            <div className="box">
              <div className="inner">
                <Image
                  src="/img/services/skin cleansing.png"
                  height={0}
                  width={0}
                />
                <p>skin cleansing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
      {/* Start Package Section */}
      <section className="package" id="package">
        <div className="section-title">
          <h1>promotional packages</h1>
          <span>for your bride's day</span>
        </div>
        <div className="package-cards">
          <div className="card">
            <div className="card-title">
              <h1>Bronze</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>hair removal</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>eyebrow design</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>skin cleansing</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button className="btn">&#x20B9; 500</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Silver</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>skin cleansing</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button className="btn">&#x20B9; 2000</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Gold</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>skin cleansing</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-times-square x-icon"></i>
                <p className="not">
                  <span>table fruit</span>
                </p>
              </div>
              <button className="btn">&#x20B9; 1500</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h1>Diamond</h1>
            </div>
            <div className="card-items">
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>Hairstyle</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>makeup</p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  nails<span>(traditional french)</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>hair removal</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>eyebrow design</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>skin cleansing</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>reserved bridal room</span>
                </p>
              </div>
              <div className="item">
                <i className="far fa-check-square check-icon"></i>
                <p>
                  <span>table fruit</span>
                </p>
              </div>
              <button className="btn"> &#x20B9; 2000</button>
            </div>
          </div>
        </div>
      </section>
      {/* End Package Section */}
      {/*  Start Gallery Section  */}
      <section className="gallery" id="gallery">
        <div className="gallery-content">
          <div className="section-title">
            <h1>gallery</h1>
            <span>the princesses of our instagram</span>
          </div>
          <div className="gallery-list-img">
            <div className="gallery-img">
              <Image src="/img/img-insta/photo1.png" height={0} width={0} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo2.png" height={200} width={250} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo3.png" height={250} width={200} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo4.png" height={200} width={200} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo5.png" height={200} width={200} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo6.png" height={200} width={200} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo7.png" height={200} width={200} />
            </div>
            <div className="gallery-img">
              <Image src="/img/img-insta/photo8.png" height={200} width={200} />
            </div>
          </div>
          <button className="btn">see more</button>
        </div>
      </section>
      {/* End Gallery Section */}
      {/* Start Footer Section */}
      <footer className="footer" id="contact">
        <div className="footer-list">
          <div className="footer-data">
            <h1>
              <a href="">
                <Image src="/img/logo.svg" height={200} width={200} />
              </a>
            </h1>
            <div className="footer-data-social">
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-data">
            <h2>address</h2>
            <p>
              Alharm - St 26
              <br /> Giza - Egypt
            </p>
          </div>
          <div className="footer-data">
            <h2>We Opened</h2>
            <p>
              Monday To Friday <br /> From 09:00 To 18:00
            </p>
          </div>
          <div className="footer-data">
            <h2>Contact</h2>
            <p>(20) 1111-222-333</p>
            <p>(20) 4444-555-666</p>
          </div>
        </div>
        <div className="copy">
          <p>&copy; All Rights Reserved</p>
          <span>Created by 🤎 Web Trend</span>
        </div>
      </footer>
      {/*  End Footer Section */}
    </>
  );
};
export default Main;
