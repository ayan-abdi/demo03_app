import { useState } from "react";

const Formulaire = (props) => {
  const arrayPriorites = ["basse", "normale", "urgent"];
  const initialState = {
    id:Math.floor(Math.random()*10000)+1,
    nom: "",
    description: "",
    priorite: arrayPriorites[0],
    isCompleted: false,

  }

  const [inputs, setInputs] = useState(initialState);
  const [formIsInvalid, setFormIsInvalid] = useState(false);
  // const nom = inputs.nom
  const { nom, description, priorite } = inputs;
  // const updateList = props.updateList
  const { updateListTache } = props;

  const priorites = arrayPriorites.map((p) => (
    <option value={p} key={p}>
      {p}
    </option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom) {
      setFormIsInvalid(true);
      return;
    }

    updateListTache(inputs);
    setFormIsInvalid(false);
    setInputs(initialState);
  };

  return (
    <>
      <h2>Ajouter une nouvelle tache</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          {formIsInvalid && <p>Veuillez remplir le nom</p>}
          <input type="text" name="nom" value={nom} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="priorite">Priorite</label>
          <select name="priorite" value={priorite} onChange={handleChange}>
            {priorites}
          </select>
        </div>

        <button>Ajouter</button>
      </form>
    </>
  );
};
export default Formulaire;
