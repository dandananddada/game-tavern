import { Avatar } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';

import { getStrapiMedia } from "../lib/media"

const UserAvatar = ({ user, ...props }) => {
  if (!user || !user.username) return null
  return (<>
    { user.avatar ? (
      <Avatar src={getStrapiMedia(user.avatar.url)} {...props} />
    ) : (
      <Avatar name={user?.username[0].toUpperCase()} {...props} />
    ) }
  </>)
}

export default observer(UserAvatar)
