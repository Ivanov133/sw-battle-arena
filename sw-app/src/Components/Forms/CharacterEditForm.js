import { useState } from 'react'
import styles from '../Forms/CharacterCreateForm.module.css'
import * as characterService from '../../services/characterService'


export const CharacterEditForm = ({
    onClose,
    character,
    setCharacter,
}) => {

    const [values, setValues] = useState({
        name: character.name,
        description: character.description,
        allegiance: character.allegiance,
        force: character.force,
        dueling: character.dueling,
        fullPower: character.fullPower,
        shortImg: character.shortImg,
        fullImg: character.fullImg,
        quote: character.quote,
        author: character.author,
        feats: character.feats,
    })

    const [errors, setErrors] = useState({
        name: false,
        description: false,
        allegiance: false,
        force: false,
        dueling: false,
        fullPower: false,
        shortImg: false,
        fullImg: false,
        quote: false,
        author: false,
        feats: false,
    })

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault()

        for (let key in errors) {
            if (errors[key]) {
                return alert("Not all input fields are valid!");
            }
        }

        for (let key in values) {
            if (!values[key]) {
                return alert("All fields are mandatory");
            }
        }

        let data = Object.fromEntries(new FormData(e.target.parentNode))
        data.feats = data.feats.split(",")

        characterService.editCharacter(data, character._id)
            .then(character => {
                setCharacter(character);
                onClose();
            });
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
        if (isNaN(values[e.target.name])) {
            setErrors(
                errors => ({
                    ...errors,
                    [e.target.name]: true,
                })
            )
        }
        else if (Number(values[e.target.name]) < min || Number(values[e.target.name]) > 100) {
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
        <div className={styles['form']}>
            <div onClick={onClose} className={styles['close-form']} title="Cancel">
                <img src="https://i.ibb.co/0XzFW4q/Delete-Red-X-Button-Transparent.png" alt="" />
            </div>
            <h1>Character Cretor</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input onBlur={(e) => validateLength(e, 3)} onChange={changeHandler} value={values.name} placeholder='Enter full name or nickname' id="name" type="text" name="name" />
                {errors.name && <p>Name must be at least 3 symbols long</p>}

                <label htmlFor="description">Description</label>
                <textarea onBlur={(e) => validateLength(e, 50)} onChange={changeHandler} value={values.description} placeholder='Describe your character' id="description" type="text" name="description" />
                {errors.description && <p>Description must be at least 50 symbols long</p>}

                <label htmlFor="allegiance">Allegiance</label>
                <select onChange={changeHandler} value={values.allegiance} id="allegiance" name="allegiance">
                    <option value="Dark Side">Dark Side</option>
                    <option value="Light Side">Light Side</option>
                </select>

                <label htmlFor="force">Force Power</label>
                <input onBlur={(e) => validatePositiveNum(e, 1)} onChange={changeHandler} value={values.force} placeholder='Metric only for the force power (1-100)' id="force" type="number" name="force" />
                {errors.force && <p>Force must be in range 1-100</p>}

                <label htmlFor="dueling">Dueling Power</label>
                <input onBlur={(e) => validatePositiveNum(e, 1)} onChange={changeHandler} value={values.dueling} placeholder='Metric only for the duling capabilities (1-100)' id="dueling" type="number" name="dueling" />
                {errors.dueling && <p>Dueling must be in range 1-100</p>}

                <label htmlFor="feats">Feats</label>
                <input onBlur={(e) => validateLength(e, 10)} onChange={changeHandler} value={values.feats} placeholder='List the characters feats and separate them with a comma "," ' id="feats" type="text" name="feats" />
                {errors.feats && <p>Feats must be at least 10 symbols long</p>}

                <label htmlFor="fullPower">Full Power</label>
                <input onBlur={(e) => validatePositiveNum(e, 1)} onChange={changeHandler} value={values.fullPower} placeholder='Takes into account all the above powers and feats (1-100)' id="fullPower" type="number" name="fullPower" />
                {errors.fullPower && <p>Full power must be in range 1-100</p>}

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
                <input onBlur={(e) => validateLength(e, 10)} onChange={changeHandler} value={values.quote} placeholder='What is said about the character from others, or by himself' id="quote" type="text" name="quote" />
                {errors.quote && <p>Quote must be at least 10 symbols long</p>}

                <label htmlFor="author">Quote Author</label>
                <input onBlur={(e) => validateLength(e, 3)} onChange={changeHandler} value={values.author} placeholder='Name of author' id="author" type="text" name="author" />
                {errors.author && <p>Name of author must be at least 3 symbols long</p>}



                <button onClick={onSubmit} className={styles['submit-btn']} >Edit</button>


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