import classes from './Title.module.css';

export const Title = ({ children }) => {
    return <h1 className={classes.Title}>{children}</h1>;
};