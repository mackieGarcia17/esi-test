import React, { useState, useEffect } from 'react'
import './EsiForm.scss'

const EsiForm = (props) => {
    const { setIsOpen } = props
    useEffect(() => {}, [])
    return (
        <div className="esi-form">
            <button
                className="esi-form__f-btn"
                onClick={() => {
                    setIsOpen(true)
                }}>
                Form
            </button>
        </div>
    )
}

export default EsiForm
