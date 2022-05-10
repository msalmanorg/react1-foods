import React from 'react'

const Cards = ({menuData}) => {
  return (
      <>
         <section className="main-card--cointainer">
                {
                    menuData.map((curElemt) => {
                        const { id, price, name, description, image } = curElemt;
                        return (
                            <>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{id}</span>
                                            <span className="card-author subtle"  >{price} </span>
                                            <h2 className="card-title"> {name} </h2>
                                            <span className="card-description subtle"> {description} </span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        <img src={image} alt="Image can't load" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
      </>
  )
}

export default Cards