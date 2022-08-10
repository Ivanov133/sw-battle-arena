import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from '../../contexts/authContext'

export const Home = () => {
    const { user } = useState(AuthContext)
    return (
        <>

            <div className={styles["main-wrapper"]}>
                <header>
                    <div className={styles["transperant-img1-wrapper"]}>
                        <img src="https://i.ibb.co/VBrJSH0/vader-transperant.png" alt="" />
                    </div>
                    <h1>Welcome to Star Wars - Battle Arena</h1>
                    {user?.email
                        ? <p>For full experience, please create your account from <Link to={'/register'} >here</Link></p>
                        : null}
                    <div className={styles["transperant-img2-wrapper"]}>
                        <img src="https://i.ibb.co/GHDZsW1/starwars-PNG40.png" alt="" />
                    </div>
                </header>
                <section className={styles["about-us"]}>
                    <h4>This site is meant to be an online forum in which you will find information about various Star Wars characters and discuss them.
                        You can create your own characters and make them battle one another. We will calculate the odds and the possible outcome of the battle.</h4>
                </section>
                <section className={styles["functionalities"]}>
                    <h2>The side supports the following actions for logged users:</h2>
                    <div className={styles["function-wrapper"]}>
                        <h4>Add new character:</h4>
                        <span>You need to press the ADD button in the <Link to={'/catalog'} >Catalog section</Link></span>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
                        </div>
                        <span>and fill in the form.</span>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <h4>Add new battle:</h4>
                        <span>You need to select two characters from the catalog by pressing the</span>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/zS4qNwZ/transparent-sword-icon-vikings-icon-swords-icon-60bc20b3a15aa4-1746426716229418756609.png" alt="" />
                        </div>
                        <p>icon which is on the upper left of the character card. Once the characters are selected,
                            a link will appear which leads to the creation page - you have to commit the battle and it will show in the <Link to={'/battles-catalog'}>Battles catalog</Link></p>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <h4>Add comment:</h4>
                        <p>Every character and battle can be discussed - you can post your comment by filling the "Add comment" form</p>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <h4>Content modification:</h4>
                        <p>Every user can edit and delete their created characters and comments</p>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <h4>Profile managment:</h4>
                        <p>You can view and modify your profile from <Link to={'/profile'}>here</Link></p>
                    </div>
                </section>
                <section className={styles["functionalities"]}>
                    <h2>Character stats tutorial:</h2>
                    <div className={styles["function-wrapper"]}>
                        <h4>Each character has the following:</h4>
                        <span>DUELING/MELEE statistic under the lightsaber</span>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/TcTRP7m/Png-Item-1381523.png" alt="" />
                        </div>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/0nhqKwp/icon-lightsaber-1.png" alt="" />
                        </div>
                        <span>icons, which has a value that measures only the dueling capabilities of the character.</span>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <span>FORCE power statistic under the force</span>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/q5jfZG3/force-png.png" alt="" />
                        </div>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/jMW3YPR/ls-force.png" alt="" />
                        </div>
                        <span>icons, which has a value that measures only the force capabilities of the character.</span>
                    </div>
                    <div className={styles["function-wrapper"]}>
                        <span>FULL POWER statistic under this icon</span>
                        <div className={styles["img-wrapper"]}>
                            <img src="https://i.ibb.co/yy864NN/5a32bf7047e2870dc3bf81a5d8c7db1e361c329f-00-removebg-preview.png" alt="" />
                        </div>
                        <span>which has a value that measures full power of the character. It can be very different from the other two stats, because it not only takes them into consideration, but it measures the overall power based on the character feats as well.</span>
                    </div>
                </section>

                <div className={styles["img-wrapper"]}>

                </div>
            </div>
        </>
    )
}