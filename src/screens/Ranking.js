import React from 'react';
import {Platform, StyleSheet, } from 'react-native';
import {Container, Content, Text, } from 'native-base';

export default class Ranking extends React.Component {
  static navigationOptions = {
    title: 'ランキング',
    headerStyle: { backgroundColor: '#FFFFCC' },
  };

  //コンストラクタ
  constructor(props){
    console.log('constructor start');
    super(props);
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Ranking Screen</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex             : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    width           : "100%",
    height          : "100%",
  },
  content: {
    padding         : 30,
  },
});