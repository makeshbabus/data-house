import React, { useState } from "react";
import EditCard from "../Components/EditCard";

export default function () {
  const [detail, setDetail] = useState({});
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const addDetail = () => {
    if (detail && detail.name && detail.age && detail.phone) {
      let templist = [...list];
      templist.push(detail);
      setList(templist);
      let newDetail = { name: "", age: "", phone: "" };
      setDetail(newDetail);
    } else {
      setError(true);
    }
  };

  const removeDetail = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <>
      <div className="layout">
        <div>
          <EditCard
            detail={detail}
            setDetail={setDetail}
            display={false}
            setError={setError}
          />
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              Please fill all fields
            </p>
          )}
        </div>
        <div>
          <button onClick={addDetail}>Add</button>
        </div>
      </div>
      {list && list.length && (
        <h3 style={{ textAlign: "center" }}>Details List:</h3>
      )}
      {list.map((data, index) => {
        return (
          <div key={index} className="layout">
            <div>
              <EditCard
                detail={data}
                deleteIndex={index}
                display={true}
                removeDetail={removeDetail}
              />
            </div>
            <div style={{ width: "35px" }}></div>
          </div>
        );
      })}
    </>
  );
}
