import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSpan = styled.span`
  color: #cdfae3;
  background-color: rgba(250, 56, 2, 0.87);
  padding: 0 18px 22px;
  border-radius: 14px;
  margin: 18px 0;
  display: inline-block;
  line-height: 0.9;
  transform: rotate(355deg);
  text-shadow: none;

  @media (max-width: 768px) {
    padding: 0 10px 12px;
    font-size: 0.8em;
    border-radius: 10px;
    margin: 10px 0;
  }
`;

const StyledText = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

StyledText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledText;
