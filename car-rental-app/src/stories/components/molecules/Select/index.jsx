import { Form } from "react-bootstrap";
import Option from "../../atoms/option";

const Select = ({ models, defOption, ...props }) => {
  return (
    <Form.Select {...props}>
      <Option value="">{defOption}</Option>
      {models &&
        models.map((model, index) => {
          return (
            <Option key={index} value={model}>
              {model}
            </Option>
          );
        })}
    </Form.Select>
  );
};

export default Select;
