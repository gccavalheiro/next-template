import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  width: 100%;
  max-width: 44rem;
  color: ${shade(0.2, '#bbb')};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10rem;
  transition: opacity 0.3s;

  svg {
    margin-right: 8px;
  }
`
