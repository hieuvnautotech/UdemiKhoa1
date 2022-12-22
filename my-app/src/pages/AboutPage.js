import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Shared/Card'
// chuong 5 bài 1 quên tạo branch, bài 2 thì chỉ là cập nhật route
function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>this is a react app</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to='/'>Back To Home</Link>
            </p>

        </div>
    </Card>
  )
}

export default AboutPage