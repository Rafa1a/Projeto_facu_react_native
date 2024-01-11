import React from 'react';

import {  Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Index from './src/routes/index';
 

const App = () => {

  return (

    <SafeAreaView>
      <Index/>
    </SafeAreaView>

  );

};

 

export default App;