import PropTypes from 'prop-types'
import React from 'react'

// bài này chỉ cách truyền props cho css, và tạo biến css

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(255, 255, 255,0)',
    textColor: '#ff6a95',
}

Header.prototypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header