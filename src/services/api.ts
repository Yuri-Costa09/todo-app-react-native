import axios, { type InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const api = axios.create({
    baseURL: 'https://aitrip.one/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
// intercepta as requisições para adicionar o token
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await AsyncStorage.getItem('token');
        if (token && config.headers) {
           config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// intercepta as respostas para verificar se o token é válido
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      router.replace('/(auth)/Login' as any);
    }
    return Promise.reject(error);
  }
);

export default api;