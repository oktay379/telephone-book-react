import "./style.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Kodlayıcı");
  const [surname, setSurname] = useState("Bayt");
  const [number, setNumber] = useState("8885559999");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || surname.trim() === "" || number.trim() === "") {
      alert("Bosluk Bırakmayiniz");
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: `${name} ${surname} - ${number}`,
      },
    ]);

    setName("");
    setSurname("");
    setNumber("");
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h2 style={{ marginBottom: "1rem" }} htmlFor="item">
            Telefon Rehberim
          </h2>

          <h4>İsim giriniz</h4>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <h4>Soyad Giriniz</h4>
          <input
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />

          <h4>Numara Giriniz</h4>
          <input
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <br />

        <button className="btn">Add</button>
      </form>

      <h1 className="header">Kayıtlı Numaralarım</h1>

      <ul>
        {todos.length === 0 && "Kayıtlı Kisi Yok... :("}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>{todo.title}</label>
            <button
              style={{ marginLeft: "1rem" }}
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;