import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Home.css';

import LandingHeader from '../comps/LandingHeader/LandingHeader.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import SearchLayout from '../comps/searchArea/SearchLayout.jsx';
import WhatWeDo from '../comps/WhatWeDo/WhatWeDo.jsx';
import WhatWeDoV2 from '../comps/WhatWeDoV2/WhatWeDoV2.jsx';
import OurTeam from '../comps/OurTeam/OurTeam.jsx';
import Accolades from '../comps/Accolades/Accolades.jsx';
import HowItWorks from '../comps/HowItWorks/HowItWorks.jsx';

export default class Home extends Component {
render() {
    return (
  <div>
    <Container fluid>

        <Container fluid>
          <LandingHeader />
        </Container>

        <Container fluid>
          <HowItWorks />
        </Container>

        <Container fluid>
          <WhatWeDoV2 />
        </Container>

        <Container>
        </Container>

        <Container fluid>
        </Container>

        <Container fluid>
        </Container>

    </Container>
  </div>
    );
  }
}
