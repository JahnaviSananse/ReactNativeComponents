import React, {useState, useEffect, useActions} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
const data = [
  {
    id: 1,
    title: 'Heli : GLS',
  },
  {
    id: 2,
    title: 'Heli Pandya',
  },
  {
    id: 3,
    title: "Hemani Ma'am : GLS",
  },
  {
    id: 4,
    title: 'Hemant Mobile',
  },
  {
    id: 5,
    title: 'Himanshu',
  },
  {
    id: 6,
    title: 'Himatnagar',
  },
  {
    id: 7,
    title: 'Himil : GLS',
  },
  {
    id: 8,
    title: 'Hiren Prajapati',
  },
  {
    id: 9,
    title: 'Idbi',
  },
  {
    id: 10,
    title: 'Irsad',
  },
  {
    id: 11,
    title: 'Ashfand',
  },
  {
    id: 12,
    title: 'Ashi',
  },
];

const FirstPage = () => {
  const [contact, setContact] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search !== '') {
      let ary = [];
      data.map((mvalue) => {
        let n = mvalue.title.toLowerCase().search(search.toLowerCase());
        if (n !== -1) {
          ary.push(mvalue);
        }
      });
      setContact(ary);
    }
  }, [search]);

  const deleteAddressDetail = (id) => {
    const removeItem = contact.filter((item) => item.id !== id);
    setContact(removeItem);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'yellow',
            borderRadius: 15,
            marginLeft: 10,
            top: 25,
          }}
        />
        <Text style={styles.title}>{item.title} </Text>
      </TouchableOpacity>
    </View>
  );
  const renderHiddenItem = ({item}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={() => deleteAddressDetail(item.id)}>
        <Text
          style={{
            color: 'white',
            paddingBottom: 20,
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'black'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {/* <Button title="<-" color="#841584" /> */}
          <TextInput
            placeholder={' Search in ' + data.length + ' contacts'}
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor="white"
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 10,
              width: '100%',
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              // marginBottom:5,
            }}
          />
          {/* <Button title="X" color="#841584" /> */}
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderBottomColor: 'white',
          }}
        />
        <SwipeListView
          data={contact}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-70}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //padding: 10,
    //marginTop:10,
  },

  item: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    marginLeft: 60,
    bottom: 3,
    color: 'white',
  },
  rowBack: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    //width: 80,
    height: 75,
    // marginTop: 3,
    marginLeft: 330,
  },
});
