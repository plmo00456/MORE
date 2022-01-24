import styles from './test.module.scss';

export default function Movie() {
    return (
        <div>
            <hr />
            <h2>영화 페이지</h2>
            <div className={styles.parent}>
                <div className='child'></div>
            </div>
            <div className='friend'></div>
        </div>
    );
}