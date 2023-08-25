import React from 'react'
import './College.css'

const ClgAboutus = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='heading'>About US</h1>
                <p className='para'>Our focus has always been on preparing graduates to enter the workforce 
                while teaching our students to be leaders. We’ve worked hard to build lasting partnerships with 
                local communities while preparing our graduates to succeed globally - work we are confident has 
                led to our #1 ranking in the Greater Toronto Area for graduate satisfaction.
                <br/>
                Locally,we continue to offer industry-recognized full- and part-time programs at five Toronto 
                campuses. Whether in our classrooms, our labs or the community, Centennial students experience the
                 real world before they even graduate. They're job-ready, and that's a fact employers have told us,
                  as more than 88 percent of those who have employed Centennial grads are satisfied or very 
                  satisfied with their hires. </p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://www.elearninfotech.com/img/award.png" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://www.elearninfotech.com/img/placement.jpg" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://softwaretrainingindore.files.wordpress.com/2019/11/photo1.png" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://luminartechnolabbucket.s3.amazonaws.com/a14ee279-a9c4-4828-919b-39cf34e5bcd8-Placement%20photo.png" class="card-img-top" alt="..."/>
  </div>
</div>
            </div>
        </div>
        </div>    
  )
}

export default ClgAboutus