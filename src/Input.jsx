import {React, useContext} from 'react'
import DataContext from './DataContext'

const Input = () => {
    const { imgPreview, setImgPreview, error,handleImageChange} = useContext(DataContext)
  return ( 
    <div className="container">
        {error && <p className="errorMsg">File not supported</p>}
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#131313"
          }}
        >
          {!imgPreview && (
            <>
              <p>Add an image</p>
              <label htmlFor="fileUpload" className="customFileUpload">
                Choose file
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span>(jpg, jpeg or png)</span>
            </>
          )}
        </div>
        {imgPreview && (
          <button onClick={() => setImgPreview(null)}>Remove image</button>
        )}
      </div>
  )
}

export default Input