const SocialMediaIcons = (props) => {
  return (
    <div
      key={props.index}
      className={`w-8 h-8 rounded-full p-2 flex bg-gray-700 hover:bg-primary transition-all ${props.additionalStyle}`}
    >
      <a href={props.url} target="_blank">
        <img src={props.icon} alt={props.iconName}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
