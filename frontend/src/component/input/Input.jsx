import style from "./Input.module.css";
const Input = ({
  id = type,
  type = "text",
  name = "",
  children,
  controledComponent = false,
  wrapperProps = {},
  labelProps = {},
  inputProps = {},
}) => {
  let inputValue, setInputValue;

  if (controledComponent) {
    [inputValue, setInputValue] = controledComponent;
  }

  function handleOnchange(event) {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }

  return (
    <div className={style.wrapper} {...wrapperProps}>
      <input
        id={id}
        type={type}
        name={name}
        className={style.input}
        placeholder=" "
        {...(controledComponent
          ? { value: inputValue[name], onChange: handleOnchange }
          : {})}
        {...inputProps}
      />
      <label className={style.label} {...labelProps} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
export default Input;
