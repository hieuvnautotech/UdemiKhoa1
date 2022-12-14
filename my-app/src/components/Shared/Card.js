import React from "react";

// bài này chỉ cách tạo từng component share

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
