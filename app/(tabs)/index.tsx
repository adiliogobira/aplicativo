import { Image, StyleSheet, View, Platform, Button, Alert, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
//import { IconSymbol } from '@/components/ui/IconSymbol';
import Icon from 'react-native-vector-icons/MaterialIcons'; // ou outro pacote de ícone
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as LocalAuthentication from 'expo-local-authentication';
import { router, Redirect } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [isAutenticated, setIsAuthenticated] = useState(false);

  async function verifyAvaiableAuthentication(){

    const compativel = await LocalAuthentication.hasHardwareAsync();
    console.log(compativel);
    
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    
    console.log(types.map(type => LocalAuthentication.AuthenticationType(types)));
  }

  async function handleAuthentication(){
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if(!isBiometricEnrolled){
      return Alert.alert('Falha ao autenticar', 'Biometria não localizada');
    }
      
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login com Biometria',
        fallbackLabel: 'Biometria não reconhecida'
      });
      
      setIsAuthenticated(auth.success);
    
  }

  useEffect(()=>{
    verifyAvaiableAuthentication();
  }, []); 

  const IconButton = ({ title, onPress, icon }) => (
    /*<Button style={styles.button} onPress={onPress} title={title}>
      {icon}
    </Button>*/
    <TouchableOpacity title='teste'></TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, usuário</ThemedText>
      </ThemedView>
      <View style={styles.center}>
        <TouchableOpacity title='Use biometria para logar' onPress={handleAuthentication} style={styles.iconButton}>
          <Icon name="fingerprint" size={60} color="#007AFF" />
          
        </TouchableOpacity>
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Entre utilizando a sua digital?</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{isAutenticated?'Você está autenticado com biometria':''}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  center:{textAlign: 'center',margin: 'auto'},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //gap: 8,
    margin: 'auto'
  },
  stepContainer: {
    gap: 8,
    marginBottom: -5,
  },
  reactLogo: {
    height: 170,
    width: 310,
    bottom: 32,
    left: 25,
    position: 'absolute',
  },
});
