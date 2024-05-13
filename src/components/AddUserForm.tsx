import React, { useState } from "react";

function AddUserForm({ addUser }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      avatar,
      address,
      phone,
      creatAt: new Date(),
    };
    addUser(newUser);
    setAddress("");
    setAvatar("");
    setPhone("");
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
