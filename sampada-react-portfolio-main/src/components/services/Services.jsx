import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3> Marketing Consultation</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Conduct data analyses on pre-existing business performance.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Survey current marketing plan and adjust for target market.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>UI/UX consultations and subsequent website improvements.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Implement modern strategies to impact key metrics.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Provide industry knowledge on e-commerce strategy.</p>
            </li>
          </ul>
        </article>
        {/* START WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3> Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Front to back-end development (with database functionality).</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Third-party platform development (Shopify, WordPress, Wix).</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Continued consultations on structure and design of website.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Wireframe (mockup) of website prior to the start of project.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Responsive and Semantic web-design that is inclusive.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>UI/UX centered design to keep site easy and legible.</p>
            </li>
          </ul>
        </article>
        {/* START OF CONTENT CREATION */}
        <article className='service'>
          <div className="service__head">
            <h3> Creative Collaboration</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
            <p>Content creation with Adobe Suite (digital graphic design).</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Photography and editing services for your site or in general.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Art Commisions in 2D/3D Art (contact for more information).</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Generating GIFs, Photo Graphics, etc. for your site or in general.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
            <p>Custom requests accepted, please use the form below.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services