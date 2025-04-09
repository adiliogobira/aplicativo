import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router, Redirect } from 'expo-router';

export default function TabTwoScreen() {
  //return <Redirect href="/" />;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
                  source={require('@/assets/images/partial-react-logo.png')}
                  style={styles.reactLogo}
                />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Possibilidades de uso</ThemedText>
      </ThemedView>
      <ThemedText>Pensando em facilitar o uso do aplicativo nas demais plataformas, podemos deixar essa funcionalidade para uma possivel autenticação de um usuário, ja com suas credenciais gravadas no dispositivo como um cookie.</ThemedText>
      <Collapsible title="Autenticação local do usuário">
        <ThemedText>
          O usuário pode fazer a autenticação digamos usando o google ou e-mail e senha, estas informações ficaram gravadas no localstorage do dispositivo, quando o usuário entrar ja com estas informações gravadas, o usuario pode simplesmente solicitar autenticação com a biometria do seu dispositivo.
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Funcionalidade para iOS e Android">
        <ThemedText>
          Este aplicativo foi configurado para a autenticação usando as biometrias como digital e o FaceID da Apple.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
    textAlign: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 170,
    width: 310,
    bottom: 32,
    left: 25,
    position: 'absolute',
  },
});
