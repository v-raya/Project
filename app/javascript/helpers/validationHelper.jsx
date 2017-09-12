export const validateOnBlur = (componentInstance, type, value) => {
  componentInstance.props.validator.validateField(type, value)
  componentInstance.forceUpdate()
}
