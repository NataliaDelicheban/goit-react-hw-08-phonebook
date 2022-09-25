import PropTypes from "prop-types";

import css from "./container.module.css";

const Container = ({title, children}) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>{title}</h2>
            {children}
        </div>
    )
}

export default Container;

Container.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}