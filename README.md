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
    title: "We Providing landscaping Services Since 1947",
    dis: " Landscape design is much more than simply planting a few trees and shrubs around your property",
  },
  {
    url: "http://localhost:5173/2.jpg",
    title: "We Are Allround Certified & Insured landscapers",
    dis: " Simply planting a few trees and shrubs around your property",
  },
  {
    url: "http://localhost:5173/3.jpg",
    title: "Extend Your Home With a Beautiful Garden",
    dis: "By creating an outdoor environment, you are essentially building rooms that are ",
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
