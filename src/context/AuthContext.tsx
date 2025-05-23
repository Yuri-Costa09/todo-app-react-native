import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as loginService, register as registerService } from '../services/authService';

interface AuthContextType {
  token: string | null;
  userId: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isLoading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Load stored auth data on app start
  useEffect(() => {
    const loadStoredAuth = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUserId = await AsyncStorage.getItem('userId');
        
        setToken(storedToken);
        setUserId(storedUserId);
      } catch (error) {
        console.error('Error loading stored auth data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadStoredAuth();
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      const response = await loginService(email, password);
      const userIdFromResponse = response.user.id;
      
      setToken(response.token);
      setUserId(userIdFromResponse);
      
      await AsyncStorage.setItem('token', response.token);
      await AsyncStorage.setItem('userId', userIdFromResponse);
      
      console.log('Stored userId:', userIdFromResponse);
      router.replace('/(app)/Tasks' as any);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      await registerService(name, email, password);
      router.replace('/(auth)/Login' as any);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      setToken(null);
      setUserId(null);
      router.replace('/(auth)/Login' as any);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <AuthContext.Provider value={{ token, userId, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

 