import { Form, Input } from 'antd';

const {TextArea} = Input

const makeField = (Component) => ({
    input,
    meta,
    children,
    hasFeedback,
    label,
    ...rest
  }) => {
    const hasError = meta.touched && meta.invalid;
    return (
      <Form.Item
        label={label}
        validateStatus={hasError ? "error" : "success"}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
      >
        <Component {...input} {...rest} children={children} />
      </Form.Item>
    );
  };

export const NewInput = makeField(Input);
export const NewTextArea = makeField(TextArea);

 