# **Navbar React**

A simple React Project that focuses on the basics of creating a navbar along with a dropdown button and menu when the width of the screen is below 1100 pixels.

## **Description**

A simple React Project that focuses on the basics of creating a navbar along with a dropdown button and menu when the width of the screen is below 1100 pixels.The dropdown part was hard to implement since it's height its dynamically set based on the length of the page options in data.js

## **Getting Started**

### Dependencies

- Check package.json for details.
- Git
- Docker(optional)

### Installing

```
git clone https://github.com/axense234/Navbar-REACT.git
```

### Executing program

- **Using NPM**

```
npm install
npm start
```

- **Using Docker**

```
docker build -t navbar-react:0.3.0 .
docker stop navbar-react-app
docker rm navbar-react-app
docker run -p 3000:3000 -d --name navbar-react-app navbar-react:0.3.0
```

## **Authors**

- **axense234**

## **Version History**

- 0.3
  - Analyzed the code to gather to-do tasks.
- 0.2
  - Improved React logic and also made the website look better,also improved structure
  - See [commit change](https://github.com/axense234/Navbar-REACT/commits/master) or See [release history](https://github.com/axense234/Navbar-REACT/releases)
- 0.1
  - Initial Release

## **License**

This project is licensed under the GNU License - see the LICENSE.md file for details

## **Acknowledgments**

- Inspired by [_John Smilga 15 React Projects_](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=8s)
