import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { EditContext } from '../../context/EditContext';
import { ToShowContext } from '../../context/ToShowContext';
import { Games, Player, PlayerData } from '../../models/data';
import './GameList.scss';

interface Props {
    toShow: any;
    selectValue ? : boolean;
}

const GameList = ({toShow}: Props) => {
    const {importGameData} = useContext(EditContext)
    const {showPlayer, selectValue, setselectValue, whatToShow} = useContext(ToShowContext)
    const navigate = useNavigate()
    const [players, setplayers] = useState<Player[]>(toShow.players)
    const [teamOne, setteamOne] = useState<Player[]>([])
    const [teamTwo, setteamTwo] = useState<Player[]>([])
    useEffect(() => {
        if(toShow.players) {
            setplayers(toShow.players)
        }
        
    }, [toShow])
    
    useEffect(() => {
        if(players) {
            setteamOne(players.slice(0,2))
            setteamTwo(players.slice(2,4))
        }
    }, [players])
    
    useEffect(() => {

    }, [whatToShow])
    
    return (
        <section>
            {
            selectValue ? (
                <section className="chart-item">
                    <div className="team-wrapper">
                        <div className="team">{teamOne.map((e, i)=> <p key={i}>{e.name}</p>)}</div>
                        <div className="line">
                            <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="20" y2="0.5" stroke="#171717"/>
                            </svg>
                        </div>
                        <div className="team">{teamTwo.map((e, i)=> <p key={i}>{e.name}</p>)}</div>
                    </div>
                    <p>{toShow.result}</p>
                    <p>{toShow.date}</p>
                    <div className="btn-wrapper">
                        <button onClick={(e) => {
                            importGameData(e)
                            navigate('addScore')
                        }} className="btn-primary" id={toShow.ID}>Redigera</button>
                    </div>
                </section>
            ) : (
                <section className="chart-item">
                    <div>
                        <p>{toShow.name}</p>
                    </div>
                    <p>{toShow.wins}</p>
                    <p>{toShow.matches}</p>
                    <div className="btn-wrapper">
                        <button onClick={(p) => {
                            setselectValue(true);
                            showPlayer(p)
                            navigate('player')
                        }} className="btn-primary" id={toShow.name}>Läs mer</button>
                    </div>
                </section>
            )
            }
        </section>
    )
}

export default GameList