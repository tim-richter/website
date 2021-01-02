import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const Card = styled.div<SpaceProps>`
  ${space};
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  transition: box-shadow 0.4s ease-in-out, border 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.text};

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
    border: 1px solid transparent;
  }
`;

Card.defaultProps = {
  padding: '16px 0 0 0',
};

export default Card;
