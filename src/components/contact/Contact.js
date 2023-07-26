import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
    <section className="team-sec py-48" data-scroll-section>
        <div className="container mx-auto">
          <div className="sr-wrap mb-36">
            <ul className="slist mb-20">
              <li>
                <div className="s-h">
                  <h4>work with us</h4>
                </div>
              </li>
              <li>
                <div className="m-h col-span-2">
                  <h1>
                  Hey! Lets chat
                    <br />
                    about your project
                  </h1>
                </div>
              </li>
            </ul>
           
          </div>
          <div className='ct-wrap'>
            <form>
                <div className='ct-bx'>
                    <label>Whats your name?</label>
                    <input placeholder='Full Name' type='text' />
                </div>
                <div className='ct-bx'>
                    <label>Your email?</label>
                    <input placeholder='Email Address' type='email' />
                </div>
                <div className='ct-bx'>
                    <label>Whats your number?</label>
                    <input placeholder='Phone Number' type='number' />
                </div>
                <div className='ct-bx'>
                    <label>Tell us about your project</label>
                    <input placeholder='Project overview' type='text' />
                </div>
                <div className='ct-btn'>
                   
                   <button>Submit Form<span className='arw'><BsArrowUpRight /></span></button>
                </div>
            </form>
          </div>
          </div>
          </section>
    </>
  )
}
