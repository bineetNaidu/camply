import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/heroImage.jpeg')}
        style={styles.heroImage}
      />
      <View style={styles.wrapper}>
        <View style={styles.intro}>
          <Text style={styles.subText}>Welcome to</Text>
          <Text style={styles.brand}>Camply</Text>
          <Text style={styles.paragraph}>
            Connect with people and plan your next escape with Camply
          </Text>
        </View>
        <View style={styles.ctx}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btn1Txt}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btn2Txt}>Continue with Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    position: 'relative',
    padding: 28,
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  wrapper: {
    paddingVertical: 50,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  intro: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  subText: {
    color: '#d8dffd',
    fontSize: 18,
  },
  brand: {
    color: '#d8dffd',
    fontSize: 50,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#d8dffd',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'normal',
  },
  ctx: {
    width: '100%',
  },
  btn1: {
    backgroundColor: '#d8dffd',
    padding: 12,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
    borderColor: '#d8dffd',
  },
  btn1Txt: {
    color: '#1d2541',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  btn2: {
    backgroundColor: '#1d2541',
    padding: 12,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#d8dffd',
  },
  btn2Txt: {
    color: '#d8dffd',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Home;
