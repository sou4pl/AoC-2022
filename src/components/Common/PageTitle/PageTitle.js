import styles from './PageTitle.module.scss';

const PageTitle = ({children}) => {
  return (
      <div className={styles.title}>{children}</div>
  );
};

export default PageTitle;