import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

function form() {

  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    status: "Incomplete"
  });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('Todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      // const todoData =JSON.parse(storedTodos);
      // console.log(todo_Array)
      
    }
  },[todos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const newTodos = [...todos, todoData];

      setTodos(newTodos);
      localStorage.setItem('Todos', JSON.stringify(newTodos));

      setTodoData({ title: "", description: "", status: "" });
      window.location.reload();

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      Toast.fire({
        icon: "success",
        title: "Todo Created Successfully"
      });
   

  };
  useEffect(() => {
    
  })

  return (
    <div>
      <div className="container my-5 bg-light border rounded-4 py-4">
        <div className="h2 text-center">Create Todos</div>
        <div className="todo_form">
          <form className="row px-5" onSubmit={handleSubmit}>
            <div className="col my-3">
              <label htmlFor="title" class="form-label fw-bold">Title*</label>
              <input
                id="title"
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                value={todoData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col my-3">
              <label htmlFor="status" class="form-label fw-bold">Status*</label>
              <select className="form-select" aria-label="Default select example" required onChange={handleChange} name="status" id="status">
                <option value="Incomplete" defaultChecked>Incomplete</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="col-12 my-3">
              <label htmlFor="description" class="form-label fw-bold">Description*</label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                placeholder="Description..."
                value={todoData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div class="col-12 my-3 text-center">
              {/* <button className="btn btn-danger mx-2"> Clear Form</button> */}
              <button className="btn btn-warning mx-2 fw-bold" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default form;
