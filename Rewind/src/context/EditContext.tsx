import { createContext, useContext, useState } from 'react';
import uniqid from 'uniqid';
import { FormData, Games, Player, PlayerData } from '../models/data';
import { GamesContext } from './GamesContext';

export const EditContext = createContext<any | null>(null);

const EditContextProvider = (props:any) => {
    const {games, setgames} = useContext(GamesContext)
    const [gameMode, setgameMode] = useState<boolean>(true)
    const [formData, setformData] = useState<FormData>({
        game: gameMode,
        date: "",
        playerOne: "",
        playerTwo: "",
        playerThree: "",
        playerFour: "",
        teamOne: 0,
        teamTwo: 0,
        ID: ""
      })

    function importGameData(e: any) {
        const editGame: FormData = {
            game: true,
            date: "",
            playerOne: "",
            playerTwo: "",
            playerThree: "",
            playerFour: "",
            teamOne: 0,
            teamTwo: 0,
            ID: ""
        }
        let gameToEdit = games.filter((g: Games) => g.ID === e.target.id)
        if(gameToEdit[0].game === "double") {
            editGame.game = true
        } else {
            editGame.game = false
        }
        editGame.ID = gameToEdit[0].ID
        editGame.date = gameToEdit[0].date
        editGame.playerOne = gameToEdit[0].players[0].name
        editGame.playerTwo = gameToEdit[0].players[1].name
        editGame.playerThree = gameToEdit[0].players[2].name
        editGame.playerFour = gameToEdit[0].players[3].name
        editGame.teamOne = parseInt(gameToEdit[0].result.slice(0,1))
        editGame.teamTwo = parseInt(gameToEdit[0].result.slice(2,3))
        setformData(editGame)
    }

    function addGame(formData: FormData) {

        let whoWon = "";
        const gameBP = {
            game: "",
            date: "",
            result: "",
            players: [
               { name: "", result: "" },
               { name: "", result: "" },
               { name: "", result: "" },
               { name: "", result: "" },
            ],
            ID: ""
        }
        if (formData.teamOne === formData.teamTwo) {
            whoWon = "tie"
        } else if (formData.teamOne > formData.teamTwo) {
            whoWon = "one"
        } else if (formData.teamOne < formData.teamTwo) {
            whoWon = "two"
        }
        if (formData.game) {
            gameBP.game = "double"
            gameBP.players.map((p, i) => {
                if(i == 0) {
                    p.name = formData.playerOne
                    if(whoWon === "two" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }else if(i == 1) {
                    p.name = formData.playerTwo
                    if(whoWon === "two" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }else if(i == 2) {
                    p.name = formData.playerThree
                    if(whoWon === "one" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }else if(i == 3) {
                    p.name = formData.playerFour
                    if(whoWon === "one" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }
            })
        } else {
            gameBP.game = "single"
            gameBP.players.map((p, i) => {
                if(i == 0) {
                    p.name = formData.playerOne
                    if(whoWon === "two" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }else if(i == 2) {
                    p.name = formData.playerThree
                    if(whoWon === "one" || whoWon === "tie") {
                        p.result = "Lost"
                    } else {
                        p.result = "won"
                    }
                }
            })
        }
        gameBP.date = formData.date
        gameBP.result = formData.teamOne + "-" + formData.teamTwo
        if(formData.ID === "") {
            gameBP.ID = uniqid();
            setgames([...games, gameBP]);
        } else {
            gameBP.ID = formData.ID
            const newList = games.filter((game:Games) => game.ID !== formData.ID)
            const newGamesList = [...newList, gameBP]
            newGamesList.sort(( a, b ) => {
                if (a.date < b.date){
                return 1;
                }
                if (a.date > b.date){
                return -1;
                }
                return 0;
            })
            setgames(newGamesList)
        }
    }

  return (
    <EditContext.Provider value={{addGame, importGameData, formData, setformData, gameMode, setgameMode}}>
        {props.children}
    </EditContext.Provider>
  )
}

export default EditContextProvider