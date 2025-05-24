# Todo App - React Native

Uma aplicação de tarefas moderna e intuitiva construída com React Native e Expo, com recursos de autenticação de usuário e gerenciamento de tarefas.

## Funcionalidades

- **Autenticação de Usuário**
  - Registro de usuário com validação
  - Funcionalidade segura de login/logout
  - Autenticação baseada em token com AsyncStorage
  - Campos de senha com entrada de texto segura

- **Gerenciamento de Tarefas**
  - Criar novas tarefas
  - Marcar tarefas como completas/incompletas
  - Excluir tarefas com confirmação
  - Atualizações de tarefas em tempo real
  - Lista de tarefas específicas por usuário

## 🛠️ Stack Tecnológica

- **Framework**: React Native com Expo
- **Linguagem**: TypeScript
- **Navegação**: Expo Router (v5)
- **Estilização**: TailwindCSS com NativeWind
- **Gerenciamento de Estado**: React Context API
- **Cliente HTTP**: Axios
- **Armazenamento**: AsyncStorage
- **Autenticação**: Baseada em Token JWT

## 📋 Pré-requisitos

Antes de executar este projeto, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [App Expo Go](https://expo.dev/client) no seu dispositivo móvel (para testes)

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone <https://github.com/Yuri-Costa09/todo-app-react-native>
   cd todo-app-react-native
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

4. **Execute no seu dispositivo**
   - Escaneie o código QR com o app Expo Go (Android) ou app Câmera (iOS)
   - Ou use os comandos:
     ```bash
     npx expo start --android  # Para Android
     npx expo start --ios      # Para iOS
     npx expo start --web --port 3000     # Para navegador web
     ```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas do Expo Router
│   ├── (app)/             # Telas do app autenticado
│   │   ├── Tasks.tsx      # Tela principal de tarefas
│   │   └── _layout.tsx    # Layout do app com TasksProvider
│   ├── (auth)/            # Telas de autenticação
│   │   ├── Login.tsx      # Tela de login
│   │   ├── Register.tsx   # Tela de registro
│   │   └── _layout.tsx    # Layout de autenticação
│   ├── index.tsx          # Página de aterrissagem/redirecionamento
│   └── _layout.tsx        # Layout raiz com AuthProvider
├── context/               # Provedores de React Context
│   ├── AuthContext.tsx    # Gerenciamento de estado de autenticação
│   └── TaskContext.tsx    # Gerenciamento de estado de tarefas
├── services/              # Serviços de API
│   ├── api.ts            # Configuração do Axios
│   ├── authService.ts    # Chamadas de API de autenticação
│   └── taskService.ts    # Chamadas de API de tarefas
```

## 🔧 Configuração

### Configuração da API

O app está configurado para se conectar à API do backend em:
```
URL Base: https://aitrip.one/api
```

Se você precisar alterar o endpoint da API, modifique a `baseURL` em `src/services/api.ts`.

## 🎯 Uso

### Fluxo de Autenticação

1. **Registro**: Novos usuários podem criar uma conta com nome, email e senha
2. **Login**: Usuários existentes podem fazer login com email e senha
3. **Login automático**: O app lembra usuários logados usando AsyncStorage
4. **Logout**: Usuários podem fazer logout, o que limpa os tokens armazenados

### Gerenciamento de Tarefas

1. **Criar Tarefas**: Adicione novas tarefas usando o campo de entrada
2. **Alternar Conclusão**: Toque na checkbox para marcar tarefas como completas/incompletas
3. **Excluir Tarefas**: Toque em "Excluir" com diálogo de confirmação

### Estilo de Código

O projeto usa:
- TypeScript para segurança de tipos
- TailwindCSS com NativeWind para estilização consistente
- Context API para gerenciamento de estado
- Componentes funcionais com hooks

