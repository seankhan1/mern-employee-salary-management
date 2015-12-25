import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardAdmin from './pages/Dashboard/DashboardAdmin/DashboardAdmin'
import Calendar from './pages/Calendar'
import DataPegawai from './pages/MasterData/DataPegawai/DataPegawai'
import DataJabatan from './pages/MasterData/DataJabatan/DataJabatan'
import Profile from './pages/Profile'
import FormElements from './pages/Form/FormElements'
import FormDataPegawai from './pages/Form/FormDataPegawai'
import Tables from './pages/Tables'
import Settings from './pages/Settings'
import Alerts from './pages/UiElements/Alerts'
import Buttons from './pages/UiElements/Buttons'
import LoginAdmin from './pages/Login/LoginAdmin'
import LoginKaryawan from './pages/Login/LoginKaryawan'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/admin/login' element={<LoginAdmin />} />
          <Route exact path='/karyawan/login' element={<LoginKaryawan />} />
          <Route exact path='/' element={<LoginAdmin />} />
          <Route exact path='/admin/dashboard' element={<DashboardAdmin />} />
          <Route path='/admin/calendar' element={<Calendar />} />
          <Route path='/admin/master-data/data-pegawai' element={<DataPegawai />} />
          <Route path='/admin/master-data/data-jabatan' element={<DataJabatan />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forms/form-elements' element={<FormElements />} />
          <Route path='/admin/master-data/data-pegawai/form-data-pegawai' element={<FormDataPegawai />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/ui/alerts' element={<Alerts />} />
          <Route path='/ui/buttons' element={<Buttons />} />
        </Routes>
      </>
    )
  )
}

export default App
