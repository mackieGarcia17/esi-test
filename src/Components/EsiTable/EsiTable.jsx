import React, { useState, useEffect } from 'react'
import './EsiTable.scss'

const EsiTable = (props) => {
    const { timeSlotList } = props
    const [slots, setSlots] = useState([...timeSlotList])
    const [searchKey, setSearchKey] = useState('')

    useEffect(() => {
        setSlots(timeSlotList)
    }, [timeSlotList])

    const onSearch = (event) => {
        const sKey = event.target.value
        if (sKey.length === 0) {
            setSlots([...props.timeSlotList])
        } else {
            const sTemp = slots.filter((s) => {
                const tempName = s.name.toLowerCase()
                const searchName = sKey.toLowerCase()
                return tempName.includes(searchName)
            })
            setSlots(sTemp)
        }
        setSearchKey(sKey)
    }

    return (
        <div className="esi-table">
            <input className="esi-table__search-input" type="text" value={searchKey} onChange={onSearch} />
            <table>
                <thead>
                    <tr>
                        <th className="first-col">Date</th>
                        <th>Time</th>
                        <th>Child Name</th>
                        <th>Child Age</th>
                        <th>Parent Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map((s, index) => {
                        return (
                            <tr key={`${s.name}-${index}`}>
                                <td className="first-col">{s.date}</td>
                                <td>{s.time}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.parent}</td>
                                <td>{s.phone}</td>
                                <td>{s.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EsiTable
