import React, { useState, useEffect } from 'react'
import './EsiSaveModal.scss'

const EsiSaveModal = (props) => {
    const templateSlot = {
        date: '',
        amount: '',
        gender: '',
        name: '',
        phone: '',
        email: '',
        time: '',
        age: '',
        parent: '',
    }
    const { setIsOpen, setTimeSlotList, timeSlotList } = props
    const [slot, setSlot] = useState({ ...templateSlot })

    const onInputChange = (event, inputType) => {
        const tSlot = { ...slot }
        tSlot[inputType] = event.target.value
        setSlot({ ...tSlot })
    }

    const onClose = () => {
        setIsOpen(false)
        setSlot({ ...templateSlot })
    }

    const onUpdate = () => {
        const tSlots = [...timeSlotList]
        tSlots.push(slot)
        setTimeSlotList([...tSlots])
        setIsOpen(false)
    }
    return (
        <div className="esi-save">
            <div className="esi-save__modal">
                <div className="esi-save__modal__top">
                    <div className="esi-save__modal__top__left">
                        <img src="images/info.png" width="22" height="22" />
                        <h3>Headline</h3>
                    </div>
                    <div className="esi-save__modal__top__right">
                        <button className="cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="update" onClick={onUpdate}>
                            Update
                        </button>
                    </div>
                </div>
                <div className="esi-save__modal__body">
                    <div className="esi-save__modal__body__form">
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Date</label>
                            <input
                                type="date"
                                value={slot.date}
                                onChange={(event) => onInputChange(event, 'date')}></input>
                        </div>
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Amount</label>
                            <input
                                type="number"
                                value={slot.amount}
                                onChange={(event) => onInputChange(event, 'amount')}></input>
                        </div>
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Gender</label>
                            <select value={slot.gender} onChange={(event) => onInputChange(event, 'gender')}>
                                <option value="na">Not Decided</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Name</label>
                            <input
                                type="text"
                                value={slot.name}
                                onChange={(event) => onInputChange(event, 'name')}></input>
                        </div>
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Phone(10 digits)</label>
                            <input
                                type="text"
                                value={slot.phone}
                                onChange={(event) => onInputChange(event, 'phone')}></input>
                        </div>
                        <div className="esi-save__modal__body__form__input-wrapper">
                            <label>Email</label>
                            <input
                                type="email"
                                value={slot.email}
                                onChange={(event) => onInputChange(event, 'email')}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EsiSaveModal
