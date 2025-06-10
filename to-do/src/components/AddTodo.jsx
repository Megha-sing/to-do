function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5">
          <input type="text" placeholder="Enter To-do task here"></input>
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
