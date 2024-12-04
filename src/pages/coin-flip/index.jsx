import React, { useState } from "react";
import "./index.scss";
import { FaArrowRotateRight } from "react-icons/fa6";

const CoinFlip = () => {
  const [clicked, setClicked] = useState(false);
  const [randomValue, setRandomValue] = useState(0);
  const [flipedImg, setFlipedImg] = useState(false);
  const [questionCoin, setQuestionCoin] = useState(true);
  const [resultCoin, setresultCoin] = useState(false);

  const flipCoin = function () {
    setQuestionCoin(false);
    setTimeout(() => {
      setFlipedImg(true);
    }, 100);
    setTimeout(() => {
      setFlipedImg(false);
      setRandomValue(Math.floor(Math.random() * 2));
      setresultCoin(true);
    }, 2700);
  };

  const reloadCoinPage = function () {
    setRandomValue(0);
    setresultCoin(false);
    setQuestionCoin(true);
  };
  return (
    <div className="coin_flip">
      {questionCoin ? (
        <>
          <h1>Make A Wish And Flip !</h1>
          <div className="coin_flip_button coin" onClick={() => flipCoin()}>
            ?
          </div>
        </>
      ) : (
        ""
      )}

      <div>
        <div className="after_coin_fliped">
          {flipedImg ? (
            <img
              className="flipping_img"
              src="https://1b-f.s3.eu-west-1.amazonaws.com/a/146196-A15C1B6A-D5AE-41A2-9C20-912324FA259B-0-1598508964.gif"
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        {resultCoin ? (
          <>
            <div className="result_coin coin">{randomValue ? "Yes" : "No"}</div>
            <div className="flip_again">
              <span>Make Another Wish</span>{" "}
              <FaArrowRotateRight onClick={() => reloadCoinPage()} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CoinFlip;
