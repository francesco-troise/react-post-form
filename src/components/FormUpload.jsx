import axios from "axios";
import { useState } from "react";

export default function FormUpload() {
  //State per lo store delle informazioni del form
  const [FormData, setFormData] = useState({
    autore: "",
    titolo: "",
    descrizione: "",
    tipo: "",
  });

  function handleChange(e) {
    //Destrutturazione del target
    const { name, value } = e.target;

    //Aggiornamento di FormData
    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  return (
    <div className="container">
      <form className="w-25">
        <div className="input-group  mb-3">
          <span className="input-group-text">Autore</span>
          <input
            type="text"
            placeholder="Autore"
            name="autore"
            value={FormData.autore}
            //Sincronizzazione input-state
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/*Input autore*/}

        <div className="input-group mb-3">
          <span className="input-group-text">Titolo</span>
          <input
            type="text"
            placeholder="Titolo"
            name="titolo"
            value={FormData.titolo}
            //Sincronizzazione input-state
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/*Input titolo*/}

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            value={FormData.descrizione}
            //Sincronizzazione input-state
            onChange={handleChange}
            name="descrizione"
          ></textarea>
          <label htmlFor="floatingTextarea2Disabled">Testo del post</label>
        </div>
        {/*Textarea contenuto post*/}

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="tipo"
            value="bozza"
            checked={FormData.tipo === "bozza"}
            //Sincronizzazione input-state
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="radio1">
            Bozza privata
          </label>
        </div>
        {/*Radio button "privato"*/}

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="tipo"
            checked={FormData.tipo === "pubblico"}
            //Sincronizzazione input-state
            onChange={handleChange}
            value="pubblico"
          />
          <label className="form-check-label" htmlFor="radio2">
            Post pubblico
          </label>
        </div>
        {/*Radio button "pubblico"*/}

        <button className="btn btn-sm btn-warning" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
