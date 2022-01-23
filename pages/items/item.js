import React from 'react'
import styles from './Item.module.css'
import Link from 'next/link'

const Item = () => (
    <div className="pageContainer">
        <div className={styles.itemWrapper}>
            <h3>Conversation with the Dead</h3>
            <img className={styles.itemImage} src="https://data.whicdn.com/images/336763346/original.jpg?t=1572197944"/>
            <p>30 minute conversation with someone who is beyond the veil. Spirit will present itself to us at will. No requests accepted.</p>
            <p>
                Posted by
                <Link className={styles.sellerName} href="/users/user"> Necromancer13</Link>
            </p>
            <p>$40.00</p>
            <button className="ctaButton">Add to cart</button>
        </div>
    </div>
)

export default Item

// item api:
// title
// price
// seller
// description
// for sale status -  is there one of each? or is there an on/off button for the seller7
// eventually add: reviews, or comments/questions section
