import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "../features/cartSlice";
import { Link } from "react-router-dom";
import { logoutFunction } from "../features/AuthenticSlice";
const HomePage = () => {
  const { count } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <button
          className="increaseBtn"
          onClick={() => dispatch(increaseCount())}
        >
          Increase Count
        </button>
        <p>{count}</p>
        <button
          className="decreaseBtn"
          onClick={() => dispatch(decreaseCount())}
        >
          Decrease Count
        </button>
      </div>
      <Link to={"/"}>
        <button
          className="logoutBtn btn"
          onClick={() => dispatch(logoutFunction())}
        >
          Logout
        </button>
      </Link>
    </>
  );
};
export default memo(HomePage);
