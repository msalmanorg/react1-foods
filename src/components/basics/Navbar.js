import React from 'react'

const Navbar = ({ menu, setMenu }) => {

    const filterCards = (catagory) => {
            const filteredCards = menu.filter((curElemt) => {
                return curElemt.category === catagory;
            })
            setMenu(filteredCards);
    }

    const MenuCatagories = [
        ...new Set(
            menu.map((e) => {
                return e.category;
            })
        )
    ]
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        MenuCatagories.map((e) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterCards(e)} > {e} </button>
                            )
                        })
                    }
                    <button className="btn-group__item" onClick={()=> setMenu(menu)} > All </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar