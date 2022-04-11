import SingleTache from '../SingleTache/SingleTache';

const Taches = ({list, modifTache,removeTache}) => {
const listTache = list.map((tache,index) =>(
    <SingleTache tache={tache} key={index} removeTache={removeTache} modifTache={modifTache}/>
))
    return(
        <>
        <h2>Liste des taches</h2>
        {listTache}
        </>
    );
}
export default Taches;