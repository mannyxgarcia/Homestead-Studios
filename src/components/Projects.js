import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Projects extends Component {
  state = {
    images: [],
    count: 1,
    start: 8,
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(
        `https://api.unsplash.com/search/photos&query=furniture?page=${count}&per_page=${start}&client_id=alX6pUr4-xQbO6dowqP-C38KOzTSxxV-oxCT_IDM9IA`,
      )
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ count: this.state.count + 1 });
    axios
      .get(
        `https://api.unsplash.com/search/photos&query=furniture?page=${count}&per_page=${start}&client_id=alX6pUr4-xQbO6dowqP-C38KOzTSxxV-oxCT_IDM9IA`,
      )
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) }),
      );
  };

  render() {
    console.group(this.state);
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.images.map(image => (
            <img alt='pics' src={image.urls.thumb} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Projects;
