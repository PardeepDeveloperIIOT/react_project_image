import React, { useState } from 'react'
import ImagesContainer from './Components/ImagesContainer'
import ImgData from './Components/ImageData'
import Header from './Components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [showData, storeData] = useState(ImgData)

  if (showData.length === 0) {
    return (
      <div>
        <div className='Image-Section'>
          <Header></Header>
        </div>
        <br /><br /><br /><br /><br />
        <div className='text-center'>
          <h1 className=' border border-3 '>Reset Image Data</h1>
          <button className='btn btn-danger px-5' onClick={() => storeData(ImgData)}>Reset</button>
        </div>
      </div>
    )
  }

  const dataremove = (id) => {
    const filterData = showData.filter((myid) => {
      return (
        myid.id !== id
      )
    })
    storeData(filterData)
    console.log(filterData)
  }
  return (
    <React.Fragment>
      <ImagesContainer fullData={showData} dataremove={dataremove} ></ImagesContainer>
    </React.Fragment>
  )
}

export default App