import React, { Component } from "react";
import NewsCard from "./NewsCard";

import { getArticles } from "../services/TopStoriesAPI";

import Modal from "react-bootstrap/Modal";

class NewsDisplay extends Component {
  state = { loading: true, loadError: true, newsArticles: [] };

  async componentDidMount() {
    const newsArticles = await getArticles(this.props.state);
    this.setState({ newsArticles, loading: false , loadError: false});
  }
  render() {
    let { loading, loadError } = this.state;
    //If the data was successfully fetched render news
    if (!loading && !loadError) {
      return (
        <main className="news-display" id="main-content">
          {this.state.newsArticles.map(article => {
            return <NewsCard article={article} />;
          })} 
        </main>
      );
    } else if (loadError) {
      return <p>Failed to load content.</p>;
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default NewsDisplay;
