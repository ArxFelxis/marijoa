import { useState } from 'react'
import './App.css'

const initialDetails = {
  name: 'Arx Felxis',
  email: 'arxfelx@gmail.com',
  phoneNumber: '00000000',
  university: 'University of Singapore',
  degree: 'Bachelor of Science in Computer Engineering',
  year: '2020 - 2024',
  company: 'Web Dev Co.',
  workingPeriod: '2024 - Present',
  jobDescription: 'Assisting in Front End Development'
}

export default function App () {
  const [details, setDetails] = useState(initialDetails)
  const [isEditing, setIsEditing] = useState(false)

  const handleChangeInput = e => {
    const {name, value} = e.target
    setDetails({
      ...details,
      [name]: value
  })
  }

  return (
    <div>
      {
        isEditing ?
        <EditForm data={details} onSave={() => setIsEditing(false)} onChange={handleChangeInput} /> :
        <DisplayDetails data={details} onEdit={() => setIsEditing(true)} />
      }
    </div>
  )
}

function EditForm ({data, onSave, onChange}) {
  return (
    <div id='form'>
      <h3 id='formHeader'>Edit Details</h3>
      <input
        name='name'
        placeholder='Name'
        value={data.name}
        onChange={onChange} />
      <input
        name='email'
        placeholder='Email'
        value={data.email}
        onChange={onChange} />
      <input
      name='phoneNumber'
      placeholder='Phone Number'
      value={data.phoneNumber}
      onChange={onChange} />
      <input
        name='university'
        placeholder='University'
        value={data.university}
        onChange={onChange} />
      <input
        name='degree'
        placeholder='Degree'
        value={data.degree}
        onChange={onChange} />
      <input
        name='year'
        placeholder='Years of Study'
        value={data.year}
        onChange={onChange} />
      <input
        name='company'
        placeholder='Company Name'
        value={data.company}
        onChange={onChange} />
      <input
        name='workingPeriod'
        placeholder='Working Period'
        value={data.workingPeriod}
        onChange={onChange} />
      <input
        name='jobDescription'
        placeholder='Job Description'
        value={data.jobDescription}
        onChange={onChange} />
      <button onClick={onSave}>Save</button>
    </div>
  )
}

function DisplayDetails ({data, onEdit}) {

  return (
    <div id='resume'>
      <div id='personalDetails'>
        <div id='personDetailsLeft'>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </div>
        <p id='phoneNumber'>{data.phoneNumber}</p>
      </div>
      <div id='education'>
        <h1>Education</h1>
        <p>{data.university}</p>
        <p>{data.degree}</p>
        <p>{data.year}</p>
      </div>
      <div id='experience'>
        <h1>Experience</h1>
        <p>{data.company}</p>
        <p>{data.workingPeriod}</p>
        <p>{data.jobDescription}</p>
      </div>
      <button id='editBtn' onClick={onEdit}>Edit</button>
    </div>
  )
}