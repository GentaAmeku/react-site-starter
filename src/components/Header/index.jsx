import React from 'react';
import { LayoutBox, Container } from '../../shared';
import { AppBar } from './styles';

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <LayoutBox minHeight="80px" left>
          React Site Starter
        </LayoutBox>
      </Container>
    </AppBar>
  );
};

export default Header;
