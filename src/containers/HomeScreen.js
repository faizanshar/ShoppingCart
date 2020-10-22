import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 45,
            backgroundColor: '#03fcf8',
          }}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Faiz Shop
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Cart')}
          >
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, margin: 15}}>
          <View
            style={{
              height: 25,
              backgroundColor: '#03fcf8',
              justifyContent: 'center',
              marginBottom: 17,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 10,
                borderRadius: 10,
              }}
            >
              Paling Populer
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Electronics')}
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              height: 200,
              borderRadius: 20,
              shadowColor: '#00000021',
              shadowOffset: {
                width: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              marginVertical: 8,
              backgroundColor: '#ffffff',
              flexBasis: '47%',
              marginHorizontal: 5,
              borderWidth:2
            }}
          >
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCW44dGkMRhoCD3IuEDwaVXxQiCQzG3vuL_A&usqp=CAU',
              }}
              style={{height: 150, width: 150, borderRadius: 10, marginTop: 20}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Electronics</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Books')}
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              height: 200,
              borderRadius: 20,
              marginTop: 20,
              shadowColor: '#00000021',
              shadowOffset: {
                width: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              marginVertical: 8,
              backgroundColor: '#ffffff',
              flexBasis: '47%',
              marginHorizontal: 5,
              borderWidth:2
            }}
          >
            <Image
              source={{
                uri: 'https://lithub.com/wp-content/uploads/2019/07/used-books-store-2.jpg',
              }}
              style={{height: 150, width: 150, borderRadius: 10, marginTop: 20}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Books</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('MobileLegend')}
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              height: 200,
              borderRadius: 20,
              shadowColor: '#00000021',
              shadowOffset: {
                width: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              marginVertical: 8,
              backgroundColor: 'white',
              flexBasis: '47%',
              marginHorizontal: 5,
              borderWidth:2
            }}
          >
            <Image
              source={{
                uri: 'https://jurnalapps.co.id/assets/img/content/1520930493_1.jpg',
              }}
              style={{height: 150, width: 150, borderRadius: 10, marginTop: 20}}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>MobileLegend</Text>
          </TouchableOpacity>

        </View>

        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#cb0fff'
  },
});
