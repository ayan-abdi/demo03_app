import { useState } from 'react';
import Formulaire from '../Formulaire/Formulaire';
import Taches from '../Taches/Taches';

// une taches: nom oblog, desc, et priorité par defaut
const TodoList = () => {
    const [list, setList] = useState([])

    const addListTache = (newTache) =>{
        setList(list=>([...list, newTache ]))
    }

    const modifTache = (id) =>{
        // const listModified = list.map(tache => {
        //     if (tache.id === id) {
        //       return {...tache, isCompleted: true};
        //     }      
        //     return tache;
        //   });
          const listModified = list.map(tache => (
              tache.id === id ? {...tache, isCompleted: true} : tache
          ))
          setList(listModified)

    }

    const removeTache =(id) =>{
        const newArr = []
        
        list.forEach(tache =>{
        if (tache.id !== id) {
            newArr.push(tache)
        }
        setList(newArr)
    })
    
    }

    return(
        <>
        <Formulaire updateListTache={addListTache}/>
        <Taches list={list} removeTache={removeTache} modifTache={modifTache}/>
        </>
    )

}
export default TodoList;