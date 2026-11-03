import PropTypes from "prop-types";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default SkillsCard;
