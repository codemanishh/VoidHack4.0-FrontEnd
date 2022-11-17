import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import "./Viewcomplain.css"
import "./Postcomplain.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';



function Postcomplain() {

    const uploadedImage = React.useRef(null);
        const imageUploader = React.useRef(null);
    const handleImageUpload = e => {

                e.preventDefault()
                const [file] = e.target.files;
                if (file) {
                    const reader = new FileReader();
                    const { current } = uploadedImage;
                    current.file = file;
                    reader.onload = e => {
                        current.src = e.target.result;
                        console.log(current.src);
        
                    };
                    reader.readAsDataURL(file);
        
                }
            };
           
  return (
    <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />

            <div className='Post-complain-box'>
            <div className='Teaxt-area-complain-box'>
            <TextareaAutosize
  aria-label="empty textarea"
  placeholder="Write your complain here..."
  style={{ width: 700 }}
/>
                       
            </div>
            <div className='post-btn-container'>
            <button  className='Postcomplain-btn'>Post Complain</button><br/>
            
            <div
                            style={{
                                // display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                ref={imageUploader}
                                style={{
                                    display: "none"
                                }}
                            />
                            <div
                               
                                onClick={() => imageUploader.current.click()}
                            >
                                <button ref={uploadedImage}  className='uploadimage-btn'>Upload Images</button>

                                    
                                    
                                   
                                 
                            </div>
            </div>
            
            
    
            </div>

        
        </div>
</div>
        </div>
  )
}

export default Postcomplain