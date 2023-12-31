"use client";
import React, { useEffect, useState } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, useDisclosure, Input
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { fetchAPI } from '../lib/api';

const Login = ({ isOpen: shouldOpen = false, onClose, afterLogin, onRegist }) => {
  const { onOpen } = useDisclosure();
  const [isOpen, setIsOpen] = useState(shouldOpen)
  const [scrollBehavior] = React.useState("inside");
  const { reset, register, handleSubmit, formState: { errors }, setError } = useForm();

  const login = formData => {
    fetchAPI('/auth/local', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(data => {
      if (data.jwt) {
        afterLogin(data.jwt, data.user)
        onClose()
      }
    })
    .catch(_e => {
      setError('password', { type: 'custom', message: '密码错误' })
    })
  }

  const regist = () => {
    onClose();
    onRegist();
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
          登录
        </ModalHeader>
        <form onSubmit={handleSubmit(login)}>
          <ModalBody>
            <Input {...register("identifier")} type="email" label="账号" />
            <Input {...register("password")} type="password" label="密码" 
              errorMessage={ errors?.password?.message || '' }
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              登录 
            </Button>
            <Button color="default" variant="light" onPress={regist}>
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

export default Login 
