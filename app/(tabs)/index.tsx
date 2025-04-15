import React, {useState} from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import styles from '../styles';
import uuid from 'react-native-uuid';



  export default function RootLayout() {

    const [loaded] = useFonts({ 
      SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
      Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
      MontserratExtraBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
      MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
      MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
      MontserratItalic: require("../../assets/fonts/Montserrat-Italic.ttf"),
    });
    

    const [modalVisible, setModalVisible] = useState(false); //modal

    const [date, setDate] = useState(new Date()); //date
    const [showPicker, setShowPicker] = useState(false); //date

    const [tutor, setTutor] = useState('');
    const [contato, setContato] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [dataEntrada, setDataEntrada] = useState(new Date());
    const [dataSaida, setDataSaida] = useState(new Date());
    const [pickerType, setPickerType] = useState('');


    const [pets, setPets] = useState<{ id: string; tutor: string; contato: string; especie: string; raca: string; dataEntrada: Date; dataSaida: Date; diariasAtuais: String; diariasTotais: String; }[]>([]);

    const addPet = async () => {
      try {
        const novoPet = {
          id: uuid.v4(),
          tutor,
          contato,
          especie,
          raca,
          dataEntrada,
          dataSaida,
          diariasAtuais: "0",
          diariasTotais: "0",
        };
    
        const response = await axios.post('http://192.168.0.106:5000/adicionar-pet', novoPet);
        console.log("Pet adicionado com sucesso:", response.data);
    
        const petAdicionado = response.data.data;
        setPets(prevPets => [...prevPets, petAdicionado]); 
    
        setModalVisible(false);
      } catch (error) {
        console.error("Erro ao adicionar pet:", error);
        alert("Erro ao adicionar pet");
      }
    }
    
    const editPet = async (id: string, updatedPet: { tutor: string; contato: string; especie: string; raca: string; dataEntrada: Date; dataSaida: Date; }) => {
      try {
        const response = await axios.put(`http://192.168.0.106:5000/editar-pet/${id}`, updatedPet);
        console.log("Pet editado com sucesso:", response.data);
    
        const updatedPets = pets.map(pet => 
          pet.id === id ? { ...pet, ...updatedPet } : pet
        );
        setPets(updatedPets);
      } catch (error) {
        console.error("Erro ao editar pet:", error);
        alert("Erro ao editar pet");
      }
    };
    
    
    const deletePet = async (id: string) => {
      try {
        const response = await axios.delete(`http://192.168.0.106:5000/excluir-pet/${id}`);
        console.log("Pet excluído com sucesso:", response.data);
    
        const updatedPets = pets.filter(pet => pet.id !== id);
        setPets(updatedPets);
      } catch (error) {
        console.error("Erro ao excluir pet:", error);
        alert("Erro ao excluir pet");
      }
    };
    
    
    

    if (!loaded) { 
      return <View />;
    }

  return (
    <>
      <View style={[styles.container]}>
        
        <View style={[styles.header]}>
          <View style={[styles.headerGrid1]}>
            <Text style={[styles.textHeader]}> Central Pet</Text>
          </View>
          <View style={[styles.headerGrid2]}>
            <TouchableOpacity style={[styles.headerButton]} onPress={() => setModalVisible(true)}>
              <Text style={[styles.textHeaderButton]}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {
        //-------------------------------------------------------------------------------//
        }

      <ScrollView style={[styles.content]}>
        {pets.map((pet, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{pet.tutor}</Text>
            <Text>Contato: {pet.contato}</Text>
            <Text>Espécie: {pet.especie}</Text>
            <Text>Raça: {pet.raca}</Text>
            <Text>Entrada: {new Date(pet.dataEntrada).toLocaleDateString()}</Text>
            <Text>Saída: {new Date(pet.dataSaida).toLocaleDateString()}</Text>
            <Text>Diárias até o momento: {pet.diariasAtuais}</Text>
            <Text>Previsão de data de saída: {new Date(pet.dataSaida).toLocaleDateString()}</Text>
            <Text>Diárias totais previstas: {pet.diariasTotais}</Text>

            <View style={styles.cardButtons}>
            <TouchableOpacity 
              onPress={() => { setTutor(pet.tutor); setContato(pet.contato); setEspecie(pet.especie); setRaca(pet.raca); setDataEntrada(new Date(pet.dataEntrada)); setDataSaida(new Date(pet.dataSaida)); setModalVisible(true);}}>
              <Text style={styles.editButton}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deletePet(pet.id)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>

            </View>
          </View>
        ))}
      </ScrollView>


    
      </View>

      {
      //-------------------------------------------------------------------------------//
      }

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent]}>
              <Text style={{ fontFamily: 'MontserratMedium' }}>Adicionar Pet</Text>
            </View>

            <View style={[styles.modalContent]}>
              <TextInput placeholder="Tutor" style={[styles.modalInput]} value={tutor} onChangeText={setTutor} />
            </View>
            <View style={[styles.modalContent]}>
              <TextInput placeholder="Contato" style={[styles.modalInput]} value={contato} onChangeText={setContato} />
            </View>
            <View style={[styles.modalContent]}>
              <TextInput placeholder="Espécie(Gato ou Cachorro)" style={[styles.modalInput]} value={especie} onChangeText={setEspecie} />
            </View>
            <View style={[styles.modalContent]}>
              <TextInput placeholder="Raça" style={[styles.modalInput]} value={raca} onChangeText={setRaca} />
            </View>
            <View style={[styles.modalContent]}>
              <TouchableOpacity style={[styles.modalDate]} onPress={() => { setPickerType('entrada'); setShowPicker(true); }}>
                <Text style={{ color: '#fff' }}>Selecionar data de entrada</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.modalContent]}>
              <TouchableOpacity style={[styles.modalDate]} onPress={() => { setPickerType('saida'); setShowPicker(true); }}>
                <Text style={{ color: '#fff' }}>Selecionar data de saída</Text>
              </TouchableOpacity>
            </View>
            
            {showPicker && (
              <DateTimePicker
                value={pickerType === 'entrada' ? dataEntrada : dataSaida}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowPicker(false);
                  if (selectedDate) {
                    if (pickerType === 'entrada') {
                      setDataEntrada(selectedDate);
                    } else if (pickerType === 'saida') {
                      setDataSaida(selectedDate);
                    }
                  }
                }}
              />
            )}

            <View style={[styles.modalAdd]}>
              <TouchableOpacity style={[styles.modalAddButton]} onPress={addPet}>
                <Text style={{ color: '#fff' }}>Adicionar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </>
  );
}
