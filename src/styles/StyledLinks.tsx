import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkProps extends LinkProps {
  $isFullLink?: boolean;
}
export const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white;
     border-radius: 30px;
     ;`}
`;
export const LoadingMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  /* Ajoutez d'autres styles personnalisés si nécessaire */
`;
