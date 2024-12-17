import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu(){
return(

    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th?id=OIP.tLotgCDtzgTdwJcTiXWRCwHaEK&w=161&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>


);

}

export default Menu;