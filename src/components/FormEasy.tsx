import React from 'react';
import * as rc from "rc-form";
import { IRcForm } from '../types/tc-form';
import Card from '../ui/Card';
import { FormGroup, Input } from '../ui/Form';
import Button from '../ui/Button';

interface PassedProps {
  form: IRcForm;
}

const requiredField = { required: true, message: "Field is required" };

const Form = (props: PassedProps) => {
  const { getFieldDecorator, getFieldError, validateFields } = props.form;
  const behavior = (str: string) => {
    return {
      initialValue: '',
      validateTrigger: getFieldError("phoneNumber")
        ? "onChange"
        : "onBlur",
      rules: [ requiredField ]
    }
  }

  const submit = () => { 
    const data = validateFields(["firstName", "lastName", "address"]);
    console.log("data", data);
  }

  return (
    <Card>
      <FormGroup>
        <label>First name:</label>
        {getFieldDecorator("firstName", behavior("firstName"))(
          <Input type="text" placeholder="John" />
        )}
        <small>{getFieldError("firstName") && getFieldError("firstName")[0]}</small>
      </FormGroup>
      <FormGroup>
        <label>Last name:</label>
        {getFieldDecorator("lastName", behavior("lastName"))(
          <Input type="text" placeholder="Doe" />
        )}
        <small>{getFieldError("lastName") && getFieldError("lastName")[0]}</small>
      </FormGroup>
      <FormGroup>
        <label>Address:</label>
        {getFieldDecorator("address", behavior("address"))(
          <Input type="text" placeholder="123 Sesame Street" />
        )}
        <small>{getFieldError("address") && getFieldError("address")[0]}</small>
      </FormGroup>
      <Button onClick={() => submit()} type="submit">Save</Button>
    </Card>
  )
}

export default rc.createForm("my-form")(Form);