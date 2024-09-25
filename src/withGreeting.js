const withGreeting = (OriginalComponent) => {
  const NewComponent = (props) => {
    alert(`Hello ${props.name}`);
    return <OriginalComponent {...props} />;
  };
  return NewComponent;
};

export default withGreeting;
