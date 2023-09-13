import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { Schema, schema } from 'src/utils/rules'
import emailjs from '@emailjs/browser'
import {
  YOUR_EMAIL_SERVICE_ID,
  YOUR_EMAIL_TEAMPLATE_ID_SEND_CLIENT,
  YOUR_EMAIL_TEAMPLATE_ID_SEND_SERVER,
  YOUR_PUBLIC_KEY_ID
} from 'src/helper/emailjs'

export default function FormContact() {
  const { t } = useTranslation('contact')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Schema>({ resolver: yupResolver(schema) })

  const onSubmit = (data: Schema) => {
    console.log(data)
    reset()
    const _name = data.name
    const _email = data.email
    const _phone = data.phone
    const _message = data.message

    // Gửi email
    const templateParams = {
      // Thông tin cần gửi trong email
      to_email: 'uyen99ntt@gmail.com',
      from_email: 'uyen99ntt@gmail.com',
      name: `${_name}`,
      email: `${_email}`,
      phone: `${_phone}`,
      message: `${_message}`
    }
    emailjs
      .send(
        `${YOUR_EMAIL_SERVICE_ID}`,
        `${YOUR_EMAIL_TEAMPLATE_ID_SEND_SERVER}`,
        templateParams,
        `${YOUR_PUBLIC_KEY_ID}`
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text)
        },
        (error) => {
          console.error('Email failed to send:', error)
        }
      )
    emailjs
      .send(
        `${YOUR_EMAIL_SERVICE_ID}`,
        `${YOUR_EMAIL_TEAMPLATE_ID_SEND_CLIENT}`,
        templateParams,
        `${YOUR_PUBLIC_KEY_ID}`
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text)
        },
        (error) => {
          console.error('Email failed to send:', error)
        }
      )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-slate-100 py-20 text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'
      >
        <div className='grid grid-cols-2 gap-x-6 '>
          <div className='col-span-2'>
            <input
              placeholder={t('name')}
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
              {...register('name')}
            />
            <p className='min-h-[22px] text-left text-sm mt-1  text-red-500'>
              {errors.name ? `*${errors.name.message}` : ''}
            </p>
          </div>

          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('phone')}
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
              {...register('phone')}
            />
            <p className='min-h-[22px] text-left text-sm mt-1  text-red-500'>
              {errors.phone ? `*${errors.phone.message}` : ''}
            </p>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder={t('email')}
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
              {...register('email')}
            />
            <p className='min-h-[22px] text-left text-sm mt-1  text-red-500'>
              {errors.email ? `*${errors.email.message}` : ''}
            </p>
          </div>
          <div className='col-span-2'>
            <textarea
              placeholder={t('message')}
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
              rows={4}
              {...register('message')}
            ></textarea>
            <p className='min-h-[22px] text-left text-sm  text-red-500'>
              {errors.message ? `*${errors.message.message}` : ''}
            </p>
          </div>
          <div className='col-span-2'>
            <button
              type='submit'
              className='mt-4 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none transition-all duration-300 hover:bg-blue hover:duration-300 sm:mt-6'
            >
              {t('button')}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
