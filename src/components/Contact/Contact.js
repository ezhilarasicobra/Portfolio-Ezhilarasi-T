import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='project-section' style={{display:"flex" ,
    flexDirection:"column",   alignItems:"center"}}>
      <div >
        <h2 className='section__title'>Interest / Achievements</h2>
      </div>
      <div>
      <div className='boxes rotate-360-clockwise'> 
      Have Worked in More than 10 Automation Enhancements. 
      Been a Extra Mile Worker in my Project.
      </div>
      

      </div>
      
      
    </section>
  )
}

export default Contact
