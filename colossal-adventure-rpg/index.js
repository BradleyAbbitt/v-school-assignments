/* Problems:
1. runs the event listener multiple times if switching between "fight" and "run",
2. Inventory prints multiple times; how to remove the div and re-add it each time the event listener is activated */


let mileCount = 0
let hp = 100


let goldInventory = 0
let weaponFragments = 0
let armorFragments = 0

username = localStorage.getItem("usernameString")

deathPopUp = document.getElementById("deathPopUp")

document.addEventListener("keydown", function walking (event) {
    
    if (event.key === "w") {


        let chance = Math.floor(Math.random() * 8) + 1
        
        switch(chance) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                let popUp1 = document.getElementById("popUp1")
                popUp1.style = "display: flex"
                mileCount += 1
                let continueButton = document.getElementById("continue")
                continueButton.addEventListener("click", function continueWalk() {
                    popUp1.style = "display: none;"
                    continueButton.removeEventListener("click", continueWalk)
                })

                break
            case 6:
                let popUp2 = document.getElementById("popUp2")
                
                popUp2.style = "display: flex"
                
                let fight1 = document.getElementById("fight1")
                let run1 = document.getElementById("run1")
                let goblinHp = 25

                fight1.addEventListener("click", function fighting1 (e) {
                    
                    let attackDamage = Math.floor(Math.random() * 20) + 1
                    let goblinDamage = Math.floor(Math.random() * 7) + 1
                    

                    goblinHp = goblinHp - attackDamage
                    
                    if (goblinHp <= 0) {
                        
                        let goldChance = Math.floor(Math.random() * 15) + 1
                        let armorFrgmntChance = Math.floor(Math.random() * 5)
                        let weaponFrgmntChance = Math.floor(Math.random() * 5)
                        let healthRestoreChance = Math.floor(Math.random() * 10) + 1

                        alert("The Goblin Has Been Slain!")
                        alert("You have found " + goldChance + " Gold, " + weaponFrgmntChance + " Weapon Fragment(s), " + armorFrgmntChance + " Armor Fragment(s). You Also Find a Health Potion Restoring " + healthRestoreChance + " Health")
                        goldInventory = goldChance + goldInventory
                        weaponFragments = weaponFrgmntChance + weaponFragments
                        armorFragments = armorFrgmntChance + armorFragments
                        hp = healthRestoreChance + hp
                            if (hp > 100) {
                            hp = 100
                            }
                        
                        // runDiv.style = "display: none"
                        popUp2.style = "display: none"
                        goblinHp = 25
                        fight1.removeEventListener("click", fighting1)
                        // e.stopPropagation()
                    
                   

                    } else {
                        hp = hp - goblinDamage
                        if (hp < 0) {
                            hp = 0
                        }
                        alert("You Strike the Goblin, Dealing " + attackDamage + " Damage. " + goblinHp + " Health Remains")
                        alert("The Goblin Attacks You, Dealing " + goblinDamage + " Damage. " + hp + " Health Remains")
                        // e.stopPropagation()
                    
                    } if (hp <= 0) {
                            if (hp < 0) {
                            hp = 0
                        }
                        alert("The Goblin Dealt " + goblinDamage + " Damage, which Brought " + username + " to their Demise... You Survived " + mileCount + " Miles.")
                        popUp2.style = "display: none"
                        deathPopUp.style = "display: flex;"
                    }
                })

                run1.addEventListener("click", function running1 (event) {

                    let runChance = Math.floor(Math.random() * 2) + 1
                    let goblinDamage2 = Math.floor(Math.random() * 7) + 1

                    switch(runChance) {
                        case 1:
                            alert("You have Escaped!")
                            popUp2.style = "display: none"
                            goblinHp = 25
                            run1.removeEventListener("click", running1)
                            break
                        
                        case 2: 
                            alert("Escape attempt has Failed")
                            hp = hp - goblinDamage2
                            alert("The Goblin Attacks You, Dealing " + goblinDamage2 + " Damage. " + hp + " Health Remains")
                            break

                    }
                })
                break 
            case 7:
            let popUp3 = document.getElementById("popUp3")
                
            popUp3.style = "display: flex"
            
            let fight2 = document.getElementById("fight2")
            let run2 = document.getElementById("run2")
            let banditHp = 35

            fight2.addEventListener("click", function fighting2 () {
                    
                let attackDamage = Math.floor(Math.random() * 20) + 1
                let banditDamage = Math.floor(Math.random() * 15) + 1
                

                banditHp = banditHp - attackDamage
                
                if (banditHp <= 0) {
                    
                    let goldChance = Math.floor(Math.random() * 40) + 1
                    let armorFrgmntChance = Math.floor(Math.random() * 7)
                    let weaponFrgmntChance = Math.floor(Math.random() * 7)
                    let healthRestoreChance = Math.floor(Math.random() * 15) + 1

                    alert("The Bandit Has Been Slain!")
                    alert("You have found " + goldChance + " Gold, " + weaponFrgmntChance + " Weapon Fragment(s), " + armorFrgmntChance + " Armor Fragment(s). You Also Find a Health Potion Restoring " + healthRestoreChance + " Health")
                    goldInventory = goldChance + goldInventory
                    weaponFragments = weaponFrgmntChance + weaponFragments
                    armorFragments = armorFrgmntChance + armorFragments
                    hp = healthRestoreChance + hp
                        if (hp > 100) {
                        hp = 100
                        }
                    
                    // runDiv.style = "display: none"
                    popUp3.style = "display: none"
                    banditHp = 35
                    fight2.removeEventListener("click", fighting2)
                    // e.stopPropagation()
                
               

                } else {
                    hp = hp - banditDamage
                    if (hp < 0) {
                        hp = 0
                    }
                    alert("You Strike the Bandit, Dealing " + attackDamage + " Damage. " + banditHp + " Health Remains")
                    alert("The Bandit Attacks You, Dealing " + banditDamage + " Damage. " + hp + " Health Remains")
                    // e.stopPropagation()
                
                } if (hp <= 0) {
                        if (hp < 0) {
                        hp = 0
                    }
                    alert("The Bandit Dealt " + banditDamage + " Damage, which Brought " + username + " to their Demise... You Survived " + mileCount + " Miles.")
                    popUp3.style = "display: none"
                    deathPopUp.style = "display: flex;"
                }
            })

            run2.addEventListener("click", function running2 () {

                    let runChance = Math.floor(Math.random() * 2) + 1
                    let banditDamage = Math.floor(Math.random() * 13) + 1


                    switch(runChance) {
                        case 1:
                            alert("You have Escaped!")
                            popUp3.style = "display: none"
                            banditHp = 35
                            run2.removeEventListener("click", running2)
                            break
                        
                        case 2: 
                            alert("Escape attempt has Failed")
                            hp = hp - banditDamage
                            alert("The Bandit Attacks You, Dealing " + banditDamage + " Damage. " + hp + " Health Remains")

                    }
                })
                break
            case 8:
            let popUp4 = document.getElementById("popUp4")
                
            popUp4.style = "display: flex"
            
            let fight3 = document.getElementById("fight3")
            let run3 = document.getElementById("run3")
            let giantHp = 50

            fight3.addEventListener("click", function fighting3 () {
                    
            let attackDamage = Math.floor(Math.random() * 20) + 1
            let giantDamage = Math.floor(Math.random() * 25) + 1
            

            giantHp = giantHp - attackDamage
            
            if (giantHp <= 0) {
                
                let goldChance = Math.floor(Math.random() * 70) + 1
                let armorFrgmntChance = Math.floor(Math.random() * 12)
                let weaponFrgmntChance = Math.floor(Math.random() * 12)
                let healthRestoreChance = Math.floor(Math.random() * 25) + 1

                alert("The Giant Has Been Slain!")
                alert("You have found " + goldChance + " Gold, " + weaponFrgmntChance + " Weapon Fragment(s), " + armorFrgmntChance + " Armor Fragment(s). You Also Find a Health Potion Restoring " + healthRestoreChance + " Health")
                goldInventory = goldChance + goldInventory
                weaponFragments = weaponFrgmntChance + weaponFragments
                armorFragments = armorFrgmntChance + armorFragments
                hp = healthRestoreChance + hp
                    if (hp > 100) {
                    hp = 100
                    }
                // runDiv.style = "display: none"
                popUp4.style = "display: none"
                giantHp = 50
                fight3.removeEventListener("click", fighting3)
                // e.stopPropagation()
            
           

            } else {
                hp = hp - giantDamage
                if (hp < 0) {
                    hp = 0
                }
                alert("You Strike the Giant, Dealing " + attackDamage + " Damage. " + giantHp + " Health Remains")
                alert("The Giant Attacks You, Dealing " + giantDamage + " Damage. " + hp + " Health Remains")
                // e.stopPropagation()
            
            } if (hp <= 0) {
                    if (hp < 0) {
                    hp = 0
                }
                alert("The Giant Dealt " + giantDamage + " Damage, which Brought " + username + " to their Demise... You Survived " + mileCount + " Miles.")
                popUp4.style = "display: none"
                deathPopUp.style = "display: flex;"
            }
        })

            run3.addEventListener("click", function running3 () {

                    let runChance = Math.floor(Math.random() * 2) + 1
                    let giantDamage = Math.floor(Math.random() * 20) + 1
        
        
                        switch(runChance) {
                            case 1:
                                alert("You have Escaped!")
                                popUp4.style = "display: none"
                                giantHp = 50
                                run3.removeEventListener("click", running3)
                                break
                                
                            case 2: 
                                alert("Escape attempt has Failed")
                                hp = hp - giantDamage
                                alert("The Giant Attacks You, Dealing " + giantDamage + " Damage. " + hp + " Health Remains")
        
                        }
                })




                break
        }
        
    //     ATTEMPT 2 AT RUN BUTTON:

    // switch(chance) {

    //         case 6:
    //         case 7:
    //         case 8: 
    //     const runButton = document.getElementById("runButton")
    //     const runDiv = document.getElementById("runDiv")
    //     runDiv.style = "display: flex"

    //     runButton.addEventListener("click", function run () {
        
    //         const escapeChance = Math.floor(Math.random() * 2) + 1
        
    //             switch(escapeChance) {
        
    //                 case 1: 
    //                     alert("You Have Successfully Escaped!")
    //                     popUp2.style = "display: none"
    //                     popUp3.style = "display: none"
    //                     popUp4.style = "display: none"
        
    //                     break
                    
    //                 case 2:
    //                     const failedRunDamage = Math.floor(Math.random() * 20) + 1
    //                     hp = hp - failedRunDamage
    //                     alert("Escape Attempt Failed! You Took " + failedRunDamage + " Damage During the Attempt. " + hp + " Health Remains" )
    //             }
        
        
    //     }) 
    }
})




