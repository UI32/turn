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
}) => {
  const t = useTranslations();
  return (
    <div className="quote-alt">
      <div className="quote-alt-img">
        <img src={authorImage} alt={author} />
      </div>
      <div className="quote-alt-info">
        <p className="text-xl">{t(quote)}</p>
        <div className="quote-alt-extra">
          <div className="captions">
            <p className="caption">{author}</p>
            <p className="caption">{t(position)}</p>
          </div>
          <img
            src={companyImage}
            alt={company}
            width={companyWidth}
            height={companyHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
