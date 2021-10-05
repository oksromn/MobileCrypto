import React from 'react';
import propTypes from 'prop-types';
import { SafeAreaView } from "react-native";
import CryptoLine from "./CryptoLine";
import styled from "styled-components/native";

const Home = ({  }) => {

  return (
    <SafeAreaView>
      <Container>
        <CryptoLine
          title="Bitcoin"
          price="$49495.13"
          symbol="BTC"
          logoUri="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"
        />
        <CryptoLine
          title="Ethereum"
          price="$3390.49"
          symbol="ETH"
          logoUri="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"
        />
        <CryptoLine
          title="Ripple"
          price="$1.05"
          symbol="XRP"
          logoUri="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/XRP.svg"
        />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  padding: 20px;
`;

Home.propTypes = {};

export default Home;
