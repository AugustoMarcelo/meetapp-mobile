<h3 align="center">
    <img src="https://user-images.githubusercontent.com/11545976/80634403-d5e77300-8a30-11ea-9720-437d73af2616.png">
</h3>

<h3 align="center">
  [GoStack7] | Desafio para certificação
</h3>

---

## 📑 Sobre

**Meetapp** (acrônimo para Meetup + App) é uma aplicação que permite gerenciar eventos para desenvolvedores. A aplicação está dividida entre back end, front end e o mobile. O front end representa a visão do usuário que irá cadastrar, editar ou remover os meetups, perfil do usuário e possibilidade de criar uma conta. O mobile permite que os usuários (desenvolvedores interessados) possam se inscrever nos meetups. Abaixo, seguem os links para as outras versões.

<h4 align="center">
  <a href="https://github.com/AugustoMarcelo/meetapp-frontend">Front end</a> | <a href="https://github.com/AugustoMarcelo/meetapp">Back end</a>
</h4>

---

## ⚙ Tecnologias utilizadas

- React Native
- styles-components
- react-native-vector-icons
- @react-native-community/async-storage
- @react-navigation
- date-fns
- redux/sagas/redux-persistor

---

## 💻 Instruções para execução

> A aplicação teve o desenvolvimento focado em dispositivos ANDROID e foi atualizada para versão 5 do react-navigation.

- Faça o download do projeto:
```bash
  # clonando o repositório
  git clone https://github.com/AugustoMarcelo/meetapp-mobile.git

  # acessando a pasta
  cd meetapp-mobile

  # fazendo download das dependências
  yarn

  # proxy reverso
  adb reverse tcp:3333 tcp:3333

  # inicializando a aplicação
  npx react-native run-android
```

## 📸 Preview

> Sign In
<h1 align="center">
  <img height="600" src="https://user-images.githubusercontent.com/11545976/80635280-0f6cae00-8a32-11ea-9800-594fa6f172b4.jpg">
</h1>

> Sign Up
<h1 align="center">
  <img height="600" src="https://user-images.githubusercontent.com/11545976/80635283-10054480-8a32-11ea-877c-bc45c505a465.jpg">
</h1>

> Listagem de Meetups
<h1 align="center">
  <img height="600" src="https://user-images.githubusercontent.com/11545976/80635278-0f6cae00-8a32-11ea-8032-003e8cac027e.jpg">
</h1>

> Listagems de inscrições do usuário
<h1 align="center">
  <img height="600" src="https://user-images.githubusercontent.com/11545976/80635274-0e3b8100-8a32-11ea-8061-6156679bc95a.jpg">
</h1>

> Profile
<h1 align="center">
  <img height="600" src="https://user-images.githubusercontent.com/11545976/80635244-067bdc80-8a32-11ea-83af-f655f632d169.jpg">
</h1>
