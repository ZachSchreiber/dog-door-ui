import React from "react";
import cn from "classnames";

import "./article.scss";

const block = "article";

const Article = ({ image, title, content, isPaw = false, imageStyleName }) => {
  return (
    <div className={block}>
      <div className={`${block}__image-container`}>
        <img
          src={image}
          className={cn(
            `${block}__image`,
            isPaw && `${block}__image--paw`,
            imageStyleName
          )}
          alt={title}
        />
      </div>
      <h3 className={`${block}__title`}>{title}</h3>
      <p className={`${block}__content`}>{content}</p>
    </div>
  );
};

export default Article;
