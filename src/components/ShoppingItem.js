import React from 'react';
import { StyleSheet,View ,Image,Text} from 'react-native';

const Shopping = props => {
    const {shopping}=props;
    const{circle1,circle2,circle3}=styles;
    let circleStyle=circle1;
    if(shopping.type==="local"){
        circleStyle=circle2;
    }else if (shopping.type==="special"){
        circleStyle=circle3;
    }
    return(
   
             <View style={styles.listContent}>
              <View style={styles.img}>
                <Image
                  source={shopping.img}
                  style={styles.itemImage}
                />
              </View>
              <View style={styles.itemDetails}>
                <View >
                  <Text style={style=styles.itemName}>{shopping.name}</Text>
                </View>
                <View style={styles.itemInfo}>
                  <View>
                    <Text style={styles.commonFontSize}>UOM</Text>
                    <Text>{shopping.uom}</Text>
                  </View>
                  <View>
                    <Text style={styles.commonFontSize}>PACK SIZE</Text>
                    <Text>{shopping.packSize}</Text>
                  </View>
                  <View>
                    <Text style={styles.commonFontSize}>QUANTITY</Text>
                    <Text>{shopping.quantity}</Text>
                  </View>
                  <View>
                    <Text style={styles.commonFontSize}>PER UNIT</Text>
                    <Text>{shopping.perUnit}</Text>
                  </View>
                  <View>
                    <Text style={styles.commonFontSize}>TOTAT</Text>
                    <Text>{shopping.totalPrice}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemType}>
                <Text style={circleStyle}>
                   
                </Text>
              </View>
            </View>
               
             
)};

const styles = StyleSheet.create({
    commonFontSize:{
        fontSize: 10,
    },
    listContent: {
        flexDirection: 'row',
      },
      img: {
        flex: 2,
      },
      itemImage:{
        width: 60, height: 60,
      },
      itemDetails: {
        flex: 10,
      },
      itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      itemType: {
        flex: 1,
        paddingTop: 10,
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
      itemName:{
        fontSize: 18,
         padding: 10,
      },

});

export default Shopping;
