import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameList from '../../components/GameList/GameList';
import { GamesContext } from '../../context/GamesContext';
import { ToShowContext } from '../../context/ToShowContext';
import cross from "../../images/cross.svg";
import { Games, PlayerData } from '../../models/data';
import "../home/Home.scss";
import "./Player.scss";

const Player = () => {
  const {whatToShow, selectedPlayer} = useContext(ToShowContext);
  const {games} = useContext(GamesContext)
  const navigate = useNavigate()

  return (
    <main className="player-container">
      <span className="return-btn" onClick={()=> navigate('/')}>Gå tillbaka 
        <img src={cross} alt="" />
      </span>
      <section className="player-info">
        <h1>Namn:</h1>
        <h2>{selectedPlayer.name}</h2>
        <h2>Totalt antal spelade matcher: {selectedPlayer.matches}</h2>
      </section>
      <h2>Av de {selectedPlayer.matches < 10 ? (<>{selectedPlayer.matches}</>):(<>10</>)} senaste har {selectedPlayer.name} vunnit: {selectedPlayer.wins}</h2>
      <section className="list-head">
            <div>
              <p>Lag</p>
            </div>
            <p>Resultat</p>
            <p>Datum</p>
            <div></div>
          </section>

      {
        whatToShow.map((toShow:Games | PlayerData, i: number) => {
        if( i < 10) {
          return <GameList key={toShow.ID} toShow={toShow} />
        }})
      }
    </main>
  )
}

export default Player