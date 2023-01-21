# How to Installation

run

    npm install @satya-ranjon-sharma/react-imageslider
                    or
    npm i @satya-ranjon-sharma/react-imageslider
                    or
    yarn add @satya-ranjon-sharma/react-imageslider

# How to Use

```javascript
import ImageSlider from "@satya-ranjon-sharma/react-imageslider/dist/imageSlider";

const slider = [
  {
    url: "http://localhost:5173/1.jpg",
  },
  {
    url: "http://localhost:5173/2.jpg",
  },
  {
    url: "http://localhost:5173/3.jpg",
  },
];

const style = {
  width: "100%",
  height: "500px",
  margin: "0 auto",
};
const App = () => {
  return (
    <h1>
      <ImageSlider slider={slider} style={style} />
    </h1>
  );
};

export default App;
```
