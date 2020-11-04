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

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

  const App = () => {
    const [uri,setUri] = useState(DiceOne);
    const [uriTwo,setUriTwo] = useState(DiceFive);
    const playButtonTapped = () => {
      let dieOne = Math.floor(Math.random()*6)+1;
      let dieTwo = Math.floor(Math.random()*6)+1;
      switch (dieOne) {
        case 1:
          setUri(DiceOne);
          break;
        case 2:
          setUri(DiceTwo);
          break;
        case 3:
          setUri(DiceThree);
          break;
        case 4:
          setUri(DiceFour);
          break;
        case 5:
          setUri(DiceFive);
          break;
        case 6:
          setUri(DiceSix);
          break;
      
        default:
          setUri(DiceSix);
          break;
      }
      switch (dieTwo) {
        case 1:
          setUriTwo(DiceOne);
          break;
        case 2:
          setUriTwo(DiceTwo);
          break;
        case 3:
          setUriTwo(DiceThree);
          break;
        case 4:
          setUriTwo(DiceFour);
          break;
        case 5:
          setUriTwo(DiceFive);
          break;
        case 6:
          setUriTwo(DiceSix);
          break;
      
        default:
          setUriTwo(DiceSix);
          break;
      }
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
            { /*   <Pressable onPress={playButtonTapped}>
                    <Text style={styles.gamePlayButton}>Play Game</Text>
              </Pressable> */}
          
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