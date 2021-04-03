import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

const data = [
  {
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
const quickListData = [
  {
    isActive: false,
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: true,
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: false,
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: false,
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: false,
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: false,
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: true,
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    isActive: false,
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
const temp = [
  {
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
];
const rechargeBillData = [
  {
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Contact',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'to Account',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    title: 'To Self',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const FirstPage = () => {
  const renderTransferMoneyItem = ({item}) => {
    return (
      <View style={styles.cell}>
        <Image
          style={styles.cellIcon}
          source={{
            uri: item.imgurl,
          }}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
      </View>
    );
  };

  const transferMoney = () => {
    return (
      <View style={styles.viewWidth}>
        <View style={styles.cellList}>
          <Text style={styles.textHead}>Transfer Money</Text>
          <FlatList
            data={data}
            renderItem={renderTransferMoneyItem}
            numColumns={4}
          />
        </View>
      </View>
    );
  };

  const renderQuickList = ({item}) => {
    let textColor = 'black';
    if (item.isActive === true) {
      textColor = 'green';
    }
    return (
      <View style={styles.cell}>
        <Image
          style={styles.cellIcon}
          source={{
            uri: item.imgurl,
          }}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
        {item.isActive === true && (
          <View
            style={{
              height: 16,
              width: 16,
              backgroundColor: 'red',
              position: 'absolute',
              right: 16,
              borderRadius: 8,
              top: 0,
            }}
          />
        )}
      </View>
    );
  };

  const quickList = () => {
    return (
      <View style={styles.viewWidth}>
        <View style={styles.cellList}>
          <Text style={styles.textHead}>Quick List</Text>
          <FlatList
            data={quickListData}
            renderItem={renderQuickList}
            numColumns={4}
          />
        </View>
      </View>
    );
  };

  const renderTemp = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          // marginHorizontal: 10,
          // paddingLeft: 5,
          width: '33.33%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.cellIcon}
          source={{
            uri: item.imgurl,
          }}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
      </View>
    );
  };

  const tempList = () => {
    return (
      <View style={styles.viewWidth}>
        <View style={styles.tempStyle}>
          <FlatList data={temp} renderItem={renderTemp} numColumns={3} />
        </View>
      </View>
    );
  };

  const renderReachargeBill = ({item}) => {
    return (
      <View style={styles.cell}>
        <Image
          style={styles.cellIcon}
          source={{
            uri: item.imgurl,
          }}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
      </View>
    );
  };

  const rechargeBillList = () => {
    return (
      <View style={{width: '100%'}}>
        <View style={styles.cellList}>
          <Text style={styles.textHead}> Recharge Bill</Text>
          <FlatList
            data={rechargeBillData}
            renderItem={renderReachargeBill}
            numColumns={4}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{paddingBottom: 200}}
        style={{backgroundColor: '#cab7fd'}}>
        {transferMoney()}
        {quickList()}
        {tempList()}
        {rechargeBillList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'white',
    width: '25%',
    flexDirection: 'column',
  },
  cellIcon: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  cellMini: {
    height: 10,
    width: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  cellList: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
  },
  textStyle: {
    marginVertical: 5,
    alignSelf: 'center',
  },
  textHead: {
    padding: 15,
  },
  tempStyle: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  viewWidth:{
    width: '100%'
  }
});
