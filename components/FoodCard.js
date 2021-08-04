export default function FoodCard(props) {
  return (
    <>
      <div className="card bg-white m-2 mx-3 border-0 rounded-mine shadow-sm">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title fw-bold">{props.name}</h5>
            <h5 className="card-title fw-bold">Rs {props.price}</h5>
          </div>
          <p className="card-text">About 45mins to Cook</p>
          <div className="d-flex align-items-center justify-content-between">
            {/* <div className="quantity d-flex border">
              <button
                className="btn plus-btn btn-light"
                type="button"
                name="button"
              >
                -
              </button>
              <input
                type="text"
                name="name"
                value="1"
                className="border-mine1"
              />
              <button
                className="btn minus-btn btn-light"
                type="button"
                name="button"
              >
                +
              </button>
            </div> */}
            <button
              type="button"
              className="btn btn-mine btn-sm py-2 w-100"
              onClick={props.cartbtn}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
