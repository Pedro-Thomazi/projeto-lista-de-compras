import styles from './Form.module.css'

// Hooks
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const totalPrice = quantity * price


    // Lista dos produtos
    const [products, setProducts] = useState([])


    const handelName = (e) => {
        setName(e.target.value)
    }

    const handelQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handelPrice = (e) => {
        setPrice(e.target.value)
    }

    // Deletar um produto
    const deleted = (deletedProduct) => {
        console.log('Deletado', deletedProduct)
        setProducts(products.filter(product => product.name !== deletedProduct))
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        setProducts((prevState) => [...prevState, { // pega oq vc ja tem e add
            name,
            quantity,
            price,
            totalPrice
        }])

        setName('')
        setQuantity('')
        setPrice('')
    }

    return (
        <div className={styles.all}>
            <form className={styles.form} onSubmit={handelSubmit}>
                <h1>Digite o que vai comprar</h1>
                <div className={styles.name}>
                    <label htmlFor="name">Nome: </label>
                    <input type="text"
                        onChange={handelName}
                        value={name} />
                </div>
                <div className={styles.quantity}>
                    <label htmlFor="quantity">Quantidade: </label>
                    <input type="text"
                        onChange={handelQuantity}
                        value={quantity} />
                </div>
                <div className={styles.price}>
                    <label htmlFor="price">Preço: </label>
                    <input type="text"
                        onChange={handelPrice}
                        value={price} />
                </div>
                <input className={styles.btn} type="submit" value='Enviar...' />
            </form>

            <main className={styles.main}>
                <h1>O que comprar</h1>
                <ul>
                    {products.map((product, i) => (
                        <li key={i}>
                            <span className={styles.products}>
                                <p>Nome: {product.name} </p>
                                <p>Quantidade: {product.quantity}</p>
                                <p>Preço: R${product.price} </p>
                                <p>Valor Total: R${product.totalPrice}</p>
                            </span>
                            <span>
                                <i className="bi bi-x-circle-fill" onClick={() => deleted(product.name)}></i>
                            </span>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Form