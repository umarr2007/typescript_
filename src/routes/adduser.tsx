import AddUser from '@/pages/AddUser'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/adduser')({
  component: AddUser,
})

