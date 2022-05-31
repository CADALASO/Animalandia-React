
function ModalRazas(props){
return(
<div className="modal fade" id={props.pm1} tabindex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.pm3}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img src={props.pm6} className="img-fluid d-block" alt={props.pm3} />
      <p className="card-text">{props.pm5}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    );
}
export default ModalRazas;