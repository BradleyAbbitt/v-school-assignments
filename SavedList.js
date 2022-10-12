import React, { useContext, useState } from "react"
import axios from "axios"
import "./style.scss"
import { ThemeContext } from "./themeContext"


export default function SavedUgly() {

    const {uglyThing} = useContext(ThemeContext)
    const {thingList} = useContext(ThemeContext)
    const {setUglyThing} = useContext(ThemeContext)
    const {setRefresher} = useContext(ThemeContext)
    const {refresher} = useContext(ThemeContext)

    console.log(refresher)
    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevThing => ({...prevThing, [name]: value}))
    }


   
    return (

        thingList.map(saved => { 

            const updatedThing = {
                title: uglyThing.title,
                description: uglyThing.description,
            }

            function editThing(e) { 
                e.preventDefault()
                axios.put(`https://api.vschool.io/bradleyabbitt/thing/${saved._id}`, updatedThing)
                setRefresher(refresher + 1)
                // window.location.reload(false)
            }

            function deleteThing(e) {
                e.preventDefault()
                axios.delete(`https://api.vschool.io/bradleyabbitt/thing/${saved._id}`)
                setRefresher(refresher + 1)
                // window.location.reload(false) 
            }
                return(
                    <div className = "mapDiv">

                        <h5>{saved.title}</h5>

                        <h4>{saved.description}</h4>

                        <img className = "savedImg" src = {saved.imgUrl} />

                        <br />

                        <input 
                            placeholder = "Edit Title"
                            name = "title"
                            onChange = {handleChange}
                        ></input>

                        <br />

                        <input 
                            placeholder = "Edit Description"
                            name = "description"
                            onChange = {handleChange}
                        ></input>

                        <button 
                            className = "mapButton"
                            onClick = {editThing}
                        >Save Edit</button>

                        <button 
                            className = "mapButton" 
                            onClick = {deleteThing}
                        >Delete</button>
                    </div>
                )
        })
    )
}