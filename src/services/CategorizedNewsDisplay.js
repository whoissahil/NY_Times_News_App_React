import axios from "axios";

const getWorldArticles = source => {
  return axios
    .get(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
        process.env.REACT_APP_NEWS_API_KEY
    )
    .then(res => {
      return res.data.results;
    })
    .catch(err => {
      console.log(err.message);
      return alert(err.message);
    });
};

const getScienceArticles = source => {
  return axios
    .get(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=" +
        process.env.REACT_APP_NEWS_API_KEY
    )
    .then(res => {
      return res.data.results;
    })
    .catch(err => {
      console.log(err.message);
      return alert(err.message);
    });
};
export { getWorldArticles , getScienceArticles };