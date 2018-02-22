import React, { Component } from 'react';
import {Grid, Row, Col, Button, PanelGroup, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

class Books extends Component {
  render() {
  	let bookItems;
  	
  	if(this.props.books){
  		bookItems = this.props.books.map(book => {
  			
  			let title = book.volumeInfo.title
        let thumbnail = book.volumeInfo.imageLinks.thumbnail
        let categories = book.volumeInfo.categories
        let authors = book.volumeInfo.authors
        let publisher = book.volumeInfo.publisher
        let description = book.volumeInfo.description
        let pageCount = book.volumeInfo.pageCount
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink

  			return (
  				  <Panel key={book.id} eventKey={book.id}>
              <Panel.Heading>
                <Panel.Title toggle>{title}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <Grid>
                  <Row>
                    <Col xs={3} md={3} lg={3}>
                      <img src={thumbnail} alt='' />
                    </Col>
                    <Col xs={8} md={8} lg={8}>
                      <ListGroup>
                        <ListGroupItem><strong>Categories : </strong>{categories}</ListGroupItem>
                        <ListGroupItem><strong>Categories : </strong>{authors}</ListGroupItem>
                        <ListGroupItem><strong>Categories : </strong>{publisher}</ListGroupItem>
                        <ListGroupItem><strong>Categories : </strong>{publishedDate}</ListGroupItem>
                        <ListGroupItem><strong>Categories : </strong>{pageCount}</ListGroupItem>
                        <ListGroupItem><strong>Categories : </strong><span className='rating'>{averageRating}</span></ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={11} md={11} lg={11}>
                      <h3>Book description</h3>
                      {description}
                      <hr />
                      <Button href={buyLink} bystyle='primary'>Buy Now</Button>
                    </Col>
                  </Row>
                </Grid>
              </Panel.Body>
            </Panel>
  			)
  		})
  	}

    return (
      <div>
        <PanelGroup accordion id="accordion-example">
      		{bookItems}
      	</PanelGroup>
      </div>
    );

  }
}

export default Books;



