import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "../../components/form/Form";
import { EditContext } from '../../context/EditContext';
import cross from "../../images/cross.svg";
import "./AddScore.scss";

const AddScore = () => {
  const navigate = useNavigate()
  const {formData, setformData, gameMode, setgameMode} = useContext(EditContext)

  useEffect(() => {
    setformData({...formData, game: gameMode})
  }, [gameMode])
  

  return (
    <main className="addScore">
      <h1>Lägg till resultat</h1>
      <span className="return-btn" onClick={()=> navigate(-1)}>Gå tillbaka 
        <img src={cross} alt="" />
      </span>
      <Form />
    </main>
  )
}

export default AddScore