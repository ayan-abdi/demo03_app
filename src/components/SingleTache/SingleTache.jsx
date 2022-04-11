const SingleTache = ({tache, modifTache, removeTache}) => {
const {nom, description,priorite,id ,isCompleted} = tache

    return (
        <div>
            <div>
            { isCompleted? 'Tache completé':  nom}
            <br />
            {description}
            {priorite === 'urgent' && <span style={{color:'red'}}>(Urgent)</span> }
            </div>
            <div>
                <button disabled={isCompleted} onClick={() => {modifTache(id) }}>Terminer</button>
                <button onClick={() =>{removeTache(id)}} >Supprimer</button>
            </div>
        </div>
    );
};
export default SingleTache;