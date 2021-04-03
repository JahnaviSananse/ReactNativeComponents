import react from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const datai = [
  {
    isOpen: false,
    title: 'Domestic Credit Facility',
    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
  {
    isOpen: false,
    title: 'Common Reporting Stand',
    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
  {
    isOpen: false,
    title: 'Domestic Credit Facility',
    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
  {
    isOpen: false,
    title: 'Domestic Credit Facility',

    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
  {
    isOpen: false,
    title: 'Bank Account 2',
    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
  {
    isOpen: false,
    title: 'Bank Account 3',
    list: [
      {label: 'RM 500,001 - RM 3,000,000', que: 'Your Net Worth'},
      {label: 'High Aggressive', que: 'Your Risk Difference'},
      {
        label: 'Inheritance and Savings',
        que: 'Your Sources of Income and Wealth',
      },
      {label: 'Gambling', que: 'Other Sources of Income and Wealth'},
    ],
  },
];

const FirstPage = () => {
  const [data, setData] = useState(datai);
  const renderDataList = ({item, index}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            let tempdata = JSON.parse(JSON.stringify(data));
            tempdata[index].isOpen = !tempdata[index].isOpen;
            setData(tempdata);
          }}>
          <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
            <View style={{backgroundColor: 'white', top: 20, marginRight: 5}}>
              {data[index].isOpen ? (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    marginRight: 20,
                    marginLeft: 10,
                  }}
                  source={require('./image/up.png')}
                />
              ) : (
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                    marginRight: 30,
                    marginLeft: 10,
                  }}
                  source={require('./image/down.png')}
                />
              )}
            </View>
            <Text style={styles.title}>{item.title}</Text>
            {data[index].isOpen ? (
              <Image
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                  marginLeft: 60,
                }}
                source={require('./image/pen.png')}
              />
            ) : (
              <Image
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                  marginRight: 30,
                }}
                //source={require('./image/down.png')}
              />
            )}
          </View>
        </TouchableOpacity>

        <View style={{borderBottomWidth: 0.8, width: '97%', left: 3}}></View>

        {item.isOpen && (
          <FlatList data={item.list} renderItem={renderSubDataList} />
        )}
      </View>
    );
  };

  const renderSubDataList = ({item}) => {
    //alert(item.que)
    return (
      <View style={styles.item2}>
        <Text style={styles.title3}>{item.que}</Text>
        <Text style={styles.title2}>{item.label}</Text>
      </View>
    );
  };

  const dataList = () => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 35,
              color: 'darkblue',
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Summary of your details
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'grey',
              marginLeft: 15,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.cellList}>
          <FlatList data={data} renderItem={renderDataList} />
        </View>
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
  cellList: {
    // backgroundColor: 'blue',
    marginTop: 40,
    //padding: 5,
  },
  item: {
    padding: 5,

    //marginHorizontal: 45,
  },
  item2: {
    height: 50,
    width: '100%',
    padding: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 13,
  },
  title2: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    bottom: 7,
  },
  title3: {
    marginTop: 7,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
    marginLeft: 10,
  },
});
