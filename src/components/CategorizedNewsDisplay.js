import React from "react";
import NewsCard from "./NewsCard";

import { getWorldArticles , getScienceArticles } from "../services/CategorizedNewsDisplay";

class CategorizedNewsDisplay extends React.Component {

  state = { loading: true, loadError: false, newsArticles: [] }; 
  
  async componentDidMount() {
    if (this.props.match.params.id === "world") {
      const newsArticles = await getWorldArticles(this.props.state);
      this.setState({ newsArticles, loading: false , loadError: false});
    } else if (this.props.match.params.id === "science") {
      const newsArticles = await getScienceArticles(this.props.state);
      this.setState({ newsArticles, loading: false , loadError: false});
    } else {
      this.setState({ loadError: true});
    }
  }

  async componentDidUpdate() {
    // console.log(_category)
    if (this.props.match.params.id === "world") {
      const newsArticles = await getWorldArticles(this.props.state);
      this.setState({ newsArticles, loading: false , loadError: false});
    } else if (this.props.match.params.id === "science") {
      const newsArticles = await getScienceArticles(this.props.state);
      this.setState({ newsArticles, loading: false , loadError: false});
    } else {
      this.setState({ loadError: true});
    }
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

export default CategorizedNewsDisplay;
