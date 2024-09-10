import style from "./Input.module.css";
const Input = ({
  id = type,
  type = "text",
  name = "",
  children,
  controledComponent: { 0: inputValue } = [null, null],
  controledComponent: { 1: setInputValue } = [null, null],
  wrapperProps = {},
  labelProps = {},
  inputProps = {},
}) => {
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
        {...inputProps}
        {...(inputValue
          ? {
              value: inputValue[name],
              onChange: handleOnchange,
            }
          : {})}
      />
      <label className={style.label} {...labelProps} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
export default Input;
