import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import axios from 'axios'

import Header from './Components/Header'
import Books from './Components/Books'
import SearchInput from './Components/SearchInput'

class App extends Component {

  //set initial state
  constructor(){
    super();
    this.state = {
      books:[],
      text:'Harry Potter'
    }
  }

  //get books when mounted
  componentWillMount(){
    this.getBooks();
  }

  //get books. then set state. then catch error
  getBooks(){
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.setState({books:response.data.items}, () => {
        console.log(this.state)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  //change text in props, then get books. pass into props.
  handleChange(text){
    this.setState({text:text}, this.getBooks())
  }

  //render component
  render() {
    return (
      <div className="App">
      <Header />
      <Grid>
      	<Row>
      		<Col xs={12} md={12} lg={12}>
            <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text}/>
      			<Books books={this.state.books} />
      		</Col>
      	</Row>
      </Grid>
      </div>
    );
  }
  
}

export default App;
