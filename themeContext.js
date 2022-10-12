import React,{useState, useEffect} from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){


    // USESTATE ARRAY
    const [thingList, setThingList] = useState ([])

    const [uglyThing, setUglyThing] = useState({
        title: null,
        description: null,
        imgUrl: null,
    })

    const [refresher, setRefresher] = useState(0)

    // API GET REQUEST
    
    useEffect(() => {
       axios.get('https://api.vschool.io/bradleyabbitt/thing/',)
       .then(res => setThingList(res.data))
       .catch(err => console.log(err))
    }, [refresher])

    // API POST REQUEST

    const newUglyThing = {
            title: uglyThing.title,
            description: uglyThing.description,
            imgUrl: uglyThing.imgUrl
        }
        

    function postUglyThing(){
        axios.post('https://api.vschool.io/bradleyabbitt/thing/', newUglyThing)
            .then(res => setThingList(prevList => ([
                ...prevList, res.data
            ])))
            .catch(error => console.log(error))
    }

    return( 
        <ThemeContext.Provider value={{
            thingList,
            uglyThing,
            setUglyThing,
            setThingList,
            postUglyThing,
            setRefresher,
            refresher
        }}>
            {props.children}
            </ThemeContext.Provider>
    )
}


export  {ThemeContext, ThemeContextProvider}