import react from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    title: 'For You',
  },
  {
    title: 'Top Charts',
  },
  {
    title: 'Family',
  },
  {
    title: 'Events',
  },
  {
    title: 'Premium',
  },
  {
    title: 'Categories',
  },
  {
    title: "Editors's Choice",
  },
];

const FirstPage = () => {
  const [selectedTab, setSelectedTab] = react.useState('For You');

  const renderDataList = ({item, index}) => {
    return (
      <View style={styles.cell}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(item.title);
            alert(item.title);
          }}>
          <Text
            style={{
              color: selectedTab === item.title ? 'green' : 'black',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const dataList = () => {
    return (
      <View style={styles.cellList}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderDataList}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{borderBottomWidth: 0.5, width: '110%', right: 15}} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>{dataList()}</ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  cell: {
    padding: 1,
    margin: 10,
  },

  cellList: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 15,
  },
});
