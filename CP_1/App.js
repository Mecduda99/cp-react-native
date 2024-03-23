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
      <Text>Dados Pessoais:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Text>Dados Financeiros:</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor da compra"
        value={valorCompra}
        onChangeText={setValorCompra}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de juros (%)"
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de parcelas"
        value={numeroParcelas}
        onChangeText={setNumeroParcelas}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de entrada"
        value={valorEntrada}
        onChangeText={setValorEntrada}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calcularParcelas} />

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%', // Adicionado para garantir que o input ocupe toda a largura
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
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

