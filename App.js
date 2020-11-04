import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Pressable
} from "react-native";

import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

  const App = () => {
    const [uri,setUri] = useState(Dice1);
    const [uriTwo,setUriTwo] = useState(Dice5);
    const playButtonTapped = () => {
      setUri((Math.floor(Math.random()*6)+1));
      setUriTwo((Math.floor(Math.random()*6)+1));
    }
  return(
    <View style={styles.container}>
        <StatusBar backgroundColor="#222831" />
        <View style={styles.containerTwo}>
        <Text style={styles.text}>Press on the dices to roll</Text>
          <Pressable style={styles.imgWrap} onPress={playButtonTapped}>
              <Image style={styles.image} source={uri} />
              <Image style={styles.image} source={uriTwo} />
          </Pressable>          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    alignItems:'center',
    justifyContent:"center"
  },
  containerTwo:{
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  },
  text:{
    color:"#fff",
    fontSize:20,
    marginBottom:15
  },
  imgWrap:{
    flexDirection:"row",
    marginHorizontal:15
  },
  image:{
    width:180,
    height:180,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:5
  },
  gamePlayButton:{
    fontSize:17,
    marginTop:30,
    color:"#f2a365",
    paddingHorizontal:20,
    paddingVertical:10,
    borderColor:"#30475e",
    borderRadius:5,
    borderWidth:3,
    minWidth:120,
    textAlign:"center",
    fontWeight:"bold"
  }
});

export default App;