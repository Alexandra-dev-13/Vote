import React from 'react'
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Card() {
  return (
    <div>
      <div className="container-fluid myCard">
        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5" >
          <div className="col-lg-6 question">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="mb-4 display-6 lh-1 fw-bold">Voter?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, culpa. Recusandae, nobis consequatur. Fugiat, quis alias a officia repudiandae necessitatibus voluptate voluptates et nihil iusto impedit sapiente nisi pariatur animi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-cover h-100 overflow-hidden text-white bg-secondary rounded-5 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class=" mb-4 display-6 lh-1 fw-bold">Titre Foncier?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati dicta laborum porro molestiae? Quisquam praesentium rerum error numquam sit quam, quae omnis perspiciatis repellat ducimus veniam aspernatur ipsa temporibus?</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

