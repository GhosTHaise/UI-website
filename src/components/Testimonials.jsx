import {feedback,clients} from "../constants"
import styles from "../style"
import FeadbackCard from "./FeadbackCard" 
import { airbnb,binance,coinbase,dropbox } from "../assets"
const Testimonials = () => 
( 
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
            <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
                <h1 className={styles.heading2}>
                    What people are <br className="sm:block hidden" /> saying about us
                </h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left maw-width-[470px]`}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
            </div>
            <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] `}>
                {feedback.map(card => (
                    <FeadbackCard key={card.id} {...card} />
                ))}
            </div>
            <div className={`flex gap-12 sm:flex-row flex-col items-center justify-center w-full ${styles.paddingY}`}>
                {clients.map((client,index) => ( 
                        <img key={client.id} className="w-[170px] h-[50px] object-contain" src={client.logo} alt={client.id} />
                ))}
                
                
            </div>
    </section>
)


export default Testimonials