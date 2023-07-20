import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create ({
  container:{
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    margin:5,
    width: Dimensions.get('window').width/2.1
  },
  image:{
    height: Dimensions.get('window').height/3,
    borderRadius:10,
    margin: 5
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  price:{
    marginTop:3,
    color: 'gray'
  },
  inStock:{
    color: 'red',
    fontWeight: 'bold'
  }
})