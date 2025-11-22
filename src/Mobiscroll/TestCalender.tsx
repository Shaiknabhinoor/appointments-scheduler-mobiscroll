import { Eventcalendar } from "@mobiscroll/react";

const TestCalendar = () => {
    const events = [{
        start: new Date(),
        end: new Date(),
        text: "Mobiscroll Working!"
    }];

    return (
        <div style={{ padding: 20 }}>
            <Eventcalendar data={events} />
        </div>
    );
};

export default TestCalendar;