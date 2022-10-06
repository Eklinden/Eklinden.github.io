import { createContext, useContext, useState } from 'react';
import uniqid from 'uniqid';
import { gameModeWins, Games, Player, PlayerData } from '../models/data';
import { GamesContext } from './GamesContext';

export const ToShowContext = createContext<any | null>(null);

const ToShowContextProvider = (props:any) => {
    const {games} = useContext(GamesContext)
    const [selectValue, setselectValue] = useState<boolean>(true)
    const [mostWins, setmostWins] = useState<gameModeWins[]>([])
    const [whatToShow, setwhatToShow] = useState<Games[] | PlayerData[]>([...games])
    const [selectedPlayer, setselectedPlayer] = useState<PlayerData>({
        name: "",
        wins: 0,
        losses: 0,
        matches: 0
    })

    function showPlayer(p: any) {
        let playerObj = {
            name: "",
            wins: 0,
            losses: 0,
            matches: 0
        }
        // console.log(p)
        let selectedGames: any = [];
        games.map((g:Games) => {
            g.players.map((player) => {
                if(player.name === p.target.id) {
                    selectedGames.push(g)
                }
            })
        });
        
        playerObj.matches = selectedGames.length
        playerObj.name = p.target.id
        selectedGames.map((g:Games, i:number) => {
            if(i < 10) {
                g.players.map((player) => {
                    if(player.result === "won" && player.name === p.target.id) {
                        playerObj.wins++
                    }
                })
            }
        });
        setselectedPlayer(playerObj)
        setwhatToShow(selectedGames)
    }
    function showTieGames(){
        let tieGames: Games[] = []
        games.map((g:Games) => {
            if(g.players[0].result === g.players[2].result) {
                tieGames.push(g)
            }
        })
        setwhatToShow(tieGames)
    }
    function showAllMatches() {
        const allGames = [...games]
        setwhatToShow(allGames)
    }
    function showAllPlayers() {
        let gameModeWins: gameModeWins[] = [];
        let playerModeExists = false;
        let playerModeObj: gameModeWins = {
            name: "",
            doubleWins: 0,
            singleWins: 0
        }
        let allPlayers: Player[] = [];
        const allPlayerData: PlayerData[] = [];
        let playerObj: PlayerData = {
            name: "",
            wins: 0,
            losses: 0,
            matches: 0,
            ID: uniqid()
        };
        let playerExists = false;

        games.filter((e: Games) => {
            let matchPlayers = e.players
            matchPlayers.map((p: Player) => {
                if(p.name !== "") {
                    allPlayers.push(p)
                }
                if(gameModeWins.length < 1) {
                    if(e.game === "double" && p.result === "won"){
                        playerModeObj = {
                            name: p.name,
                            doubleWins: 1,
                            singleWins: 0
                        }
                        gameModeWins.push(playerModeObj)
                    } else if (e.game === "single" && p.result === "won") {
                        playerModeObj = {
                            name: p.name,
                            doubleWins: 0,
                            singleWins: 1
                        }
                        gameModeWins.push(playerModeObj)
                    }
                } else {
                    gameModeWins.map((x: gameModeWins)=> {
                        if(p.name === x.name) {
                            playerModeExists = true;
                            if(e.game === "double" && p.result === "won") {
                               x.doubleWins++ 
                            } else if (e.game === "single" && p.result === "won") {
                                x.singleWins++
                            }
                        }
                    })
                    if(!playerModeExists) {
                        if(e.game === "double" && p.result === "won"){
                            playerModeObj = {
                                name: p.name,
                                doubleWins: 1,
                                singleWins: 0
                            }
                            gameModeWins.push(playerModeObj)
                        } else if (e.game === "single" && p.result === "won") {
                            playerModeObj = {
                                name: p.name,
                                doubleWins: 0,
                                singleWins: 1
                            }
                            gameModeWins.push(playerModeObj)
                        }
                    }
                    playerModeExists = false;
                }
            })
        })
        allPlayers.map((e: Player) => {
            if(allPlayerData.length < 1) {
                if(e.result === "Lost") {
                    playerObj = {
                        name: e.name,
                        wins: 0,
                        losses: 1,
                        matches: 1,
                        ID: uniqid()
                    }
                    allPlayerData.push(playerObj);
                } else {
                    playerObj = {
                        name: e.name,
                        wins: 1,
                        losses: 0,
                        matches: 1,
                        ID: uniqid()
                    }
                    allPlayerData.push(playerObj);
                }
            } else {
                allPlayerData.map((p: PlayerData) => {
                    if(p.name === e.name) {
                        playerExists = true;
                        if(e.result === "Lost") {
                            p.losses++
                            p.matches++
                        } else {
                            p.wins++
                            p.matches++
                        } 
                    }
                })
                if(!playerExists) {
                    if(e.result === "Lost") {
                        playerObj = {
                            name: e.name,
                            wins: 0,
                            losses: 1,
                            matches: 1,
                            ID: uniqid()
                        }
                        allPlayerData.push(playerObj);
                    } else {
                        playerObj = {
                            name: e.name,
                            wins: 1,
                            losses: 0,
                            matches: 1,
                            ID: uniqid()
                        }
                        allPlayerData.push(playerObj);
                    } 
                }
                playerExists = false;
            }
        })
        setmostWins(gameModeWins)
        setwhatToShow(allPlayerData)
    }


  return (
    <ToShowContext.Provider value={{showAllMatches, showAllPlayers, whatToShow, showPlayer, selectValue, setselectValue, selectedPlayer, mostWins, showTieGames}}>
        {props.children}
    </ToShowContext.Provider>
  )
}

export default ToShowContextProvider