import axios from "axios";

const getArticles = source => {
  return axios
    .get(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" +
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

export { getArticles };