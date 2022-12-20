import "./App.css";
import Cart from "./components/Cort";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

function App() {
  var obj = [
    {
      video:require("./components/Videos/1.mp4"),
      title: "Devlopment Coursece",
      star: <FaStar />,
      btn:"Know more..!"
    },
    {
      video:require("./components/Videos/4.mp4"),
      title: "design Coursece",
      star: <FaStar />,
      btn:"Know more..!"
    },{
      video:require("./components/Videos/3.mp4"),
      title: "Pograming IT",
      star: <FaStar />,
      btn:"Know more..!"
    },{
      video:require("./components/Videos/2.mp4"),
      title: "Treandy Coursece",
      star: <FaStar />,
      btn:"Know more..!"
    },{
      video:require("./components/Videos/5.mp4"),
      title: "Civil-Mech Engineering",
      star: <FaStar />,
      btn:"click me"
    },{
      video:require("./components/Videos/6.mp4"),
      title: "business Devlpment",
      star: <FaStar />,
      btn:"Know more..!"
    },
  ];
  return (
    <div className="App">
      <>

        <div className="container">
        <div className="text">Creative Course</div>
        <h1 className="text_iner">Offered Courses</h1>
          <div className="row row-cols-3 justify-content-center align-items-center">
            {obj.map((item) => {
            return (
              <Cart
                video={item.video}
                title={item.title}
                star={item.star}
                btn={item.btn}
              />
            );
          })}
          </div>
        </div>
      </>
    </div>
  );
}
export default App;

