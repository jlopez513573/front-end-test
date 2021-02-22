const Events = () => {
  return (
    <>
      <h1 className="events-title">Events</h1>
      <div className="events">
        <div className="events-slider">
          <p>Youth Talent & Education</p>
        </div>
        <div className="events-today">
          <h2>EVENTS TODAY</h2>
          <div className="event-item">
            <div className="event-item__icon"></div>
            <div className="event-item__info">
              <div className="event-item__info-time">10:30 AM</div>
              <div className="event-item__info-title">
                Webinar: the basics of
              </div>
            </div>
          </div>
          <div className="event-item">
            <div className="event-item__icon"></div>
            <div className="event-item__info">
              <div className="event-item__info-time">2:15 PM</div>
              <div className="event-item__info-title">
                Team Building Activity
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
