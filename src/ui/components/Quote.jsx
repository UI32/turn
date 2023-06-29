import React from "react";
import useTranslations from "../../hooks/useTranslations";
import QuoteSm from "../components/QuoteSm";

const Quote = ({
  authorImage,
  author,
  quote,
  position,
  companyImage,
  company,
  companyHeight,
  companyWidth,
}) => {
  const t = useTranslations();
  return (
    <>
      <div className="hide-in-tablet">
        <QuoteSm
          author={author}
          authorImage={authorImage}
          quote={quote}
          position={position}
          company={company}
          companyImage={companyImage}
          companyWidth={96}
          companyHeight={34}
        />
      </div>
      <div className="show-in-tablet">
        <div className="quote">
          <h2 className="beta">{t(quote)}</h2>
          <div className="quote-info">
            <div className="quote-img">
              <img src={authorImage} alt={author} />
            </div>
            <div className="quote-extra">
              <img
                src={companyImage}
                alt={company}
                width={companyWidth}
                height={companyHeight}
              />
              <div className="captions">
                <p className="caption">{author}</p>
                <p className="caption">{t(position)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
