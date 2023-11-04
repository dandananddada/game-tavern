"use client";
import React, { useEffect, useState } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, useDisclosure, Input
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { fetchAPI } from '../lib/api';

const Register = ({ isOpen: shouldOpen = false, onClose, afterRegister }) => {
  const { onOpen } = useDisclosure();
  const [isOpen, setIsOpen] = useState(shouldOpen)
  const [scrollBehavior] = React.useState("inside");
  const { reset, register, handleSubmit, formState: { errors }, setError } = useForm();

  const submit = formData => {
    fetchAPI('/auth/local/register', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(data => {
      if (data.jwt) {
        afterRegister(data.jwt, data.user)
        onClose()
      }
    })
    .catch(e => {
      const { details, message } = e?.error
      setError('email', { type: 'custom', message })
      if (details?.errors.length) {
        details.errors.forEach(error => {
          const [key] = error.path
          setError(key, { type: 'custom', message: error.message })
        })
      }
    })
  }

  useEffect(() => {
    if (shouldOpen) {
      reset()
      onOpen()
    }
    setIsOpen(shouldOpen)
  }, [shouldOpen])

  return (
    <Modal
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    onClose={onClose}
    scrollBehavior={scrollBehavior}x2
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          注册
        </ModalHeader>
        <form onSubmit={handleSubmit(submit)}>
          <ModalBody>
            <Input {...register("email")} isRequired type="email" label="账号" description="输入常用邮箱" errorMessage={ errors?.email?.message } />
            <Input {...register("username")} isRequired label="昵称" errorMessage={ errors?.username?.message } />
            <Input {
              ...register("password", { min: 6 })}
              isRequired type="password" label="密码"
              description="密码长度不得少于六位"
              errorMessage={ errors?.password?.message }
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              注册   
            </Button>
            <Button color="default" variant="light" onPress={onClose}>
              取消
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default Register 
