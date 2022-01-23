import React from 'react'
import styles from './User.module.css'
import Link from 'next/link'

const UserProfile = () => (
    <div className={`${styles.profileContainer} pageContainer`}>
        <div className={styles.profileWrapper}>
            <div className={styles.profileImage}>
                <img className="" src="https://www.goodtomicha.com/wp-content/uploads/2019/10/orange-smoke-bomb-pumpkin-shoot-1300x1950.jpg" />
            </div>
            <div className={styles.profileInfo}>
                <h3 className={styles.title}>Necromancer13</h3>
                <p className={styles.userType}>Necromancer, Virtual</p>
                <p className="paragraph">
                    I’m a writer and artist from Dallas, Texas and the owner of the witchy shop Grove and Grotto Path-wise, I’m a queer Faery solitary-ish Hermetic classical Pagan, a seer and diviner, a medium-hard polytheist, and an equal-opportunity crasher of Wiccan, Thelemic, and Chaos magick parties. I’m not an officer or an initiate of anything (and I like it that way).
                </p>
                <button className="ctaButton">Contact</button>
            </div>
        </div>

        <div className={styles.marketWrapper}>
            <Link href="/items/item">
                <div className={styles.itemCard}>
                    <h5>Conversation with the Dead</h5>
                    <img className={styles.itemImage} src="https://data.whicdn.com/images/336763346/original.jpg?t=1572197944"/>
                </div>
            </Link>

            <Link href="/items/item">
                <div className={styles.itemCard}>
                    <h5>Conversation with Dead Royalty</h5>
                    <img className={styles.itemImage} src="https://images.metmuseum.org/CRDImages/eg/original/89.2.660_EGDP013679.jpg"/>
                </div>
            </Link>

            <Link href="/items/item">
                <div className={styles.itemCard}>
                    <h5>Conversation with Dead Celebrity</h5>
                    <img className={styles.itemImage} src="https://media.glamour.com/photos/569ec1249d41c3800fc7cc43/master/w_1600%2Cc_limit/marilyn-monroe.jpg"/>
                </div>
            </Link>
        </div>
    </div>
)

export default UserProfile

// user api:
// name (any type of text allowed?)
// type - hardcoded list of options. eventually will serve as a tag. v1 will use in search
// biography (any type of text allowed?)
// location - v1 is virtual. v2 is a dropdown, with virtual being a second option.
// eventually - reviews
// button to contact seller. v2 will be a messaging system. v1 is mailto, so need their email
// v2 allow editing of photo, profile layout options
