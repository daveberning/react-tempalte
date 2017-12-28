// import axios from 'axios';

export const FETCH_ALL_EVENTS = 'FETCH_ALL_EVENTS';

export function fetchAllEvents() {
  const data = [
    {
      id: '1',
      title: 'Event 1',
      subTitle: 'Event 1 Subtitle',
      description:
        'This is a description for event 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem tempora, nihil provident libero vero quibusdam quae, ipsam deserunt distinctio eligendi commodi, dolore earum optio, officia sequi ab soluta eos.',
      imgUrl: 'http://images.dreesteam.com/dreeshomes2016/hpslides/AUS/1_Parker_CWR.jpg',
      locations: [
        {
          name: 'Austin',
          urlName: 'austin'
        },
        {
          name: 'Cincinnati/Northern Kentucky',
          urlName: 'cincinnati-northern-kentucky'
        },
        {
          name: 'Cleveland/Northeast Ohio',
          urlName: 'cleveland-northeast-ohio'
        },
        {
          name: 'Dallas/Ft Worth',
          urlName: 'dallas-ft-worth'
        },
        {
          name: 'Houston',
          urlName: 'houston'
        },
        {
          name: 'Indianapolis',
          urlName: 'indianapolis'
        },
        {
          name: 'Jacksonville',
          urlName: 'jacksonville'
        },
        {
          name: 'Nashville',
          urlName: 'nashville'
        },
        {
          name: 'Raleigh/Durham',
          urlName: 'raleigh-durham'
        },
        {
          name: 'Washington D.C/Viginia/Maryland',
          urlName: 'washington-virginia-maryland'
        }
      ]
    },
    {
      id: '2',
      title: 'Event 2',
      subTitle: 'Event 2 Subtitle',
      description:
        'This is a description for event 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem tempora, nihil provident libero vero quibusdam quae, ipsam deserunt distinctio eligendi commodi, dolore earum optio, officia sequi ab soluta eos.',
      imgUrl: 'http://images.dreesteam.com/dreeshomes2016/hpslides/NASH/1_ColinasIIA_MGF.jpg',
      locations: [
        {
          name: 'Austin',
          urlName: 'austin'
        },
        {
          name: 'Cincinnati/Northern Kentucky',
          urlName: 'cincinnati-northern-kentucky'
        },
        {
          name: 'Cleveland/Northeast Ohio',
          urlName: 'cleveland-northeast-ohio'
        },
        {
          name: 'Dallas/Ft Worth',
          urlName: 'dallas-ft-worth'
        },
        {
          name: 'Houston',
          urlName: 'houston'
        },
        {
          name: 'Indianapolis',
          urlName: 'indianapolis'
        },
        {
          name: 'Jacksonville',
          urlName: 'jacksonville'
        },
        {
          name: 'Nashville',
          urlName: 'nashville'
        },
        {
          name: 'Raleigh/Durham',
          urlName: 'raleigh-durham'
        },
        {
          name: 'Washington D.C/Viginia/Maryland',
          urlName: 'washington-virginia-maryland'
        }
      ]
    },
    {
      id: '3',
      title: 'Event 3',
      subTitle: 'Event 3 Subtitle',
      description:
        'This is a description for event 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem tempora, nihil provident libero vero quibusdam quae, ipsam deserunt distinctio eligendi commodi, dolore earum optio, officia sequi ab soluta eos.',
      imgUrl: 'http://images.dreesteam.com/dreeshomes2016/hpslides/IND/1_PembrokeA_VIL.jpg',
      locations: [
        {
          name: 'Austin',
          urlName: 'austin'
        },
        {
          name: 'Cincinnati/Northern Kentucky',
          urlName: 'cincinnati-northern-kentucky'
        },
        {
          name: 'Cleveland/Northeast Ohio',
          urlName: 'cleveland-northeast-ohio'
        },
        {
          name: 'Dallas/Ft Worth',
          urlName: 'dallas-ft-worth'
        },
        {
          name: 'Houston',
          urlName: 'houston'
        },
        {
          name: 'Indianapolis',
          urlName: 'indianapolis'
        },
        {
          name: 'Jacksonville',
          urlName: 'jacksonville'
        },
        {
          name: 'Nashville',
          urlName: 'nashville'
        },
        {
          name: 'Raleigh/Durham',
          urlName: 'raleigh-durham'
        },
        {
          name: 'Washington D.C/Viginia/Maryland',
          urlName: 'washington-virginia-maryland'
        }
      ]
    },
    {
      id: '4',
      title: 'Event 4',
      subTitle: 'Event 4 Subtitle',
      description:
        'This is a description for event 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatem tempora, nihil provident libero vero quibusdam quae, ipsam deserunt distinctio eligendi commodi, dolore earum optio, officia sequi ab soluta eos.',
      imgUrl: 'http://images.dreesteam.com/dreeshomes2016/hpslides/AUS/5_parkhill_kit3.jpg',
      locations: [
        {
          name: 'Austin',
          urlName: 'austin'
        },
        {
          name: 'Cincinnati/Northern Kentucky',
          urlName: 'cincinnati-northern-kentucky'
        },
        {
          name: 'Cleveland/Northeast Ohio',
          urlName: 'cleveland-northeast-ohio'
        },
        {
          name: 'Dallas/Ft Worth',
          urlName: 'dallas-ft-worth'
        },
        {
          name: 'Houston',
          urlName: 'houston'
        },
        {
          name: 'Indianapolis',
          urlName: 'indianapolis'
        },
        {
          name: 'Jacksonville',
          urlName: 'jacksonville'
        },
        {
          name: 'Nashville',
          urlName: 'nashville'
        },
        {
          name: 'Raleigh/Durham',
          urlName: 'raleigh-durham'
        },
        {
          name: 'Washington D.C/Viginia/Maryland',
          urlName: 'washington-virginia-maryland'
        }
      ]
    }
  ];

  return {
    type: FETCH_ALL_EVENTS,
    payload: data
  };
}
