import React, { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';
import { fetchAPI } from "../../../lib/api"

import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Textarea,
} from "@nextui-org/react";
import { useForm, Form } from "react-hook-form";
import moment from "moment";

import Rating from '../../../components/scores/rating';
import Slider from '../../../components/scores/slider';

import store from '../../../store/game';

function Grade({ game, afterGrade }) {
  const { shouldGrade, gameScore } = store
  const { register, handleSubmit, setValue, control, formState: { errors } } = useForm();

  useEffect(() => {
    if (gameScore) {
      setValue('comment', gameScore.comment)
      setValue('art', gameScore.radar_score?.art)
      setValue('music', gameScore.radar_score?.music)
      setValue('story', gameScore.radar_score?.story)
      setValue('creativity', gameScore.radar_score?.creativity)
      setValue('gameplay', gameScore.radar_score?.gameplay)
      setValue('score', gameScore.score)
      setValue('id', gameScore.id)
    }
  }, [gameScore])

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

    if (!isNaN(formData.id)) {
      const res = await fetchAPI(`/scores/${formData.id}`, {}, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify({
          data: {
            id: formData.id,
            score, comment,
            radar_score: {
              art, music, story, creativity, gameplay
            }
          }
        })
      })
      if (res.data.id) {
        afterGrade(formData)
      }
    } else {
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
  }

  return (
    <div className="flex flex-col gap-2">
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
                    <Rating label="美术" { ...register("art", { required: false }) } control={control}></Rating>
                    <Rating label="音乐" name="music" control={control} className="mt-4"></Rating>
                    <Rating label="叙事" name="story" control={control} className="mt-4"></Rating>
                    <Rating label="创新" name="creativity" control={control} className="mt-4"></Rating>
                    <Rating label="游戏性" name="gameplay" control={control} className="mt-4"></Rating>
                    <Slider 
                      name="score"
                      label="综合体验" 
                      isRequired
                      color="foreground"
                      hideThumb={true}
                      step={0.2} 
                      maxValue={10} 
                      minValue={0} 
                      defaultValue={6}
                      control={control} 
                      errorMessage={ errors.score ? '评分在 0 - 10 之间，支持一位小数' : '' }
                      className="max-w-md mt-4"
                    />
                    <Textarea {...register("comment")} label="评价" />
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