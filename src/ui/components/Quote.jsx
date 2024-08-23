import React from "react";
import useTranslations from "../../hooks/useTranslations";

const Quote = ({
  authorImage,
  author,
  quote,
  position,
  companyImage,
  company,
  companyHeight,
  companyWidth,
  quoteClass = "quote-m",
}) => {
  const t = useTranslations();
  return (
    <div className="quote">
      <div className="quote-author">
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
            <p className="text-s">{author}</p>
            <p className="text-s">{t(position)}</p>
          </div>
        </div>
      </div>
      <div className="quote-content">
        <p className={quoteClass}>{t(quote)}</p>
      </div>
    </div>
  );
};

export default Quote;
