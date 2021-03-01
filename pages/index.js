import Head from "next/head";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import AboutSComponent from "../Components/AboutScomponent/AboutSComponent"
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import ServiciosComponent from "../Components/ServiciosComponent/ServiciosComponent";
import HeaderContainer from "../Components/HeaderContainer/HeaderContainer";
import NavComponent from "../Components/NavComponent/NavComponent";


export default function Home() {
  return (
    <div>
      <Head>
        <title>InventariApp</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <NavComponent/>
     
      <HeaderContainer />
      <AboutComponent />
      <ServiciosComponent />
      <AboutSComponent />
  
      <FooterComponent />

      

      
      <footer className="footer">
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </footer>
    </div>
  );
}
