import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';
import {TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const data = [
  {
    title: 'Cat',
  },
  {
    title: 'Elephant',
  },
  {
    title: 'Rat',
  },
];

const FirstPage = ({navigation, route}) => {
  const [userName, setUserName] = useState(data);
   
  const deleteItem = () => {alert ("Delete ?")}
  const deleteAddressDetail = (id) => {
    const removeItem = userName.filter((item) => item.id !== id);
    setUserName(removeItem);
  };
 
  const renderItem = ({item}) => (
    
    <View style={styles.item}>
      <View style={{flex:1,flexDirection:'row'}}>
      <Text style={styles.title}>{item.title} </Text>
      {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('ThirdPage')}>
      <Button
          title="UPDATE"
        />
        </TouchableWithoutFeedback >
        <TouchableOpacity onPress={() => deleteItem()}>
        <Button
          title="DELETE"
          onPress={() => deleteAddressDetail(item.id)}
        />
          </TouchableOpacity> */}
          </View>
      <Separator />
    </View>
    
     
  );
  const addItem = () => {
    alert(route.params.paramKey);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        
          <FlatList data={userName} renderItem={renderItem}> 
               
          </FlatList>
         
      </View>
      <View
        style={{width: 150, height: 100, marginBottom: 100, marginLeft: 120}}>
        <Button
          title="add more item"
          onPress={() => navigation.navigate('SecondPage')}
        />
        {/* <Button
          title="Refresh"
          onPress={
            () =>
              setUserName([
                ...userName,
                {
                  title: route.params.paramKey,
                },
              ])
            //alert(route.params.paramKey)
          }
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  item: {
    flex: 1,
    padding: 5,

    marginVertical: 5,
    marginHorizontal: 10,
  },
 
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
