import Head from "next/head";
import NavComponent from "../Components/NavComponent/NavComponent";
import { Container, Row, Col } from "react-bootstrap";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import CardComponent from "../Components/CardComponent/CardComponent";
import styles from "../styles/product.module.scss"


export default function Products() {
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

      <NavComponent />

      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className={styles.productHeader}>
              <button className="">Nuevo Producto</button>
              <button className="">Crea tu CSV</button>

              <h2>
                Tus productos
                </h2>

            </div>

            <SearchComponent />

          </Col>

        </Row>
        <Row>
          <Col >
            <CardComponent />

          </Col>

        </Row>
      </Container>





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