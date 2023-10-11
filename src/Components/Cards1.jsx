import React, { useState } from 'react'

const Cards1 = ({ id, title, discription, img, dataremove }) => {

    const [textUse, textSet] = useState(true)
    let halfDiscription = `${discription.substr(0, 122)} ...`
    let FullDiscription = `${discription.substr(0, 150)}`

    const changeValue = () => {
        textSet(!textUse)
    }

    return (
        <React.Fragment>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    {textUse ? <p onClick={changeValue} class="card-text">{halfDiscription} <span style={{ cursor: "pointer" }} className=' text-primary'>See more</span></p> : <p onClick={changeValue} class="card-text">{FullDiscription} <span style={{ cursor: "pointer" }} className=' text-primary'>See Less</span></p>}
                    <button className='btn btn-outline-danger' onClick={() => dataremove(id)}>Not Intrested</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards1