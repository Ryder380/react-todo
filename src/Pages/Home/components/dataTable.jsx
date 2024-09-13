import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

function dataTable() {
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editTitle, setEditTitle] = useState(''); 
  const [editDescription, setEditDescription] = useState(''); 
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const storedTodos = localStorage.getItem('Todos');
    if (storedTodos) {
      // const Todos = JSON.parse(storedTodos);
    setTodo(JSON.parse(storedTodos))
      // console.log(Todos);
    }
  }, []);

  const handleDelete = (index) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
        localStorage.setItem('Todos', JSON.stringify(updatedTodos));

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
          title: "Todo deleted successfully"
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleEdit = (index) => {
    setEdit(index); 
    setEditTitle(todo[index].title); 
    setEditDescription(todo[index].description);
  };

  const handleSaveChanges = () => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false);
      const updatedTodos = [...todo];
    updatedTodos[edit] = { ...updatedTodos[edit], title: editTitle, description: editDescription };
    setTodo(updatedTodos);
    localStorage.setItem('Todos', JSON.stringify(updatedTodos));
    window.location.reload();

    setEdit(null);
    },2000)
    
    Swal.fire({
      icon: "success",
      title: "Todo updated successfully"
    });
    
  };

  const handleStatusChange = (index) => {
    const updatedTodos = todo.map((item, i) =>
      i === index ? { ...item, status: item.status === 'Incomplete' ? 'Completed' : 'Incomplete' } : item
    );
    setTodo(updatedTodos);
    localStorage.setItem('Todos', JSON.stringify(updatedTodos));
    // console.log(todo)

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
      title: "Status Updated"
    });
  };
  if(loading){
    return <div className="loading">Loading&#8230;</div>;
  }

  return (
    <div>
      <div className="container my-5 border py-5 rounded-4 bg-light">
        <div className="table_head text-center mb-5">
          <div className="h2">Todo List Table</div>
        </div>
        <table className="table border table-striped table-bordered text-center">
          <thead className="sticky-top">
            <tr>
              <th className="title" scope="col">TITLE</th>
              <th className="description" scope="col">DESCRIPTION</th>
              <th className="status" scope="col">STATUS</th>
              <th className="action" scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {todo.length > 0 ? (
              todo.map((todoItem, index) => (
                <tr key={index}>
                  <td>{todoItem.title}</td>
                  <td>{todoItem.description}</td>
                  <td>
                    <span className={`btn btn-success px-2 py-1 rounded-4 ${todoItem.status === 'Completed' ? 'btn-successs' : 'btn-danger'}`}>{todoItem.status}</span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button className="fa-solid fa-pen-to-square mx-2 border-0 text-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(index)} ></button>
                      <button className="fa-solid fa-power-off mx-2 border-0 text-warning" onClick={() => handleStatusChange(index)}></button>
                      <button
                        className="fa-solid fa-trash mx-2 border-0 text-danger"
                        type="button"
                        onClick={() => handleDelete(index)}
                      ></button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No Records to Show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Editing modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Todo details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Title*</label>
                <input name="title" type="text" className="form-control" id="formGroupExampleInput" value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description*</label>
               <textarea name="description" id="description" className="form-control"  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)} required ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveChanges} >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dataTable;
