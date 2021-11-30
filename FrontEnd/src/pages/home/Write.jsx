import React from 'react'
import './write.css'

const Write = () => {
    return (
        <div className='write'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSSyK7F_PqRWcByTJEPEqIHG27MW-2T5jiA&usqp=CAU'
                className='write-img'
                alt='' />
           <form className='write-form'>
               <div className="write-form-group">
                   <label htmlFor='file-input' >
                        <i class="writeIcon fas fa-plus"></i>
                   </label>
                   <input type='file' 
                        id='file-input' 
                        style={{display:'none'}} />

                   <input type='text' 
                            placeholder='Title'
                            className='write-input' 
                            autoFocus={true} />
               </div>
               <div className="write-form-group">
                   <textarea placeholder='Tell your story...'
                            type='text'
                            className='write-input write-text'>
                    </textarea>
               </div>
               <button className='write-submit'>Publish</button>
           </form>
        </div>
    )
}

export default Write
