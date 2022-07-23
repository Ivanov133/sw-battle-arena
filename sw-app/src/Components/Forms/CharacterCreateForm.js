import { useState } from 'react'
import styles from '../Forms/CharacterCreateForm.module.css'

export const CharacterCreateForm = ({
    onClose
}) => {

    const [shortImg, shortImgSetter] = useState(null)
    const [fullImg, fullImgSetter] = useState(null)

    
    const [shortImgInput, shortImgInputSetter] = useState(null)
    const [fullImgInput, fullImgInputSetter] = useState(null)

    function shortImgChangeHandler(e) {
        shortImgSetter(e.target.value)
        shortImgInputSetter(e.target.value)
    }

    function fullImgChangeHandler(e) {
        fullImgSetter(e.target.value)
        fullImgInputSetter(e.target.value)

    }

    return (
        <div className={styles['add-form']}>
            <h1>Character Cretor</h1>
            <button onClick={onClose} >Cancel</button>

            <form>
                <label htmlFor="name">Name</label>
                <input placeholder='Enter full name or nickname' id="name" type="text" name="name" />

                <label htmlFor="description">Description</label>
                <textarea placeholder='Describe your character' id="description" type="text" name="description" />

                <label htmlFor="allegiance">Allegiance</label>
                <select id="cars" name="cars">
                    <option value="volvo">Dark Side</option>
                    <option value="saab">Light Side</option>
                </select>
                
                <label htmlFor="force-power">Force Power</label>
                <input placeholder='Metric only for the force power (1-100)' id="force-power" type="number" name="force-power" />

                <label htmlFor="dueling">Dueling Power</label>
                <input placeholder='Metric only for the duling capabilities (1-100)' id="dueling" type="number" name="dueling" />

                <label htmlFor="full-power">Full Power</label>
                <input placeholder='Takes into account all the above powers and feats (1-100)' id="full-power" type="number" name="full-power" />

                <label htmlFor="shortImg">Card image</label>
                <input 
                    placeholder='URL of the image - will be displayed in the catalog section'
                    id="shortImg" 
                    type="text" 
                    name="shortImg"
                    onChange={shortImgChangeHandler} 
                    value={shortImgInput} />

                <label htmlFor="fullImg">Full Image</label>
                <input 
                    placeholder='URL of the image - will be displayed in the details section' 
                    id="fullImg" 
                    type="text" 
                    name="fullImg"
                    onChange={fullImgChangeHandler} 
                    value={fullImgInput} />

                <label htmlFor="quote">Quote</label>
                <input placeholder='What is said about the character from others, or by himself' id="quote" type="text" name="quote" />

                <label htmlFor="author">Quote Author</label>
                <input placeholder='Name of author' id="author" type="text" name="author" />

                <label htmlFor="feats">Feats</label>
                <input placeholder='List the characters feats and separate them with a comma "," ' id="feats" type="text" name="feats" />

            </form>

            <div className={styles['short-img-preview']}>
                <img src={shortImg} alt="" />
            </div>
            <div className={styles['full-img-preview']}>
                <img src={fullImg} alt="" />
            </div>
        </div>
    )


}