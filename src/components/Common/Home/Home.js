import PageTitle from './../PageTitle/PageTitle'
import { ListGroup } from 'react-bootstrap';
import Day01 from './../../Days/Day01/Day01'
import Day02 from './../../Days/Day02/Day02'

const Home = () => {
  return (
    <div>
        <PageTitle>lecimy z tym adwentem!</PageTitle>
        <ListGroup>
          <Day01 />
          <Day02 />
        </ListGroup>

    </div>
  );
};

export default Home;