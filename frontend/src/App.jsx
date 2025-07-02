
import About from "./Pages/About";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="google64e9e9010771d280" />
      </Helmet>
       <Helmet>
        <title>Tharun Ravi | MERN Stack Developer</title>
        <meta name="google-site-verification" content="google64e9e9010771d280.html" />
        <meta name="description" content="Explore MERN Stack projects and professional journey of Tharun Ravi." />
        <meta property="og:title" content="Tharun Ravi Protifilo" />
        <meta property="og:image" content="https://ravi-tharun-protifilo.netlify.app/images/protifilo-preview.png" />
        <meta property="og:url" content="https://ravi-tharun-protifilo.netlify.app" />
        <meta property="og:type" content="website" />
      </Helmet>

    <About/>
    </>
  );
}

export default App;
