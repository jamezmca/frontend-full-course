import React, { useState } from 'react'

export default function Form(props) {
    const { handleCloseModal, handleUpdateData } = props
    const [name, setName] = useState('James')
    const [lifeExpectancy, setLifeExpectancy] = useState(80)

    const [month, setMonth] = useState(1) // stored as index from 1-12
    const [day, setDay] = useState(1)
    const [year, setYear] = useState(new Date().getFullYear())

    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

    return (
        <section id='form'>
            <div>
                <h4 className='text-gradient'>Your Details</h4>
                <button onClick={handleCloseModal} className='link-button'>
                    <i className='fa-solid fa-xmark' />
                </button>
            </div>
            <div>
                <label>Name</label>
                <input value={name} onChange={(e) => {
                    setName(e.target.value)
                }} type='text' required />
            </div>
            <div>
                <label>Birthday</label>
                <div className='bday'>
                    <select value={day}
                        onChange={(e) => {
                            setDay(e.target.value)
                        }}>
                        {days.map((d) => {
                            return (
                                <option key={d} value={d}>{d}</option>
                            )
                        })}
                    </select>
                    <select value={month}
                        onChange={(e) => {
                            setMonth(e.target.value)
                        }}>
                        {months.map((m, i) => {
                            return (
                                <option key={i} value={i + 1}>{m} </option>
                            )
                        })}
                    </select>
                    <select value={year}
                        onChange={(e) => {
                            setYear(e.target.value)
                        }}>
                        {years.map((y) => {
                            return (
                                <option key={y} value={y}>{y}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div>
                <label>Life Expectancy (years)</label>
                <input value={lifeExpectancy} onChange={(e) => {
                    setLifeExpectancy(e.target.value)
                }} type='number' max={120} required />
            </div>
            <button onClick={() => {
                handleUpdateData(name, `${year}-${month}-${day}`, lifeExpectancy)
            }}>
                Save
            </button>
        </section>
    )
}
