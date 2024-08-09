import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Appbar } from '../components/Appbar/Appbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { MainWindow } from './MainWindow/MainWindow'

export const Root = () => {
  return (
    <>
      <Appbar />
      <Sidebar />
      <MainWindow>
        <Outlet />
      </MainWindow>
    </>
  )
}
