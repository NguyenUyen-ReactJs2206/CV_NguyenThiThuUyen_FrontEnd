import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Vui lòng nhập tên của bạn hoặc tên Công ty!'),
  email: yup.string().required('Vui lòng nhập email của bạn!').email('Email không đúng định dạng!'),
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại của bạn!')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Vui lòng nhập đúng định dạng số!')
    .length(10, 'Số điện thoại bao gồm 10 ký tự!'),
  message: yup.string().required('Vui lòng nhập nội dung bạn muốn gửi đi!')
})

export type Schema = yup.InferType<typeof schema>
