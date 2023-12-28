import React, { useEffect } from "react";
import "../index.css";
import SingleTest from "./SingleTest";
import { useNavigate, useParams } from "react-router-dom";

function CompleteTest() {
  const { pages } = useParams();
  const navigate = useNavigate();
  if (!pages) {
    navigate("/");
    return <></>;
  }
  const pagesNum = parseInt(pages);

  return (
    <>
      <SingleTest />
      {new Array(pagesNum - 1).fill(0).map(() => (
        <>
          <p style={{ pageBreakAfter: "always" }}>&nbsp;</p>
          <SingleTest />
        </>
      ))}
    </>
  );
}

export default CompleteTest;
