import React, { Component } from "react";
import "../style/NewsCard.css";

import Modal from "react-bootstrap/Modal";

import axios from "axios";



const NewsCard = ({ article }) => {

  // const getArticleComments = source => {
  //   axios
  //     .get(
  //       `https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key=${
  //           process.env.REACT_APP_NEWS_API_KEY
  //         }&offset=0&url=${
  //           article.url
  //         }`
  //     )
  //     .then(res => {
  //       console.log(res.data.results);
  //       return res.data.results;
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //       return alert(err.message);
  //     });
  // };  

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
    // console.log(getArticleComments);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <article className="news-card" key={article.title}>
      <div className="img-container">
        <a href={article.url}>
          <img
            className="test-img"
            alt={article.title}
            src={
              article.multimedia[3]
                ? article.multimedia[3].url.replace("210", "440")
                : "https://via.placeholder.com/440x293?text=No+Image+Provided"
            }
          />
        </a>
      </div>
        <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <p className="byline">{article.byline}</p>
      <button onClick={showModal}>Read More</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{article.abstract}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
      
    </article>
  );
};

export default NewsCard;