const inventory = document.getElementById("inventory")


document.addEventListener("keydown", function off (event) {
    if (event.key === "p") {
        
        // body.append(inventory)

        // let inventoryOnce = Math.floor(Math.random()) + 1

        // switch(inventoryOnce) {

        //     case 1:

        
        inventory.style = "display: flex;"


        const goldDiv = document.createTextNode("Gold: " + goldInventory)
        document.getElementById("goldInventory").append(goldDiv)

        const weaponFragmentsDiv = document.createTextNode("Weapon Fragments: " + weaponFragments)
        document.getElementById("weaponFragments").append(weaponFragmentsDiv)

        const armorFragmentsDiv = document.createTextNode("Armor Fragments: " + armorFragments)
        document.getElementById("armorFragments").append(armorFragmentsDiv)

        const playerHealthDiv = document.createTextNode(username + "'s HP: " + hp)
        document.getElementById("playerHealth").append(playerHealthDiv)

        const mileCountDiv = document.createTextNode("Current Distance Traveled: " + mileCount + " Miles")
        document.getElementById("mileCounter").append(mileCountDiv)

        const inventoryClose = document.getElementById("inventoryClose")
        inventoryClose.addEventListener("click", function close () {
                document.removeEventListener("keydown", off)
                // inventory.remove()
                inventory.style = "display: none"
        
        })
        // }
    }
})


// const runButton = document.getElementById("runButton")

// runButton.addEventListener("click", function run () {

//     const escapeChance = Math.floor(Math.random() * 2) + 1

//         switch(escapeChance) {

//             case 1: 
//                 alert("You Have Successfully Escaped!")
//                 popUp2.style = "display: none"
//                 popUp3.style = "display: none"
//                 popUp4.style = "display: none"

//                 break
            
//             case 2:
//                 const failedRunDamage = Math.floor(Math.random() * 20) + 1
//                 hp = hp - failedRunDamage
//                 alert("Escape Attempt Failed! You Took " + failedRunDamage + " Damage During the Attempt. " + hp + " Health Remains" )
//         }


// })