import React from "react"
import "./style.scss"
import SavedUgly from "./SavedList.js"
import { ThemeContext } from "./themeContext"

export default function App() {

    const {postUglyThing} = React.useContext(ThemeContext)
    const {setUglyThing} = React.useContext(ThemeContext)


    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevThing => ({...prevThing, [name]: value}))
    }

    return (
        <main>
            <div className = "entrySection"><h1>Ugly Things</h1>
                <form>
                    <div className = "inputDiv">

                        <input 
                            placeholder = "Title" 
                            className = "inputs" 
                            name = "title"
                            onChange = {handleChange}>
                        </input>

                        <input 
                            placeholder = "Description" 
                            className = "inputs" 
                            name = "description" 
                            onChange = {handleChange}>
                        </input>

                        <input 
                            placeholder = "Image URL" 
                            className = "inputs" 
                            name = "imgUrl" 
                            onChange = {handleChange}>
                        </input>

                    </div>
                    <div className = "buttonDiv">
                        <button onClick = {postUglyThing}>Submit</button>
                    </div>
                </form>
            </div>
            <SavedUgly />
        </main>
    )
} 

