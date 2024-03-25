import React, { useState, useRef } from 'react';

import { View, TextInput, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import calcularCenario1 from './calculadoraCenario1';
import calcularCenario2 from './calculadoraCenario2';
import calcularCenario3 from './calculadoraCenario3';
import { ScrollView } from 'react-native';

const FinanciamentoSimulator = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [valorEntrada, setValorEntrada] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [resultados, setResultados] = useState([]);

  const calcularParcelas = () => {
    // Calculando cenário 1
    const cenario1 = calcularCenario1(valorCompra, taxaJuros, numeroParcelas, valorEntrada);
    
    // Calculando cenário 2
    const cenario2 = calcularCenario2(valorCompra, taxaJuros, numeroParcelas, valorEntrada);

    // Calculando cenário 3
    const cenario3 = calcularCenario3(valorCompra, taxaJuros, numeroParcelas, valorEntrada);

    setResultados([cenario1, cenario2, cenario3]);
    setModalVisible(true);
  };

  const firstInputRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleScrollDown = () => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
    setHeaderVisible(false); // Oculta o header ao clicar no botão
  };

  const handleScrollToTop = () => {
    setHeaderVisible(true); // Mostra o header ao clicar no botão
  };


  return (
    <View style={styles.container}>
    {headerVisible && (
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/img.png')}
        />
      <Text style={styles.headerText}>Bem-vindo ao FinanPlan</Text>
      <TouchableOpacity onPress={handleScrollDown} style={styles.scrollButton}>
      <Text style={styles.scrollButtonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
    )}

      <ScrollView contentContainerStyle={styles.scrollView}>

        <TouchableOpacity onPress={handleScrollToTop} style={styles.backToTopButton}>
          <Text style={styles.backToTopButtonText}>Voltar ao Início</Text>
        </TouchableOpacity>

      <Text style={styles.txtTitle}>Dados Pessoais:</Text>
      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Nome</Text>
        <TextInput
          ref={firstInputRef}
          style={styles.input}
          value={nome}
          onChangeText={setNome}
         />
      </View>
      <View style={styles.campo}>
        <Text style={styles.txtCampo}>CPF</Text>
        <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />
      </View>

      <View style={styles.campo}>
        <Text style={styles.txtCampo}>E-mail</Text>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      </View>

      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Telefone</Text>
        <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />
      </View>

      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Data de Nascimento</Text>
        <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      </View>
      
      <Text style={styles.txtTitle}>Dados Financeiros:</Text>

      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Valor da compra</Text>
        <TextInput
        style={styles.input}
        value={valorCompra}
        onChangeText={setValorCompra}
        keyboardType="numeric"
      />
      </View>

      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Taxa de juros (%)</Text>
        <TextInput
        style={styles.input}
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      </View>
      
      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Número de parcelas</Text>
        <TextInput
        style={styles.input}
        value={numeroParcelas}
        onChangeText={setNumeroParcelas}
        keyboardType="numeric"
      />
      </View>
      
      <View style={styles.campo}>
        <Text style={styles.txtCampo}>Valor de entrada</Text>
        <TextInput
        style={styles.input}
        value={valorEntrada}
        onChangeText={setValorEntrada}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={calcularParcelas} style={styles.button} >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      
     
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Resultados do Financiamento</Text>
            {resultados.map((cenario, index) => (
              <View key={index}>
                <Text> Cenário {index + 1}:</Text>
                <Text> Valor de Entrada: R$ {cenario.valorEntrada}</Text>
                <Text> Valor da Parcela: R$ {cenario.valorParcela}</Text>
                <Text> Total a Pagar: R$ {cenario.totalPagar}</Text>
                <Text>-----------------------------------------</Text>
              </View>
            ))}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button} >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#9F3752',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 800,
  },
  headerText: {
    color: '#F3D7E3',
    padding:  20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  scrollButton: {
    marginTop: 20,
    color: '#9F3752',
    backgroundColor: '#F8EBF0',
    padding: 10,
    borderRadius: 5,
  },
  scrollButtonText: {
    color: '#9F3752',
    fontSize: 16,
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backToTopButton: {
    // position: 'absolute',
    // backgroundColor: '#9F3752',
    padding: 20,
    borderRadius: 5,
  },
  backToTopButtonText: {
    color: '#9F3752',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#9F3752',
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  campo: {
    marginBottom: 10,
  },
  txtTitle: {
    color: '#CE6689',
    fontWeight :'bold',
    marginBottom: 10
  },
  txtCampo:{
    color: '#CE6689',
    marginBottom: '2%'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CE6689',
    borderRadius: 10, // Corrigido para um número
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0,0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

});

export default FinanciamentoSimulator;