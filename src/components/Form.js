const Form = {
  Input() {
    return <input />;
  },
  CheckBox() {
    return (
      <input
        type="checkbox"
        onClick={() => {
          console.log(Math.random());
        }}
      />
    );
  },
  Button(value) {
    return <input type="button" value="click  me" />;
  },
};

export default Form;
