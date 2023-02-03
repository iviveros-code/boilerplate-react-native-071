# ⚛️ Boilerplate-react-native 0.70.6 version
![image](https://user-images.githubusercontent.com/51721302/211879639-fe4b6e88-41dd-49dd-b0a9-25d0787edeea.png)### Simple boilerplate to initialize a new project in React Native with Typescript
***
![andoid](https://user-images.githubusercontent.com/51721302/152192878-2534ee93-d114-4d9c-8468-524a38d1caf2.gif)
![iPhone13](https://user-images.githubusercontent.com/51721302/152192939-ba807671-c1ff-4144-8ee3-56c93eb7e095.gif)
![iPhone8](https://user-images.githubusercontent.com/51721302/152192959-a108b876-2a76-4ee0-aaec-382181321179.gif)

---
## 🚀 Dependencies :

1. [React Native Paper](https://callstack.github.io/react-native-paper/theming.html) With a Provider of React Native Paper, you can create a simple theme for your entire app.

![image](https://user-images.githubusercontent.com/51721302/152193735-986746af-17ab-49e3-98c8-f3885f777a4c.png)


2. [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/) To save your keys word and utilize that wherever you need.

3. [React Native Navigation](https://reactnavigation.org/docs/tab-based-navigation/) Includes Stack && Tab Navigation.

4. [React Native Net Info](https://github.com/react-native-netinfo/react-native-netinfo) An awesome and simple library to catch the connectivity and show to the user when has troubles with the internet. They provide you some hooks to reach them.

5. [Axios](https://axios-http.com/docs/intro) Instead of Fetch.

6. [React Final Form](https://final-form.org/docs/react-final-form/getting-started) This library replace Redux Form, it's an awesome way to handle forms and actually works very well in React Native.

7. [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/getting-started)  For test screens and components.

8. [React Native Device Info](https://github.com/react-native-device-info/react-native-device-info) Provides you a lot of information about the device of the user, for example, if the device has a notch or not, and take styles decisions from there. Gives you some hooks too.

9. [React Native FastImage](https://github.com/DylanVann/react-native-fast-image) For catching images like browers instead of `<Image />`component from `'react-native'` . Works really well when you need to call heavy images from your backend.

10. [Babel Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md) For global imports like `import {Container} from '@components'` instead of `../../../../../components`

11. [React Native Responsive Screen](https://github.com/marudy/react-native-responsive-screen) When Flex doesn't help you, this library figure out the problem of responsive sizes. You only have to pass a number of porcentage.

![image](https://user-images.githubusercontent.com/51721302/152193308-8184b656-799e-4dfd-8d37-041729c730d9.png)

12. [React Native Responsive FontSize](https://github.com/heyman333/react-native-responsive-fontsize) This library fix the fontSize problem in relation to different devices.

12. [Redux Toolkit and RTK Query ](https://redux-toolkit.js.org/introduction/getting-started) For State Management and fast api responses.


***
# 🚀 How does it works?

- ***Create a new project from***  `npx react-native init name-project --template https://github.com/iviveros-code/boilerplate-react-native` . Few things to know:
 The command will fail if you have the global legacy react-native-cli installed. Make sure you uninstall it first.[@react-native-community/cli](https://github.com/react-native-community/cli#about)

***
# 🌳 What structure do I propose?

![Captura de Pantalla 2022-02-02 a la(s) 14 07 30](https://user-images.githubusercontent.com/51721302/152202233-8cc54cd6-7994-4edd-b0cc-399a9aee97f5.png)


# ⁇ Why ⁇

Because you need to be structured at the moment to set up a new project, assets need to be outside the main folder because you don't need extra size. 
Inside the src main folder, you have some folders with the same "status" like app, config, constants, hooks, services, theme, utils. 
Inside the app folder, you have components (global re-utilizable components, if the component only affects one specific screen they must be inside the component folder inside the specific screen for example `login/components/Form`. Then have a context, navigation of the entire app and the screens folder.
And remember one style file by folder. For example =>

![Captura de Pantalla 2022-02-02 a la(s) 16 51 36](https://user-images.githubusercontent.com/51721302/152226696-fcea75ea-8cf0-4f66-8739-3f0ba2e644b2.png)


***

## Thank you so much for reading!! 


