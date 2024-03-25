import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Modal } from 'react-native';
import calcularCenario1 from './calculadoraCenario1';
import calcularCenario2 from './calculadoraCenario2';
import calcularCenario3 from './calculadoraCenario3';

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

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Dados Pessoais:</Text>
      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
         />
      </div>
      <div style={styles.campo}>
        <Text style={styles.txtCampo}>CPF</Text>
        <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />
      </div>

      <div style={styles.campo}>
        <Text style={styles.txtCampo}>E-mail</Text>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      </div>

      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Telefone</Text>
        <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />
      </div>

      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Data de Nascimento</Text>
        <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      </div>
      
      <Text style={styles.txtTitle}>Dados Financeiros:</Text>

      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Valor da compra</Text>
        <TextInput
        style={styles.input}
        value={valorCompra}
        onChangeText={setValorCompra}
        keyboardType="numeric"
      />
      </div>

      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Taxa de juros (%)</Text>
        <TextInput
        style={styles.input}
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      </div>
      
      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Número de parcelas</Text>
        <TextInput
        style={styles.input}
        value={numeroParcelas}
        onChangeText={setNumeroParcelas}
        keyboardType="numeric"
      />
      </div>
      
      <div style={styles.campo}>
        <Text style={styles.txtCampo}>Valor de entrada</Text>
        <TextInput
        style={styles.input}
        value={valorEntrada}
        onChangeText={setValorEntrada}
        keyboardType="numeric"
      />
      </div>

      
      <button onPress={calcularParcelas} style={styles.button} >Calcular</button>
     
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
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9F3752',
    borderRadius: '10px',
    color: 'white',
    padding: '15px'
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  campo: {
    display: 'flex',
    flexDirection: 'column'
  },
  txtTitle: {
    color: '#CE6689',
    fontWeight :'Bold',
    marginBottom: '1%'
  },
  txtCampo:{
    color: '#CE6689',
    marginBottom: '2%'
  },
  input: {
    width: '100%', // Adicionado para garantir que o input ocupe toda a largura
    height: 40,
    borderColor: '#CE6689',
    borderRadius: '10px',
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

