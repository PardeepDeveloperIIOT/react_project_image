import React from 'react'

const Cards1 = ({ id, title, discription, img, dataremove }) => {

    return (
        <React.Fragment>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{discription}</p>
                        <button className='btn btn-outline-danger' onClick={() => dataremove(id)}>Not Intrested</button>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Cards1