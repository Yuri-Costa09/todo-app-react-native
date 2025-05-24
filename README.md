 # Todo App - React Native

A modern and intuitive todo application built with React Native and Expo, featuring user authentication and task management capabilities.

## Features

- **User Authentication**
  - User registration with validation
  - Secure login/logout functionality
  - Token-based authentication with AsyncStorage
  - Password fields with secure text entry

- **Task Management**
  - Create new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks with confirmation
  - Real-time task updates
  - User-specific task lists

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (v5)
- **Styling**: TailwindCSS with NativeWind
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Storage**: AsyncStorage
- **Authentication**: JWT Token-based

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go app](https://expo.dev/client) on your mobile device (for testing)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Yuri-Costa09/todo-app-react-native>
   cd todo-app-react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go app (Android) or Camera app (iOS)
   - Or use the commands:
     ```bash
     npx expo start --android  # For Android
     npx expo start --ios      # For iOS
     npx expo start --web      # For web browser
     ```

## 📁 Project Structure

```
src/
├── app/                    # Expo Router pages
│   ├── (app)/             # Authenticated app screens
│   │   ├── Tasks.tsx      # Main tasks screen
│   │   └── _layout.tsx    # App layout with TasksProvider
│   ├── (auth)/            # Authentication screens
│   │   ├── Login.tsx      # Login screen
│   │   ├── Register.tsx   # Registration screen
│   │   └── _layout.tsx    # Auth layout
│   ├── index.tsx          # Landing/redirect page
│   └── _layout.tsx        # Root layout with AuthProvider
├── context/               # React Context providers
│   ├── AuthContext.tsx    # Authentication state management
│   └── TaskContext.tsx    # Tasks state management
├── services/              # API services
│   ├── api.ts            # Axios configuration
│   ├── authService.ts    # Authentication API calls
│   └── taskService.ts    # Tasks API calls
```

## 🔧 Configuration

### API Configuration

The app is configured to connect to the backend API at:
```
Base URL: https://aitrip.one/api
```

If you need to change the API endpoint, modify the `baseURL` in `src/services/api.ts`.

### Environment Setup

Make sure your backend API supports the following endpoints:

**Authentication:**
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

**Tasks:**
- `GET /tasks/user/:userId` - Get user tasks
- `POST /tasks/create` - Create new task
- `PUT /tasks/update/:taskId` - Update task
- `DELETE /tasks/delete/:taskId` - Delete task

## 🎯 Usage

### Authentication Flow

1. **Registration**: New users can create an account with name, email, and password
2. **Login**: Existing users can log in with email and password
3. **Auto-login**: The app remembers logged-in users using AsyncStorage
4. **Logout**: Users can logout, which clears stored tokens

### Task Management

1. **Create Tasks**: Add new tasks using the input field
2. **Toggle Completion**: Tap the checkbox to mark tasks as complete/incomplete
3. **Delete Tasks**: Tap "Excluir" with confirmation dialog

### Code Style

The project uses:
- TypeScript for type safety
- TailwindCSS with NativeWind for consistent styling
- Context API for state management
- Functional components with hooks

### Adding New Features

1. **New Screens**: Add files to appropriate `app/` subdirectories
2. **New Services**: Add API functions to `services/` directory
3. **New Context**: Create context providers in `context/` directory

## 🐛 Troubleshooting

### Common Issues

1. **App not loading**: Make sure Expo CLI is installed and you're on the same network
2. **API errors**: Check if the backend server is running and accessible
3. **Authentication issues**: Clear AsyncStorage by logging out and logging back in
4. **Styling issues**: Make sure NativeWind is properly configured

### Debug Mode

Enable debug logs by checking the console in Expo Dev Tools or React Native Debugger.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yuri Costa*
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
*

---

⭐ Star this repo if you found it helpful!