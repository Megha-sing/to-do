function TodoItem({todoName,todoDate,onDeleteClick}){

return <div className="container">
        
         <div className="row my-row">
          <div className="col-5">
            {todoName}
          </div>
          <div className="col-3">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger" onClick={()=> onDeleteClick(todoName)}>Delete</button>
          </div>
        </div>
        </div>
}
export default TodoItem;