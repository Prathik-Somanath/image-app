/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

 import React, {useEffect} from 'react';
 import {StyleSheet} from 'react-native';
 import {
   ApplicationProvider,
   IconRegistry,
   Layout,
   Text,
 } from '@ui-kitten/components';
 import {EvaIconsPack} from '@ui-kitten/eva-icons';
 import * as eva from '@eva-design/eva';
 import SplashScreen from 'react-native-splash-screen'
 
 /**
  * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
  * https://akveo.github.io/eva-icons
  */
 const App = () =>{
   useEffect(() => {
     SplashScreen.hide();
   }, []);
   return (
     <>
       <IconRegistry icons={EvaIconsPack} />
       <ApplicationProvider {...eva} theme={eva.light}>
         <Layout style={styles.container}>
           <Text style={styles.text} category="h1">
             Images
           </Text>
         </Layout>
       </ApplicationProvider>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     textAlign: 'center',
   },
 });
 
 export default App;
 