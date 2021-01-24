import React from 'react';
import { Link } from 'react-router-dom';
import TableEvents from '../../components/TableEvents';

var data = [
  {event: 'GobsJob', dates: '142121', participants: '10'},
  {event: 'GobGod', dates: '121421', participants: '8'},
  {event: 'BustersParty', dates: '121214', participants: '15'}
];

class EventsPage extends React.Component{

 render(){
   return(
     <div><h3>Events</h3>
      <TableEvents data={data}/>
          <button>
            <Link to='/events/eventnew'>Add event</Link>
          </button>
     </div>
   );
  }

}


export default EventsPage;