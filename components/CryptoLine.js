import React from 'react';
import propTypes from 'prop-types';
import { SvgUri } from 'react-native-svg';
import styled from 'styled-components/native';

const CryptoLine = ({ title, price, symbol, logoUri }) => {
  return (
    <Container>
      <CurrencyItem>
        <SvgUri
          width="60px"
          height="60px"
          uri={logoUri}
        />
        <CurrencyInfo>
          <CurrencyTitle>{title}</CurrencyTitle>
          <CurrencyPrice>{price}</CurrencyPrice>
        </CurrencyInfo>
        <CurrencySymbol>{symbol}</CurrencySymbol>
      </CurrencyItem>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin: 12px 0;
`;

const CurrencyItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CurrencyInfo = styled.View`
  flex: 1;
`;

const CurrencyTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
  margin-left: 18px;
`;

const CurrencyPrice = styled.Text`
  font-size: 18px;
  color: #8b979f;
  margin-left: 18px;
`;

const CurrencySymbol = styled.Text`
  background: #E9F5FF;
  border-radius: 50px;
  font-weight: 600;
  color: #4294ff;
  font-size: 16px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;

CryptoLine.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  symbol: propTypes.string.isRequired,
};

export default CryptoLine;
