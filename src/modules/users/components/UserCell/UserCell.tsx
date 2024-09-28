import { memo } from 'react'
import { useFindOneUser } from '../../../users/hooks/useFindOneUser'
import UserCellSkeleton from './UserCellSkeleton'
import { Stack, Typography } from '@mui/material'
type UserCellProps = {
  userId: number
}

const UserCell = ({ userId }: UserCellProps) => {
  const { data: user, isLoading } = useFindOneUser(userId)

  if (isLoading) return <UserCellSkeleton />
  return (
    <Stack>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>{user?.name}</Typography>
      <Typography variant="caption">{user?.email}</Typography>
    </Stack>
  );

}

export default memo(UserCell);