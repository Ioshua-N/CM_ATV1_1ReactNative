import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Curriculo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Informações Pessoais</Text>
        <Text>Nome: Ioshua Noia</Text>
        <Text>Email: ioshua.oliveira@edu.pe.senac.br</Text>
        <Text>Github: Ioshua-N</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Educação</Text>
        <Text>SENAC - Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
        <Text>ETE Cícero Dias - Técnico em Programação de Jogos Digitais</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Outras Formações</Text>
        <Text>FAST Cesar - Engenharia de Plataformas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Curriculo;