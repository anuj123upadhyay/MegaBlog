import PropTypes from "prop-types"

function Logo({ classNames }) {
  return (
    <div className={`${classNames} font-bold`}>
      MERN<span className="text-orange-400">blog</span>
    </div>
  )
}


Logo.propTypes = {
  children: PropTypes.string,
  classNames: PropTypes.string
}
export default Logo
