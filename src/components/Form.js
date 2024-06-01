import { useState } from "react";
import { useDispatch } from "react-redux";

import { deposit, withdraw, nameUpdate, mobileUpdate, reset } from "./actions";

function Form() {
  let dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [transactionId, updateTransactionId] = useState(0);
  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <div className="row">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch(deposit(amount));
              updateTransactionId(transactionId + 1);
              dispatch({
                type: "ADD_TRANSACTION",
                payload: {
                  id: transactionId,
                  amount: amount,
                  date: new Date(),
                  type: "Credit",
                },
              });

              setAmount("");
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-danger mx-2 col-1"
            onClick={() => {
              dispatch(withdraw(amount));
              updateTransactionId(transactionId + 1);
              dispatch({
                type: "ADD_TRANSACTION",
                payload: {
                  id: transactionId,
                  amount: amount,
                  date: new Date(),
                  type: "Debit",
                },
              });
              setAmount("");
            }}
          >
            withdraw
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => {
                let data = e.target.value;
                setFullName(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(nameUpdate(fullName));
              setFullName("");
            }}
          >
            Update
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter Mobile"
              value={mobile}
              onChange={(e) => {
                let data = e.target.value;
                setMobile(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-1 mx-2"
            onClick={() => {
              dispatch(mobileUpdate(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
        <button
          className="btn btn-danger col-1 mt-2"
          onClick={() => {
            dispatch(reset());
            setMobile("");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Form;