import React, { useState } from 'react';
import '../assets/courses.css';
import Navbar from '../components/UI/NavBar';
import Footer from '../components/UI/footer';

function Dummy() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const courses = [
    {
      img: 'https://example.com/image1.jpg',
      title: 'The Everyday Salad',
      description: 'Take your boring salads up a notch. This recipe is perfect for lunch and only contains 5 ingredients!',
    },
    {
      img: 'https://example.com/image2.jpg',
      title: 'Simple Risotto',
      description: 'Fear Risotto no more! This simple recipe is perfect for family dinners.',
    },
    // Add more courses as needed
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="wrapper">
        {filteredCourses.map((course, index) => (
          <CoursesCard
            key={index}
            img={course.img}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
      <Footer />
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
      <button className="courses-card__btn">View Recipe</button>
    </div>
  );
}

export default Dummy;
