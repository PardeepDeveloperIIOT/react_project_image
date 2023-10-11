import React from 'react'
import Cards1 from './Cards1'
import Header from './Header'
import '../index.css'

const ImagesContainer = ({ fullData, dataremove }) => {
    // console.log(fullData[0].title)
    return (
        <React.Fragment>
            <div className='ImageContainer'>
                <div className='Image-Section'>
                    <Header></Header>
                    <br/><br/><br/><br/><br/>
                    <div className='CardsContainer d-flex justify-content-around flex-wrap gap-3 pt-4 pb-4'>
                        {
                            fullData.map((array) => {
                                return <Cards1 {...array} dataremove={dataremove}></Cards1>
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImagesContainer