<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# 🐾 Central Pet

Aplicativo para controle de hospedagem de pets em um hotel. Permite cadastrar, editar, visualizar e excluir informações de animais hospedados, bem como calcular diárias e gerenciar datas de entrada e saída.

## 📱 Frontend (React Native)

### Funcionalidades
- Interface mobile amigável para gerenciamento de pets
- Cadastro de tutor, contato, espécie, raça e datas de entrada e saída
- Cálculo automático de diárias até o momento e totais
- Listagem de todos os pets hospedados
- Edição e exclusão de registros

### Tecnologias
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/)
- [DateTimePicker](https://github.com/react-native-datetimepicker/datetimepicker)

### Instalação do Frontend

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/central-pet.git

# Acessar a pasta do projeto
cd central-pet

# Instalar dependências
npm install

# Iniciar o projeto com Expo
npx expo start
⚠️ Certifique-se de atualizar o IP no arquivo de frontend para apontar para o servidor backend da sua máquina.

🖥️ Backend (Node.js + Express)
Funcionalidades
API REST para manipulação de dados dos pets

Cálculo automático de diárias com base nas datas

Armazenamento temporário em memória (sem banco de dados por enquanto)

Endpoints

Método	Rota	Descrição
GET	/	Verifica se a API está online
POST	/adicionar-pet	Adiciona um novo pet
DELETE	/excluir-pet/:id	Remove um pet pelo ID
PUT	/editar-pet/:id	Edita os dados de um pet
Tecnologias
Node.js

Express

UUID

Instalação do Backend
bash
Copiar
Editar
# Acessar a pasta do servidor
cd server

# Instalar dependências
npm install

# Iniciar o servidor
node server.js
Servidor será iniciado em: http://localhost:5000

🚀 Funcionalidades Futuras
Integração com banco de dados (ex: MongoDB ou SQLite)

Upload de fotos dos pets

Filtros e busca por tutor, espécie ou datas

Histórico de hospedagens

🤝 Contribuição
Sinta-se à vontade para abrir issues ou fazer um pull request!

🐶🐱 Feito com carinho para os melhores amigos do homem e da mulher!
yaml
Copiar
Editar

---

Se quiser, posso personalizar mais com seu nome, links específicos ou adicionar instruções de build para Android/iOS. É só avisar!







>>>>>>> c520fe25d6cf6abb8bb5484e09ab0a2009f9063c
