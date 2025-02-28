'use client';
import Head from 'next/head'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work"
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Head>
        <title>Dan | Full-Stack Developer</title>
        <meta name="description" content="Welcome to my developer portfolio. I specialize in web development, AI integration." />
        <meta name="keywords" content="developer, portfolio, web development, Back-end Developer, AI Integration, software engineer" />
        <meta name="author" content="Dan" />
        <meta property="og:title" content="Dan | Full-stack Developer" />
        <meta property="og:description" content="Explore my projects and skills as a web developer." />
        <meta property="og:image" content="/public/Dinh.jpg" />
        <meta property="og:url" content="https://mm-pro.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dan | Full-stack Developer" />
        <meta name="twitter:description" content="Check out my work and expertise in Software development." />
        <meta name="twitter:image" content="/public/Dinh.jpg" />
    </Head> 
    <Navbar />
    <Header />
    <About />
    <Services />
    <Career />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}
