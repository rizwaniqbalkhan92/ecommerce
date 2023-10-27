import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import AllProducts from './src/Authenticated/Screens/AllProducts';
import Login from './src/Authentication/login/logn';

const App = () => {
  const uploadImage = async () => {
    const objProduct = {
      name: 'rizwan',
    };
    const formData = new FormData(objProduct);
    formData.append('image', {
      uri: 'file://path_to_your_image.jpg',
      type: 'image/jpeg',
      name: 'image',
    });

    const axios = require('axios');
    let data = JSON.stringify({
      name: 't-short',
      description: 'avaibale',
      price: 1200,
      address: 'Landhi',
      createdDate: '12/12/2023',
      quantity: 22,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/admin/products/add',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Button title="Upload Image" onPress={uploadImage} />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
