import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/iteamAddActions";

export default function Main() {

const [title, setTitle] = useState('');
const [expiry, setExpiry] = useState('');

const dispatch = useDispatch();

const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(addItem(title, expiry));
}

  return (
    <main>
      <div>
        <form action="" method="post" className="form" onSubmit={submitHandler}>
          <div>
            <div className="formItem">
              <label for="itemaName">
                <span style={{ fontSize: "15px" }}>&#127817;</span> Item Name:
              </label>
              <br />
              <input type="text" id="item" required onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="formItem">
              <label for="expiryDate">
                <span style={{ fontSize: "15px" }}>&#127817;</span> expiry Date:
              </label>
              <br />
              <input type="text" id="expiryDate" required onChange={(e)=> setExpiry(e.target.value)} />
              <br />
            </div>
            <div className="formItem">
              <label />
              <br />
              <button id="submit" name="submit" type="submit">
                ADD TO FRIDGE
              </button>
            </div>
          </div>
          <div>
            <label />
            <p className="dontLable">
              We Don't Want More Than One Piece Of The Same Food in Our Fridge.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
