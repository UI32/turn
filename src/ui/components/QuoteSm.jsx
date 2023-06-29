import React from "react";
import useTranslations from "../../hooks/useTranslations";

const QuoteSm = ({
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
    <div className="quote-sm">
      <div className="quote-sm-img">
        <img src={authorImage} alt={author} />
      </div>
      <div className="quote-sm-info">
        <p className="text-xl">{t(quote)}</p>
        <div className="quote-sm-extra">
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

export default QuoteSm;
