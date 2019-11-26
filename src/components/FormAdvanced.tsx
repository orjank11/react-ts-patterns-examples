import React from 'react';
import * as rc from "rc-form";
import { IRcForm } from '../types/tc-form';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FormGroup, Input } from '../ui/Form';

interface PassedProps {
  form: IRcForm;
}

const requiredField = { required: true, message: "Field is required" };

const Form = (props: PassedProps) => {
  const { getFieldDecorator, getFieldError } = props.form;
  console.log(getFieldError("phoneNumber"))
  return (
    <Card>
      <form onSubmit={(e) => {
        e.preventDefault();

      }}>
          <FormGroup>
            <label>
              Email:
            </label>

              {getFieldDecorator("email", {
                initialValue: '',
                validateTrigger: getFieldError("email") ? "onChange" : "onBlur",
                rules: [
                  requiredField,
                  { type: "email", message: "Field need to be an email." }
                ]
              })(<Input type="email"  placeholder="john@example.com" />)}
              <div>{getFieldError("email") && getFieldError("email")[0]}</div>
          </FormGroup>
          <FormGroup>
            <label className="phoneNumber">
              Phone number:
            </label>

            {getFieldDecorator("phoneNumber", {
              initialValue: '',
              validateTrigger: getFieldError("phoneNumber")
                ? "onChange"
                : "onBlur",
              rules: [
                { whitespace: false, message: "fieldNoWhitespace" },
                { len: 8, message: "Phone number requires to have 8 digits. " },
                {
                  validator: (rule, value, callback) => {
                    const exp = /^(0047|\+47|47)?[2-9]\d{7}$/;
                    if (!exp.test("+47" + value)) {
                      callback("Field is not a valid phone number. ");
                      return;
                    }
                    callback();
                  }
                },
                requiredField
              ]
            })(
              <Input type="phone" placeholder="987 34 321" />
            )}
          <div>{getFieldError("phoneNumber") && getFieldError("phoneNumber")[0]}</div>
          </FormGroup>
          <Button type="submit">Save</Button>
      </form>
    </Card>
  )
}

export default rc.createForm()(Form);