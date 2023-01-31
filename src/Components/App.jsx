import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from './Header/Header.jsx'
import SideBar from './SideBar/SideBar.jsx'
import EsiForm from './EsiForm/EsiForm.jsx'
import EsiTable from './EsiTable/EsiTable.jsx'
import EsiSaveModal from './EsiSaveModal/EsiSaveModal.jsx'
import { slots } from './mocks.js'
const App = () => {
    const [timeSlotList, setTimeSlotList] = useState([...slots])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <SideBar />
                <div className="content">
                    <div className="content__header">
                        <h3>Headline</h3>
                    </div>
                    <div className="content__body">
                        <EsiForm setIsOpen={setIsOpen} />
                        <EsiTable timeSlotList={timeSlotList} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <EsiSaveModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setTimeSlotList={setTimeSlotList}
                    timeSlotList={timeSlotList}
                />
            )}
        </div>
    )
}

export default App
