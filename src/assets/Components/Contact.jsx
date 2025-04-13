import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  return (
    <div className="container-fluid back ">
        <div className=''>
            <h1 className='gt text-center'>Get in touch</h1>
            <div className='space'>

                {/* Corrected onClick for React */}
                <button 
                    onClick={() => window.location.href = 'mailto:shyuaib007@gmail.com'} 
                    className='btn rounded-pill bg-light text-dark clk'>
                    Email
                </button>

                {/* Placeholder button for GitHub */}
                <button 
                    onClick={() => window.location.href = 'https://github.com/shoaib73510'} 
                    className='btn rounded-pill bg-light text-dark clk'>
                    GitHub
                </button>

            </div>
        </div>

        <div className="bottom-fixed">
        © 2025 Mohammed Shoaib ur Rahman
      </div>
    </div>
  );
}

export default Contact;
