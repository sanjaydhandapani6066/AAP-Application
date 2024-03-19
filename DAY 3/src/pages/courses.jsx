import React from 'react';
import '../assets/courses.css';
import Navbar from '../components/UI/NavBar';
import Footer from '../components/UI/footer';

function Courses() {
  return (<div>
    <Navbar/>
    <div className="wrapper">
      <CoursesCard
        img="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMGNsYXNzfGVufDB8fDB8fHww"
        title="Isha Yoga Academy"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
        />

      <CoursesCard
        img="https://media.istockphoto.com/id/1492736016/photo/diligent-preteen-boy-practicing-half-lord-of-the-fishes-pose-of-yoga-with-his-family.webp?b=1&s=170667a&w=0&k=20&c=eUsajbNw9GpuySwolcg4ZJrPh6_CjoAnwuUG6dTp8sc="
        title="Asana Aesthetic"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />
      <CoursesCard
        img="https://images.unsplash.com/photo-1599447421321-1c96150f0f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2ElMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"
        title="One Life Yoga Studio"
        description="Baked Cod with Vegetables. 30 minute meal!"
        />
      <CoursesCard
        img="https://images.unsplash.com/photo-1599447421321-1c96150f0f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2ElMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Yoga with Johnny"
        description="Baked Cod with Vegetables. 30 minute meal!"
        />
      <CoursesCard
        img="https://images.unsplash.com/photo-1599447421321-1c96150f0f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2ElMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Blue Moon Yoga"
        description="Baked Cod with Vegetables. 30 minute meal!"
        />
      <CoursesCard
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
        />
      <CoursesCard
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
        />
        <br/>
        <h2></h2>
    </div>
    <Footer/>
</div>
  );
}

function CoursesCard(props) {
    return (
    <div className="courses-card">
      <div className="courses-card__body">
        <img src={props.img} className="courses-card__image" alt="Recipe" />
        <h2 className="courses-card__title">{props.title}</h2>
        <p className="courses-card__description">{props.description}</p>
      </div>
      <button className="courses-card__btn">View Course</button>
      <button className="courses-card__btn2">Enroll Course</button>
    </div>
  );
}

export default Courses;
