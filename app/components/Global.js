import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import Gallery from './Gallery';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    axios.get(`${BASE_URL}${this.state.query}`)
         .then(res => {
           let { items } = res.data;
           this.setState({items})
         });
  }

  render() {
    return (
      <div className="Global">
        <h2>Book Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}

export default Global;