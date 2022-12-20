import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  return (
    <>
      <div className="col">
        <div className="box">
          <div className="box_iner">
            <div className="img_box">
              <video loop muted autoplay="true">
                <source src={props.video} type="video/mp4" />
                {/* {props.video} */}
              </video>
            </div>
            <div className="text_area">
              <h5 className="bor">{props.title}</h5>
              <div className="space">
                <div>
                <span>{props.star}</span>
                <span>{props.star}</span>
                <span>{props.star}</span>
                <span>{props.star}</span>
                <span>{props.star}</span>
                </div>
                <button>{props.btn}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
