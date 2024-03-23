import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Nav_bg'
import Nav_bg from './components/Nav_bg'
import Nav from './components/Nav'
import Card from './components/Card'
function App() {



  return (
    <>
    
    <Nav_bg></Nav_bg>
    <Nav></Nav>
    <div className='p-[30px] mx-auto grid md:grid-cols-3 gap-[20px] sm:grid-cols-1 max-w-screen-lg'>
    <Card ig="a" aa="4d ago . Part time" bb="Desktop Support Manager" cc="Creative" dd="Germany"></Card>
    <Card ig="b" aa="5h ago . Full Time" bb="Senior Software Engineer" cc="Scoot" dd="United Kingdom"></Card>
    <Card ig="c" aa="2d ago . Full Time" bb="Senior Application Engineer" cc="Office Lite" dd="Japan"></Card>
    <Card ig="d" aa="1w ago . Full Time" bb="iOS Engineer" cc="Pomodoro" dd="United States"></Card>
    <Card ig="e" aa="2w ago > Freelance" bb="App & Website Designer" cc="Mastercraft" dd="United State"></Card>
    <Card ig="f" aa="20h ago . Part Time" bb="Haskell and PureScript Dev" cc="Blogr" dd="United State"></Card>
    <Card ig="g" aa="2d ago . Part Time" bb="Remote DevOps Engineer" cc="Pod" dd="Thailand"></Card>
    <Card ig="h" aa="1w ago . Full Time" bb="Senior EJB Developer" cc="Maker" dd="United Kingdom"></Card>
    <Card ig="i" aa="1mo ago . Part Time" bb="Fullstack Developer" cc="CrowdFund" dd="New Zealand"></Card>
    <Card ig="j" aa="1d ago . Part Time" bb="Midlevel Back End Engineer" cc="Vector" dd="Russia"></Card>
    <Card ig="k" aa="1w ago . Part Time" bb="Senior Frontend Developer" cc="Coffeeroasters" dd="Singapore"></Card>
    <Card ig="a" aa="1mo ago . Part Time" bb="Technical Lead Engineer" cc="Typemaster" dd="United Kingdom"></Card>
</div>

    </>
  )
}

export default App
