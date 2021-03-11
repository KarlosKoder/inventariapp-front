import Head from "next/head";
import NavComponent from "../Components/NavComponent/NavComponent";
import { Col, Container, Row, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { GrDocumentCsv, GrAdd } from 'react-icons/gr';
import NavButtonComponent from "../Components/NavButtonComponent/NavButtonComponent"
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import CardComponent from "../Components/CardComponent/CardComponent";
import styles from "../styles/product.module.scss"


export default function Products() {

  const cardInfo = [
    {
      image_link: "/assets/p1.jpg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla,Hermosa chamarra de mezclilla,Hermosa chamarra de mezclilla,Hermosa chamarra de mezclilla,Hermosa chamarra de mezclilla,Hermosa chamarra de mezclilla"
    },

    {
      image_link: "/assets/p2.jpg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/assets/p3.jpg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/assets/p4.jpg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje"
    },
    {
      image_link: "/backregister.svg",
      title: "Chamarra de mezclilla",
      price: "100 MXN",
      inventory: "60 piezas",
      condition: "New",
      brand: "Meeko",
      link: "http://www.tutienda.com",
      description: "Hermosa chamarra de mezclilla con la aplicación de encaje,"
    },




  ];

  const Products = (props) => {
    const [products, setProducts] = useState(props.products)
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <NavComponent className={styles.navComp} />





      <Container className={styles.texture}>


        <Row className={styles.productsTop}>

          <Container className={`m-r ${styles.productContainer}`}>
            <Row className={styles.productHeader}>

              <Col md={3} className={`d-none d-sm-block ${styles.productTop}`}>

                <div className={styles.icon}>
                  <Nav.Link onClick={event => window.location.href = '/'} className={styles.productButton} href="#home">

                    <GrAdd className={styles.productButton} />
                  </Nav.Link>

                  <Nav.Link onClick={event => window.location.href = '/'} className={styles.productButton} href="#home">

                    <GrDocumentCsv className={styles.productButton} />
                  </Nav.Link>


                </div>




              </Col>
              <Col  md={6}>

                <h2>
                  Tus productos
                      </h2>

              </Col>

              <Col className= {styles.search} md={3}>
                <SearchComponent />
              </Col>

            </Row>


            <Row>
              {



                cardInfo.map(item => {
                  return (
                    <Col className={styles.productBottom} xs={12} md={2}>
                      <CardComponent cardData={item} />
                    </Col>
                  )
                })
              }


            </Row>
          </Container>

          <Container>
            <Row>
              <Col className={"d-block d-sm-none"}>
                <NavButtonComponent />

              </Col>

            </Row>

          </Container>




        </Row>
      </Container>


      <footer className="footer">
       
      </footer>
    </div>
  );
}