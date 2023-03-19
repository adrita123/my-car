import React from 'react'

const Navbar = ({filterItems, carList}) => {
    return ( <>
    
    <nav className="navbar">
              <div className="btn-group">
                
                {carList.map((currElem)=>{
                    return  (
                        <button className="btn-group__item" onClick={() => filterItems(currElem)}> {currElem} </button>    
                    );
                })}



        </div>
    </nav>
    </>
    )
}

export default Navbar