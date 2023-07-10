// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Lix',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon, Passing the time?',
  greetingEvening: 'Good evening, Just chillin',
  greetingNight: 'So what we`re going to overnight today?',

  // Weather
  weatherKey: '2b35e8147a663a56ae1bd0b5d8d3ea50', // Todo
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'r/dev',
      icon: 'coffee',
      link: 'https://www.reddit.com/r/dev/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'youtube',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Core',
        link: 'https://www.youtube.com/@CoreDasAntigas',
      },
      {
        name: 'Diolinux',
        link: 'https://www.youtube.com/@Diolinux',
      },
      {
        name: 'ManoDeyvin',
        link: 'https://www.youtube.com/@manodeyvin',
      },
      {
        name: 'Psych2GoPortuguesBR',
        link: 'https://www.youtube.com/@Psych2GoPortuguesBR',
      },
    ],
    secondList: [
      {
        name: 'r/unixporn',
        link: 'https://www.reddit.com/r/unixporn/',
      },
      {
        name: 'r/cybersecurity',
        link: 'https://www.reddit.com/r/cybersecurity/',
      },
      {
        name: 'Google-Classroom',
        link: 'https://classroom.google.com/',
      },
      {
        name: 'Redação Paraná',
        link: 'http://www.escoladigital.aluno.pr.gov.br/redacao_parana#',
      },
    ],
  },
};
