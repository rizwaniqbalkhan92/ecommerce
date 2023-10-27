import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addTocard,
  cartADD,
  getAllProducts,
  removeCard,
} from '../../store/thunk/product';
import axios from 'axios';

const AllProducts = () => {
  const products = useSelector(state => state?.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log('products===>>>cart', products?.cart?.length);
  function cart(item) {
    dispatch(cartADD(item));
  }
  async function remove(item) {
    // dispatch(removeCard(item));
    const res=await axios.post('http://localhost:4000/admin/auth/register',{})
    console.log("<<<<<<",res)
  }
  return (
    <View>
      <Text>Cart {products?.cart?.length}</Text>
      <FlatList
        data={products?.products}
        renderItem={({item, index}) => (
          <View    key={index}
            style={{
              width: 300,
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: 60,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: 'blue',
            }}>
            <TouchableOpacity
              style={{
                width: 120,
                marginTop: 20,
                height: 50,
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'red',
              }}
           
              onPress={() => cart(index)}>
              <Text>AllProducts</Text>
              <Text>{item?.id}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                marginTop: 20,
                height: 50,
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'red',
              }}
          
              onPress={() => remove(index)}>
              <Text>remove</Text>
              <Text>{item?.id}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({});
