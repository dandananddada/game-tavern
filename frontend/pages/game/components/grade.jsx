import React from "react";
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';
import { fetchAPI } from "../../../lib/api"


import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, useDisclosure, Input, Textarea, Divider, Image,
  Accordion, AccordionItem
} from "@nextui-org/react";
import { useForm, Form } from "react-hook-form";
import moment from "moment";

import Rating from './rating';

import store from '../store';

function Grade({ game, afterGrade }) {
  const { shouldGrade } = store
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onOpenChange = (isOpen) => {
    store.update('shouldGrade', isOpen)
  }

  const grade = async (formData) => {
    const { art, music, story, creativity, gameplay, score, comment } = formData
    const { 
      slug, name, released, background_image, stores: platforms, genres,
      description, publisher, developer 
    } = game

    const jwt = Cookies.get('jwt')
    
    const res = await fetchAPI('/score/grade', {}, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        score, comment,
        radar_score: {
          art, music, story, creativity, gameplay
        },
        game: {
          slug, name, description, background_image, publisher, developer,
          released: moment(released),
          platforms: platforms.map(({ id }) => (id)),
          genres: genres.map(({ id }) => (id))
        }
      })
    })
    if (res.score) {
      afterGrade({ score, comment, radar_score: 
        { art, music, story, creativity, gameplay }
      })
    }
  }

  console.log(errors, '...');

  return (
    <div className="flex flex-col gap-2">
      <div className="text-right m-4">
        {/* { isLogin ? 
          <Button size="sm" onPress={onOpen}>填写评分</Button> :
          <Button size="sm" onPress={onLogin}>登录</Button>
        } */}
      </div>
      <Modal
        isOpen={shouldGrade}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <Form control={control} onSubmit={handleSubmit(grade)} render={({ submit }) => (
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  提交评分
                </ModalHeader>
                <ModalBody>
                    <Input 
                      {...register("score", { min: 0, max: 10 })} 
                      type="number" label="评分"
                      description="评分在 0 - 10 之间，支持一位小数"
                      errorMessage={ errors.score ? '评分在 0 - 10 之间，支持一位小数' : '' }
                    />
                    <Textarea {...register("comment")} label="评价" />
                    <Accordion>
                      <AccordionItem title={<span className="text-base">更多</span>}>
                        <Rating label="美术" name="art" control={control}></Rating>
                        <Rating label="音乐" name="music" control={control} className="mt-4"></Rating>
                        <Rating label="叙事" name="story" control={control} className="mt-4"></Rating>
                        <Rating label="创新" name="creativity" control={control} className="mt-4"></Rating>
                        <Rating label="游戏性" name="gameplay" control={control} className="mt-4"></Rating>
                      </AccordionItem>
                    </Accordion>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit"  onPress={submit}>
                    提交评分
                  </Button>
                  <Button color="default" variant="light" onPress={onClose}>
                    取消
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        )}>
        </Form>
      </Modal>
    </div>
  );
}

export default observer(Grade) 