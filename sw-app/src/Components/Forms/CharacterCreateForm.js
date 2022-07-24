import { useState } from 'react'
import styles from '../Forms/CharacterCreateForm.module.css'

export const CharacterCreateForm = ({
    onClose
}) => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        allegiance: '',
        force: '',
        dueling: '',
        fullPower: '',
        shortImg: '',
        fullImg: '',
        quote: '',
        author: '',
        feats: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        allegiance: '',
        force: '',
        dueling: '',
        fullPower: '',
        shortImg: '',
        fullImg: '',
        quote: '',
        author: '',
        feats: '',
    })

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const validateLength = (e, minLength) => {
        if (values[e.target.name].length < minLength) {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: true,
                })
            )
        } else {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: false,
                })
            )
        }
    }

    const validatePositiveNum = (e, min) => {
        if (Number(values[e.target.name]) < min) {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: true,
                })
            )
        } else {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: false,
                })
            )
        }
    }

    return (
        <div className={styles['add-form']}>
            <div onClick={onClose} className={styles['close-form']} title="Cancel">
                <img src="https://i.ibb.co/0XzFW4q/Delete-Red-X-Button-Transparent.png" alt="" />
            </div>
            <h1>Character Cretor</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onBlur={(e) => validateLength(e, 3)} onChange={changeHandler} value={values.name} placeholder='Enter full name or nickname' id="name" type="text" name="name" />
                {errors.name && <p>TEST name error</p>}

                <label htmlFor="description">Description</label>
                <textarea onBlur={(e) => validateLength(e, 50)} onChange={changeHandler} value={values.description} placeholder='Describe your character' id="description" type="text" name="description" />
                {errors.description && <p>TEST name error</p>}

                <label htmlFor="allegiance">Allegiance</label>
                <select onChange={changeHandler} value={values.allegiance} id="allegiance" name="allegiance">
                    <option value="Dark Side">Dark Side</option>
                    <option value="Light Side">Light Side</option>
                </select>

                <label htmlFor="force">Force Power</label>
                <input onChange={changeHandler} value={values.force} placeholder='Metric only for the force power (1-100)' id="force" type="number" name="force" />
                {errors.description && <p>TEST name error</p>}

                <label htmlFor="dueling">Dueling Power</label>
                <input onChange={changeHandler} value={values.dueling} placeholder='Metric only for the duling capabilities (1-100)' id="dueling" type="number" name="dueling" />

                <label htmlFor="feats">Feats</label>
                <input onChange={changeHandler} value={values.feats} placeholder='List the characters feats and separate them with a comma "," ' id="feats" type="text" name="feats" />

                <label htmlFor="fullPower">Full Power</label>
                <input onChange={changeHandler} value={values.fullPower} placeholder='Takes into account all the above powers and feats (1-100)' id="fullPower" type="number" name="fullPower" />

                <label htmlFor="shortImg">Card image</label>
                <input
                    placeholder='URL of the image - will be displayed in the catalog section'
                    id="shortImg"
                    type="text"
                    name="shortImg"
                    onChange={changeHandler}
                    value={values.shortImg} />

                <label htmlFor="fullImg">Full Image</label>
                <input
                    placeholder='URL of the image - will be displayed in the details section'
                    id="fullImg"
                    type="text"
                    name="fullImg"
                    onChange={changeHandler}
                    value={values.fullImg} />

                <label htmlFor="quote">Quote</label>
                <input onChange={changeHandler} value={values.quote} placeholder='What is said about the character from others, or by himself' id="quote" type="text" name="quote" />

                <label htmlFor="author">Quote Author</label>
                <input onChange={changeHandler} value={values.author} placeholder='Name of author' id="author" type="text" name="author" />



                <button type='button' className={styles['submit-btn']} onClick={onSubmit} >Submit</button>


            </form>

            <div className={styles['short-img-preview']}>
                <img src={values.shortImg} alt="" />
                <h1>Card image preview</h1>

            </div>
            <div className={styles['full-img-preview']}>
                <img src={values.fullImg} alt="" />
                <h1>Full image preview</h1>
            </div>
        </div>
    )


}