import React, { useState, useEffect  } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetails(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading){
            return;
        }

        if (total > 0 && incidents.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', { 
            params: { page }
        });

        //Onde estão os dados que vem da nossa API
        //Anexar 2 vetores
        //Carrega os casos que ja tem e anexa os novos casos cadastrados
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    //Função que vai ser disparada quando as variaries q estão dentro do array [] mudar
    useEffect(() => {
        loadIncidents();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>     
            </View>     
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>      

            <FlatList 
                data = {incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}

                //Tira a Barra de rolagem da lateral, mas continua funcionando                
                showsVerticalScrollIndicator={false}

                //Propriedade que aceita uma função que é disparada automatica quando o usuario chegar no final a lista
                onEndReached={loadIncidents}
                //Carrega mais informações quando faltar 20% para o final da lista vai carregar novos itens
                onEndReachedThreshold={0.2}
                
                //Vai retornar JSX por isso usa os () e nao as { }
                renderItem = {({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALUE:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetails(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}        
            />  
        </View>
    );
}
