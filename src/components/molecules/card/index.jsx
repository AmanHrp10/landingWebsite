import styles from '../../../assets/css/global.module.css';

export default function Card({ name, phone, birthday, email, id, image }) {
  return (
    <div className={styles.card}>
      <div className='wrapper-card'>
        <div className='card-header d-flex justify-content-between'>
          <div style={{ width: '200px' }}>Personal ID: </div>
          <div
            className={styles.masterColor}
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {id}
          </div>
          <div style={{ color: 'gray' }}>
            <i className='fa fa-ellipsis-h fa-2x'></i>
          </div>
        </div>
      </div>
      <div className={`${styles.cardContent} card-body`}>
        <div className={`${styles.cardImage} mx-auto mb-3`}>
          <img
            src={image}
            alt={name}
            width='100%'
            height='100%'
            style={{
              objectFit: 'cover',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          />
        </div>

        <div className={`desc ${styles.noWrapper}`}>
          <h6 className='name'>Name</h6>
          <p
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
            className='name'
          >
            {name}
          </p>
          <h6 className='phone'>Telepon</h6>
          <p className='phone'>{phone}</p>
          <h6 className='birth'>Birthday</h6>
          <p className='birth'>{birthday}</p>
          <h6 className='email'>Email</h6>
          <p
            style={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
            className='email'
          >
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}
