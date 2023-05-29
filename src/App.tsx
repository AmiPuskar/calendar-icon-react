import React from 'react';
import './CalendarIcon.css'; // Import the CSS file for styling

interface CalendarIconState {
  currentDate: Date;
}

class CalendarIcon extends React.Component<{}, CalendarIconState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  render() {
    const { currentDate } = this.state;
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.getDate();
    const day = currentDate.toLocaleString('default', { weekday: 'short' });
    const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <div>
        <p className='time'>{time}</p>

        <div className="calendar-icon">
        <div className="month-box">
          <p>{month}</p>
        </div>
        <h5 className="date">{date}</h5>
        <p className="day">{day}</p>
      </div>
      </div>
    );
  }
}

// const month = currentDate.toLocaleString('default', { month: 'short' });
// const date = currentDate.getDate();


// export default CalendarIcon;


function App() {
  return (
    <div className="App">
      <CalendarIcon />
    </div>
  );
}

export default App;
