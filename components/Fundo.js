
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';

export default function Fundo(){
    return(
      <View style={styles.BACK} > 
      <Form />
      </View>
    )
    //agr irei installar axios para manipular dados que vao para o banco de dados
}
const styles = StyleSheet.create({
    BACK: {
      flex: 1,
      backgroundColor: '#ffff',
      width:'95vw',
      marginBottom:'10vw',
      marginTop:'2vw',
      borderRadius:'3%',
      
    
      
    },
    conteiner:{
      width:'100vw',
      color:'#fff',
      
    
    },titulo:{
      marginLeft:'30vw'
      
    }
  });