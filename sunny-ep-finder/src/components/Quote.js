import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Quote.css";

const Quote = () => {
  const [quote, setQuote] = useState();
  const [whoseQuote, setWhoseQuote] = useState();
  const [seriesAndEp, setSeriesAndEp] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://sunnyquotes.net/q.php?random"
        )
        .then(({ data }) => {
          setQuote(data.sqQuote);
          setWhoseQuote(data.sqWho);
          setSeriesAndEp(data.sqEp);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="Quote">
      <p className="quote">{quote}</p>
      <p className="person">
        -{whoseQuote}-&nbsp;{seriesAndEp}
      </p>
    </div>
  );
};

export default Quote;
