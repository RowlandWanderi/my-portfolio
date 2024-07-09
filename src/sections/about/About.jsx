import AboutImage from '../about/rowland.jpeg';
import CV from '../PDFS/RowlandWanderi.pdf'
import { HiDownload } from "react-icons/hi";
import data from './data';
import Card from '../../components/Card';
import './about.css'

const About = () => {
    return (
        <section id='about' data-aos="zoom-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__potrait">
                        <img src={AboutImage} alt="About pic" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    
                    <p>
                        Hey there,
                        I'm Rowland Wanderi, representing Nairobi, Kenya – your go-to guy for all things web development! As a full-stack web developer armed with a Certificate in Software Engineering, my mission is clear: to get your business rocking online with top-notch design and all the bells and whistles for a smooth digital operation.
                        I'm all about bringing your business to life in the online world. Let's chat about your project specifics, and we can dive into making your digital dreams a reality. Curious about my background? Check out the details in my resume below!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About