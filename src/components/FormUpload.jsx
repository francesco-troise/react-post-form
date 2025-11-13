export default function FormUpload() {
  return (
    <div className="container">
      <form className="w-25">
        <div className="input-group  mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Autore
          </span>
          <input type="text" className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Titolo
          </span>
          <input type="text" className="form-control" />
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2Disabled"
            value=""
          ></textarea>
          <label htmlFor="floatingTextarea2Disabled">Testo del post</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label className="form-check-label" for="radioDefault1">
            Bozza privata
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault2"
            checked
          />
          <label classNAme="form-check-label" htmlFor="radioDefault2">
            Post pubblico
          </label>
        </div>
      </form>
    </div>
  );
}
