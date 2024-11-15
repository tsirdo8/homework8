import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.theme === "light" ? "#333" : "#fafafa")};
  position: absolute;
  top: 20px;
  right: 20px;
`;

function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <ToggleButton
      onClick={() => setIsDarkMode(!isDarkMode)}
      theme={isDarkMode ? "dark" : "light"}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </ToggleButton>
  );
}

export default ThemeToggle;
