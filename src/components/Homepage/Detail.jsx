import { Link } from "react-router-dom";
import BookDetails from "../BookDetails/BookDetails";
import Detail_small from "../Detail_small";
import { useState } from "react";

const Detail = ({ data }) => {
  const [readData, setReadData] = useState([])
  return (
    <div>
      <Detail_small data={data}></Detail_small>
    {/* <BookDetails></BookDetails> */}
    </div>
  );
};

export default Detail;
