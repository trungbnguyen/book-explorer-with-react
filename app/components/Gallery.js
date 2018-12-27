import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'https://cdn0.iconfinder.com/data/icons/interface-set-vol-2/50/No_data_No_info_Missing-128.png'
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, imageLinks, infoLink } = item.volumeInfo;
            return (
              <a 
                key={index} 
                className="book"
                href={infoLink}
                targer="_blank"
              >
                <img 
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  alt="book image"
                  className="book-img"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;