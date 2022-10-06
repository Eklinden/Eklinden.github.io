import { createContext, useState } from 'react';
import { Games } from '../models/data';
export const GamesContext = createContext<any | null>(null);

const GamesContextProvider = (props:any) => {
    const [games, setgames] = useState<Games[]>([
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "0"
        },
        {
            game: "single",
            date: "2022-07-25",
            result: "1-2",
            players: [
               { name: "Linus", result: "won" },
               { name: "", result: "" },
               { name: "Malin", result: "Lost" },
               { name: "", result: "" },
            ],
            ID: "1"
        },
        {
            game: "single",
            date: "2022-07-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "Lost" },
               { name: "", result: "" },
               { name: "Hans", result: "won" },
               { name: "", result: "" },
            ],
            ID: "2"
        },
        {
            game: "double",
            date: "2022-06-20",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "3"
        },
        {
            game: "double",
            date: "2022-06-16",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Malin", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "4"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "5"
        },
        {
            game: "single",
            date: "2022-06-25",
            result: "3-3",
            players: [
               { name: "Ida", result: "Lost" },
               { name: "", result: "" },
               { name: "Hans", result: "Lost" },
               { name: "", result: "" },
            ],
            ID: "6"
        },
        {
            game: "single",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Ida", result: "won" },
               { name: "", result: "" },
               { name: "Hans", result: "Lost" },
               { name: "", result: "" },
            ],
            ID: "7"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "8"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "9"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "10"
        },
        {
            game: "single",
            date: "2022-06-25",
            result: "0-3",
            players: [
                { name: "Ida", result: "Lost" },
                { name: "", result: "" },
                { name: "Hans", result: "won" },
                { name: "", result: "" },
            ],
            ID: "11"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "12"
        },
        {
            game: "single",
            date: "2022-06-25",
            result: "0-3",
            players: [
                { name: "Ida", result: "Lost" },
                { name: "", result: "" },
                { name: "Hans", result: "won" },
                { name: "", result: "" },
            ],
            ID: "13"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "14"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "15"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "16"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "17"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "18"
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            ID: "19"
        }
    ])

    games.sort((a: Games,b: Games ) => {
        if (a.date < b.date){
        return 1;
        }
        if (a.date < b.date){
        return -1;
        }
        return 0;
    })

  return (
    <GamesContext.Provider value={{games, setgames}}>
        {props.children}
    </GamesContext.Provider>
  )
}

export default GamesContextProvider