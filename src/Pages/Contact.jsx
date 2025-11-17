import React from 'react'
import Navbar from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main>
        <ContactForm />
    </main>
    <footer>
        <Footer />
    </footer>
      
    </>
  )
}

export default Contact
