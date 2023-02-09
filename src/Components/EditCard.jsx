import React from "react";

export default function ({
  detail,
  setDetail,
  deleteIndex,
  display,
  removeDetail,
  setError,
}) {
  const handleNameChange = (e) => {
    e.preventDefault();
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };
  return (
    <div className="card">
      <fieldset>
        {display && (
          <span className="close" onClick={() => removeDetail(deleteIndex)}>
            &times;
          </span>
        )}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={detail?.name}
          onChange={(e) => handleNameChange(e)}
        />
        <br />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={detail?.age}
          onChange={(e) => handleNameChange(e)}
        />
        <br />
        <label>Ph No</label>
        <input
          type="number"
          name="phone"
          value={detail?.phone}
          onChange={(e) => handleNameChange(e)}
        />
        <br />
      </fieldset>
    </div>
  );
}
