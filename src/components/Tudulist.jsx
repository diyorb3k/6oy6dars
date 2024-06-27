import React, { useState, useEffect } from "react";
import "./Tudulist.css";
import PropsImg from "./PropsImg/PropsImg";
import { toast } from "react-toastify";
import { PatternFormat } from "react-number-format";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Tudulist() {
  const [name, setName] = useState("");
  const [sade, setTata] = useState("");
  const [dade, setDatu] = useState("");
  const [das, setDas] = useState("");
  const [dal, setDat] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const sab = (e) => {
    e.preventDefault();
    if (name && sade && dade && das && dal) {
      let user = { name, sade, dade, das, dal };
      const updatedData = [...data, user];
      setData(updatedData);
      localStorage.setItem("data", JSON.stringify(updatedData));
      setName("");
      setTata("");
      setDatu("");
      setDas("");
      setDat("");
      toast.success("Student qo'shildi");
    } else {
      toast.error("User qo'shilmadi");
    }
  };

  const handleAddToWishlist = (el) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.some((item) => item.name === el.name)) {
      wishlist = wishlist.filter((item) => item.name !== el.name);
    } else {
      wishlist.push(el);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast.success("Talaba o'chirildi");
  };

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  let user = filteredData.map((el, index) => (
    <div className="data" key={index}>
      <div className="name_frist">
        <h4 className="firist">FirstName</h4>
        <p className="name">{el.name}</p>
      </div>
      <div className="name_frist">
        <h4>LastName</h4>
        <p>{el.sade}</p>
      </div>
      <div className="name_frist">
        <h4>Group</h4>
        <p className="dos">{el.dade}</p>
      </div>
      <div className="name_frist">
        <h4 className="">Does work?</h4>
        <p className="dos">{el.das}</p>
      </div>
      <div className="name_frist">
        <h4 className="">Phone number</h4>
        <p className="dos">{el.dal}</p>
      </div>
      <PropsImg files={file} />
      <button className="buttoni" onClick={() => handleAddToWishlist(el)}>
        {JSON.parse(localStorage.getItem("wishlist") || "[]").some(
          (item) => item.name === el.name
        ) ? (
          <FaHeart className="rasim1" style={{ color: "red" }} />
        ) : (
          <FaRegHeart className="rasim2" />
        )}
      </button>
      <button className="daletT">edit</button>
      <button className="dalet" onClick={() => deleteData(index)}>
        Delete
      </button>
    </div>
  ));

  return (
    <div className="container">
      <div className="sear">
        <input
          className="search"
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setShow(!show)} className="addd">
          Add
        </button>
      </div>

      <div className={`using ${show ? "show" : "using"}`}>
        <form onSubmit={sab}>
          <input
            className="input_tap"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="FirstName"
          />
          <input
            className="input_tap"
            required
            value={sade}
            onChange={(e) => setTata(e.target.value)}
            type="text"
            placeholder="LastName"
          />
          <input
            className="input_tap"
            required
            value={dade}
            onChange={(e) => setDatu(e.target.value)}
            type="text"
            placeholder="Group"
          />
          <input
            className="input_tap"
            type="text"
            required
            value={das}
            onChange={(e) => setDas(e.target.value)}
            placeholder="Does work?"
          />
          <PatternFormat
            className="input_tap"
            format="+998 (##) ### ## ##"
            allowEmptyFormatting
            mask="_"
            value={dal}
            onChange={(e) => setDat(e.target.value)}
          />
          <select className="input_tap">
            <option value="Qizbola">Qizbola</option>
            <option value="O'g'il bola">O'g'il bola</option>
          </select>

          <button className="qushish">add</button>
        </form>
      </div>

      <div className="wrapper">{user}</div>
    </div>
  );
}

export default Tudulist;
