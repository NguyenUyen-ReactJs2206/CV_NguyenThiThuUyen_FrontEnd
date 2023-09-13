import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Vui lòng nhập tên của bạn hoặc tên Công ty!'),
  email: yup.string().required('Vui lòng nhập email của bạn!').email('Email không đúng định dạng!'),
  phone: yup.string().required('Vui lòng nhập số điện thoại của bạn!'),
  message: yup.string().required('Vui lòng nhập nội dung bạn muốn gửi đi!')
})

export type Schema = yup.InferType<typeof schema>
