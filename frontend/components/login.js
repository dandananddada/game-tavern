"use client";
import React, { useEffect, useState } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, useDisclosure, Input
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { fetchAPI } from '../lib/api';

const Login = ({ isOpen: shouldOpen = false, onClose, afterLogin }) => {
  const { onOpen } = useDisclosure();
  const [isOpen, setIsOpen] = useState(shouldOpen)
  const [scrollBehavior] = React.useState("inside");
  const { register, handleSubmit } = useForm();

  const login = async (formData) => {
    const data = await fetchAPI('/auth/local', {}, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    if (data.jwt) {
      afterLogin(data.jwt)
    }
  }

  useEffect(() => {
    if (shouldOpen) {
      console.log(shouldOpen);
      onOpen()
    }
    setIsOpen(shouldOpen)
  }, [shouldOpen])

  return (
    <Modal
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    onClose={onClose}
    scrollBehavior={scrollBehavior}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          登陆 
        </ModalHeader>
        <form onSubmit={handleSubmit(login)}>
          <ModalBody>
            <Input {...register("identifier")} type="email" label="账号" />
            <Input {...register("password")} type="password" label="密码" />
          </ModalBody>
          <ModalFooter>
            <Input type="submit" color="primary" variant="light">
              登陆 
            </Input>
            <Button color="default" variant="light" onPress={onClose}>
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
