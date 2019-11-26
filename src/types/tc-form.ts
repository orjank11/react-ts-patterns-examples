type ValidationRule = {
  /** validation error message */
  message?: React.ReactNode;
  /** built-in validation type, available options: https://github.com/yiminghe/async-validator#type */
  type?: string;
  /** indicates whether field is required */
  required?: boolean;
  /** treat required fields that only contain whitespace as errors */
  whitespace?: boolean;
  /** validate the exact length of a field */
  len?: number;
  /** validate the min length of a field */
  min?: number;
  /** validate the max length of a field */
  max?: number;
  /** validate the value from a list of possible values */
  enum?: string | string[];
  /** validate from a regular expression */
  pattern?: RegExp;
  /** transform a value before validation */
  transform?: (value: any) => any;
  /** custom validate function (Note: callback must be called) */
  validator?: (
    rule: any,
    value: any,
    callback: any,
    source?: any,
    options?: any
  ) => any;
};

type GetFieldDecoratorOptions = {
  /** 子节点的值的属性，如 Checkbox 的是 'checked' */
  valuePropName?: string;
  /** 子节点的初始值，类型、可选值均由子节点决定 */
  initialValue?: any;
  /** 收集子节点的值的时机 */
  trigger?: string;
  /** 可以把 onChange 的参数转化为控件的值，例如 DatePicker 可设为：(date, dateString) => dateString */
  getValueFromEvent?: (...args: any[]) => any;
  /** Get the component props according to field value. */
  getValueProps?: (value: any) => any;
  /** 校验子节点值的时机 */
  validateTrigger?: string | string[];
  /** 校验规则，参见 [async-validator](https://github.com/yiminghe/async-validator) */
  rules?: ValidationRule[];
  /** 是否和其他控件互斥，特别用于 Radio 单选控件 */
  exclusive?: boolean;
  /** Normalize value to form component */
  normalize?: (value: any, prevValue: any, allValues: any) => any;
  /** Whether stop validate on first rule of error for this field.  */
  validateFirst?: boolean;
  /** 是否一直保留子节点的信息 */
  preserve?: boolean;
};

export interface IRcForm {
  resetFields(names?: Array<string>): void;
  // tslint:disable-next-line:max-line-length
  getFieldDecorator<T extends Object = {}>(
    id: keyof T,
    options?: GetFieldDecoratorOptions
  ): (node: React.ReactNode) => React.ReactNode;
  getFieldError: (name: string) => any;
  getFieldInstance: (name: string) => any;
  getFieldProps: (name: string, options?: any) => any;
  getFieldValue: (name: string) => any;
  getFieldsError: (names: string[]) => object;
  getFieldsValue: (names: string[]) => any;
  isFieldTouched: (name: string) => boolean;
  isFieldValidating: (name: string) => boolean;
  isFieldsTouched: (ns: any) => boolean;
  isFieldsValidating: (ns: any) => boolean;
  isSubmitting: () => boolean;
  setFields: () => any;
  setFieldsInitialValue: (initialValues: any) => any;
  setFieldsValue: (values: { [key: string]: any }) => any;
  submit: () => any;
  validateFields(fieldNames: string[], options?: Object, callback?: any): any;
}