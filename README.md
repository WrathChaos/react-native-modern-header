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

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 7.0.0",
"react-native-dynamic-vector-icons": ">= 1.0.0"
```

# Usage

## Import

```jsx
import ModernHeader from "react-native-modern-header";
```

## Fundamental Usage

```jsx
<ModernHeader />
```

# Configuration - Props

## Modern Header Props

| Property           |       Type       |    Default     | Description                                                     |
| ------------------ | :--------------: | :------------: | --------------------------------------------------------------- |
| height             | string OR number |       70       | change the height of the header                                 |
| width              | string OR number |     "100%"     | change the width of the header                                  |
| backgroundColor    |      string      |      #fff      | change the background color of the header                       |
| styles             |      styles      |     styles     | use this to change main style of the header                     |
| title              |      string      |  Header Title  | set the header's title                                          |
| titleStyle         |      style       |     style      | set your own style for the header's title                       |
| left               |      number      |       16       | use this to set left icon's align                               |
| right              |      number      |       16       | use this to set right icon's align                              |
| leftIconName       |      string      | ios-arrow-back | change the left icon depends on the React Native Vector Icons   |
| leftIconType       |      string      |    Ionicons    | change the left icon's type                                     |
| leftIconSize       |      number      |       25       | change the left icon's size                                     |
| leftIconColor      |      color       |    #bbbabe     | change the left icon's color                                    |
| rightIconName      |      string      |     heart      | change the right icon depends on the React Native Vector Icons  |
| rightIconType      |      string      |     Entypo     | change the right icon's type                                    |
| rightIconSize      |      number      |       25       | change the right icon's size                                    |
| rightIconColor     |      color       |    #23c4c1     | change the right icon's color                                   |
| leftIconComponent  |    component     |      Icon      | use your own component instead of the integrated Icon component |
| rightIconComponent |    component     |      Icon      | use your own component instead of the integrated Icon component |
| leftIconOnPress    |     function     |    function    | set the function for left icon's onPress                        |
| rightIconOnPress   |     function     |    function    | set the function for right icon's onPress                       |
| leftDisable        |     boolean      |     false      | disable the left icon component                                 |
| rightDisable       |     boolean      |     false      | disable the right icon component                                |

## Future Plans

- [x] ~~LICENSE~~

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Modern Header is available under the MIT license. See the LICENSE file for more info.
