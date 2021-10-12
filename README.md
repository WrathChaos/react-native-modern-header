<img alt="React Native Modern Header" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-modern-header)

[![React Native Modern Header](https://img.shields.io/badge/-Fully%20customizable%20Modern%20Header%20View%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-modern-header)

[![npm version](https://img.shields.io/npm/v/react-native-modern-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-modern-header)
[![npm](https://img.shields.io/npm/dt/react-native-modern-header.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-modern-header)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Modern Header"
        src="assets/Screenshots/React-Native-Modern-Header.png" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-modern-header
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

<b>Zero Dependency</b>

## Version Warning!

Version 1.0.0 is re-written from stratch, if you want to use lower than 1.0.0, please check the lower version commits to reach the documentation.

# Usage

## Import

```jsx
import ModernHeader from "react-native-modern-header";
```

## Fundamental Usage

```jsx
<ModernHeader title="Header" />
```

# Configuration - Props

## Modern Header Props

| Property              |   Type    |     Default      | Description                                                                        |
| --------------------- | :-------: | :--------------: | ---------------------------------------------------------------------------------- |
| title                 |  string   |    undefined     | set the title of the header                                                        |
| style                 | ViewStyle |     default      | change/override the main style                                                     |
| leftComponentDisable  |  boolean  |      false       | set to `true` for disabling the `left component`                                   |
| rightComponentDisable |  boolean  |      false       | set to `true` for disabling the `right component`                                  |
| onLeftPress           | function  |    undefined     | use this to set your own logic when the left component is pressed                  |
| onRightPress          | function  |    undefined     | use this to set your own logic when the right component is pressed                 |
| leftComponentStyle    | ViewStyle |     default      | change/override the left component's main style                                    |
| rightComponentStyle   | ViewStyle |     default      | change/override the right component's main style                                   |
| TextComponent         |    any    |       Text       | set your own custom Text component instead of `React Native Text`                  |
| titleTextStyle        | TextStyle |     default      | change/override the title's text style                                             |
| TouchableComponent    |    any    | TouchableOpacity | set your own custom Touchable component instead of `React Native TouchableOpacity` |
| leftImageSource       |  source   |     default      | change the left icon image                                                         |
| rightImageSource      |  source   |     default      | change the right icon image                                                        |
| leftCustomComponent   |    any    |     default      | set your own custom component instead of default left image component              |
| rightCustomComponent  |    any    |     default      | set your own custom component instead of default right image component             |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Version 1.0.0~~

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Modern Header is available under the MIT license. See the LICENSE file for more info.
