/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Icon,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import img_stb from '../img/stb.jpg';
import img_mango from '../img/mango.jpg';
import img_orange from '../img/orange.jpg';
import img_apple from '../img/appale.jpg';
import img_iphone from '../img/iphone.jpg';
import img_mi from '../img/mi.jpeg';
import ShoppingItems from '../components/ShoppingItem';

class MyCart extends React.Component  {
  static navigationOptions = {
    title: 'E-ShoP',
  };
   shoppingItems = [
    {
      img: img_orange,
      name: 'Orange',
      type: 'organic',
      uom: 'CASE',
      packSize: '26CT',
      quantity: 20,
      perUnit: 80.99,
      totalPrice: 170.98,
    },
    {
      img: img_stb,
      name: 'Strawberry',
      type: 'special',
      uom: 'CASE',
      packSize: '26CT',
      quantity: 20,
      perUnit: 80.99,
      totalPrice: 170.98,
    },
    {
      img: img_mango,
      name: 'Mango',
      type: 'local',
      uom: 'CASE',
      packSize: '9PTC',
      quantity: 4,
      perUnit: 15.99,
      totalPrice: 59.96,
    },
    {
      img: img_orange,
      name: 'Orange',
      type: 'organic',
      uom: 'CASE',
      packSize: '36CT',
      quantity: 2,
      perUnit: 8.99,
      totalPrice: 17.98,
    },
    {
      img: img_apple,
      name: 'Apple',
      type: 'local',
      uom: 'CASE',
      packSize: '39PTC',
      quantity: 4,
      perUnit: 15.99,
      totalPrice: 59.96,
    },
    {
      img: img_iphone,
      name: 'Celery Stalk',
      type: 'organic',
      uom: 'CASE',
      packSize: '36CT',
      quantity: 2,
      perUnit: 8.99,
      totalPrice: 17.98,
    },
    {
      img: img_mango,
      name: 'Cover Sprouts',
      type: 'local',
      uom: 'CASE',
      packSize: '39PTC',
      quantity: 4,
      perUnit: 15.99,
      totalPrice: 59.96,
    },
  ];
  render (){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.parentContent}>
            <View style={styles.mainContent}>
              <View style={styles.cartContent}>
                <Text style={styles.cartContentText}>My Cart</Text>
                <Text style={styles.cartContentText}>$53.97</Text>
              </View>
              <View style={styles.itemContent}>
                <View style={styles.topItem}>
                  <Text style={styles.topItemText}>04 Items</Text>
                </View>
                <View style={styles.typeStyle}>
                  <Text style={styles.circle1}></Text>
                  <Text style={styles.commonFontSize}>Organic</Text>
                  <Text style={styles.circle2}></Text>
                  <Text style={styles.commonFontSize}>Local</Text>
                  <Text style={styles.circle3}></Text>
                  <Text style={styles.commonFontSize}>Speciality</Text>
                </View>
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.shoppingItems}
                renderItem={data => <ShoppingItems shopping={data.item} />}
              />
            </View>
            <View style={styles.commentContent}>
              <View style={styles.textAreaContainer} >
              {/* <TextInput
                placeholder="Enter Order level notes here"
                style={styles.inputStyle}></TextInput> */}
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />
            </View>
            </View>
            <View style={styles.confirmContent}>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={{fontSize: 15}}>CONFIRM ORDER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
  
};

const styles = StyleSheet.create({
  parentContent: {
    // flexDirection:"column",
    // margin:15,
  },
  mainContent: {
    height: '60%',
  },
  commentContent: {
    height: '20%',
    
  },
  confirmContent: {
    height: '20%',
  },
  commonFontSize: {
    fontSize: 10,
  },
  typeStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
  },
  inputStyle: {
    color: 'black',
    width: '95%',
    height: '100%',
    borderColor: '#DDDD',
    borderWidth: 1,
    margin: 10,
    justifyContent: 'flex-start',
  },

  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#45BF68',
    padding: 15,
  },
  cartContentText: {
    color: '#FCFCFC',
    fontSize: 18,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle1: {
    height: 10,
    width: 10,
    backgroundColor: '#73421A',
    borderRadius: 50,
    marginLeft: 7,
  },
  circle2: {
    height: 10,
    width: 10,
    backgroundColor: '#145727',
    borderRadius: 50,
    marginLeft: 7,
  },
  circle3: {
    height: 10,
    width: 10,
    backgroundColor: '#C45A08',
    borderRadius: 50,
    marginLeft: 7,
  },
  topItem: {flex: 1, padding: 15},
  topItemText: {fontSize: 15},
  confirmBtn: {
    backgroundColor: '#EDE31C',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
    marginTop: 50,
  },
  textAreaContainer: {
    borderColor: "#DDDD",
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
});

export default MyCart;
