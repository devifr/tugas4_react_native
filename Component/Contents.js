import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from 'native-base';

export default class Contents extends Component{
  constructor(props){
    super(props);
    this.state = {
      operator: '+',
      angka1: 0,
      angka2: 0,
      total: 0
    }
  }

  masukanAngka1 = event => {
    this.setState({angka1: event})
  }

  masukanAngka2 = event => {
    this.setState({angka2: event})
  }

  masukanOperatorTambah = () => {
    this.setState({operator: '+'})
  }

  masukanOperatorKurang = () => {
    this.setState({operator: '-'})
  }

  masukanOperatorBagi = () => {
    this.setState({operator: '/'})
  }

  masukanOperatorKali = () => {
    this.setState({operator: '*'})
  }

  hitung = () => {
    if(this.state.operator == '+'){
      this.setState({total: Number(this.state.angka1) + Number(this.state.angka2)});
    }else if(this.state.operator == '-'){
      this.setState({total: this.state.angka1 - this.state.angka2});
    }else if(this.state.operator == '/'){
      this.setState({total: this.state.angka1 / this.state.angka2});
    }else{
      this.setState({total: this.state.angka1 * this.state.angka2});
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput placeholder="Masukan angka" keyboardType="numeric" onChangeText={ this.masukanAngka1 } />
        <Text style={styles.operatorLabel}>{this.state.operator}</Text>
        <TextInput placeholder="Masukan angka" keyboardType="numeric" onChangeText={ this.masukanAngka2 } />
        <Text style={styles.total}>{this.state.total}</Text>
        <Text>Operator</Text>
        <View style={styles.containerButton}>
          <Button rounded onPress={this.masukanOperatorTambah} style={styles.button}>
            <Text style={styles.buttonLabel}> + </Text>
          </Button>
          <Button rounded onPress={this.masukanOperatorKurang} style={styles.button}>
            <Text style={styles.buttonLabel}> - </Text>
          </Button>
          <Button rounded onPress={this.masukanOperatorBagi} style={styles.button}>
            <Text style={styles.buttonLabel}> / </Text>
          </Button>
          <Button rounded onPress={this.masukanOperatorKali} style={styles.button}>
            <Text style={styles.buttonLabel}> * </Text>
          </Button>
          <Button success rounded onPress={this.hitung} style={styles.button}>
            <Text style={styles.buttonLabel}> HITUNG </Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 25,
      flex: 2,
      padding: 15
    },
    title: {
      textAlign: 'center',
      fontSize: 20
    },
    operatorLabel: {
      fontSize: 35,
      textAlign: 'center',
      color: 'blue',
      margin: 20
    },
    containerButton: {
      flexDirection: 'row'
    },
    operator: {
      backgroundColor: 'blue',
    },
    total: {
      fontSize: 50,
      textAlign: 'center',
      padding: 20,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      borderTopColor: 'black',
      borderTopWidth: 1
    },
    hitung: {
      backgroundColor: 'green',
      padding: 12,
      marginLeft: 10
    },
    button: {
      padding: 12,
      marginLeft: 10
    },
    buttonLabel: {
      color: 'white'
    }
  })
