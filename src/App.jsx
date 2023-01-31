import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">shibe.online</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Loading() {
    return <p>Loading...</p>;
  }
  
  function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
      return <Loading />;
    }
    return (
      <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
          return (
            <div key={url} className="column is-3">
              <Image src={url} />
            </div>
          );
        })}
      </div>
    );
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
      fetchImages().then((urls) => {
        setUrls(urls);
      });
    }, []);
    return (
      <main>
        <section className="section">
          <div className="container">
            <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Dog images are retrieved from shibe.online API</p>
          <p>
            <a href="http://shibe.online/">Donate to shibe.online API</a>
          </p>
          <p>日本大学文理学部情報科学科 Webプログラミング 演習3</p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;