"use client";
import React from 'react';
import {
  Button, Input, Image
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import qs from 'qs';
import Cookies from 'js-cookie';

import { fetchAPI } from '../../lib/api';

const ResetPassword = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const reset = formData => {
    setIsProcessing(true)
    const params = qs.parse(location.search, { ignoreQueryPrefix: true })
    formData.code = params.code
    fetchAPI('/auth/reset-password', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(data => {
      const { jwt, user } = data
      Cookies.set('jwt', jwt, { expires: 7 })
      Cookies.set('user', JSON.stringify(user), { expires: 7 })
      location.href="/games"
    }).catch(data => {
      if (data.error) {
        const { message } = data.error
        setError('passwordConfirmation', { type: 'custom', message })
      }
    }).finally(() => {
      setIsProcessing(false)
    })
  }

  return (<div className="flex flex-col justify-center h-[600px] mx-6">
    <div className="flex justify-center mb-6">
      <Image width="200" src="http://9guan.games/uploads/gametavern_c9a856b309.png"></Image>
    </div>
    <form onSubmit={handleSubmit(reset)}>
        <Input {...register("password", { required: true, min: 6 })} type="password" label="密码"
        errorMessage={ errors?.password?.message || ''} />
        <Input classNames={{ base: 'mt-2' }}
          {...register("passwordConfirmation", {
            required: true,
            validate: (value, formValue) => {
              return formValue.password === value || '两次输入的密码不一致'
            }
          })} type="password" label="确认密码" 
          errorMessage={ errors?.passwordConfirmation?.message || '' }
        />
        <div className="flex justify-end mt-3">
          <Button type="submit" color="primary" isLoading={isProcessing}>
            重置
          </Button>
        </div>
    </form>
  </div>)
}

export default ResetPassword 
