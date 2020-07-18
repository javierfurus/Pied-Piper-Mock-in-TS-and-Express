const options = {
  client: 'mysql',
  connection: {
    host: '****',
    user: '***',
    password: '*****',
    database: 'cardsForHome'
  }
};

const knex = require('knex')(options);

// cardContentFiller table. Table for the cards on the index page
knex.schema.hasTable('cardContentFiller').then((exists) => {
  if (!exists) {
    knex.schema.createTable('cardContentFiller', (table) => {
      table.increments('id');
      table.string('img');
      table.string('name');
      table.string('title');
      table.string('text');
    }).then(() => console.log('table created'))
      .catch((err) => { console.log(err); throw err; })
      .finally(() => {
        knex.destroy();
      });
  } else {
    console.log('Table cardContentFiller already exists! No changes were made.');
    knex.destroy();
  }
});

const cardTexts = [
  {
    img: 'media/gavin.png',
    name: 'Gavin Belson',
    title: 'former Hooli CEO',
    text: 'What is a Pied Piper? This company stinks. Nucleus would have been better. Why am I even being asked to write this @#%t?@$%##&!!'
  },
  {
    img: 'media/Russ_Hanneman.jpg',
    name: 'Russ Hanneman',
    title: 'Russ Hanneman',
    text: 'These guys FORK! I tell you guys, they do! They are lemmings but still, they do. Have you heared of RussFest? It will B-L-O-W!'
  },
  {
    img: 'media/erlich-bachman.jpg',
    name: 'Erlich Bachman',
    title: 'Incubator Provider, founder of Aviato, Self-Proclaimed Genius',
    text: 'Pied Piper is more than the new internet. Pied Piper, of which I own 10%, is a vision. I built it with Richard with true passion and love. You know, I sold Aviato, the comapny that I built to foster such talent.'
  },
  {
    img: 'media/peter.jpg',
    name: 'Peter Gregory †',
    title: 'Investor',
    text: 'I always found the guys at Pied Piper inspiring. They are a bunch of idiots, for sure, but they have vision. They have balls. I think of them fondly.'
  }
];
knex.schema.hasTable('cardContentFiller').then((exists) => {
  if (!exists) {
    knex('cardContentFiller').insert(cardTexts).then(() => ('data inserted'))
      .catch((err) => { console.log(err); throw err; })
      .finally(() => {
        knex.destroy();
      });
  } else {
    console.log('Table cardContentFiller already exists! No changes were made.');
    knex.destroy();
  }
});

// aboutCardContentFiller table. Table for the cards on the about page
knex.schema.hasTable('aboutCardContentFiller').then((exists) => {
  if (!exists) {
    knex.schema.createTable('aboutCardContentFiller', (table) => {
      table.increments('id');
      table.string('bookmark');
      table.string('img');
      table.string('name');
      table.string('title');
      table.string('text', 1000);
    }).then(() => console.log('table created'))
      .catch((err) => { console.log(err); throw err; })
      .finally(() => {
        knex.destroy();
      });
  } else {
    console.log('Table aboutCardContentFiller already exists! No changes were made.');
    knex.destroy();
  }
});

const aboutCards = [
  {
    bookmark: 'richard',
    img: 'media/richard.jpeg',
    name: 'Richard Hendricks',
    title: 'CEO',
    text: 'Richard invented and built the start-up Pied Piper, a program designed to find music matches, while living at Erlich’s Hacker Hostel alongside his best friend Big Head and fellow geeks Dinesh and Gilfoyle. Pied Piper’s compression algorithm triggered a bidding war and ultimately garnered funding from Peter Gregory\'s company Raviga. After winning TechCrunch Disrupt -- and $50,000 -- Richard and Pied Piper are in the spotlight more than ever, which for Richard means non-stop thrills (read: nausea and debilitating panic).'
  },
  {
    bookmark: 'gilfoyle',
    img: 'media/gilfoyle.jpg',
    name: 'Bertram Gilfoyle',
    title: 'System Architect',
    text: 'Gilfoyle lived and worked at the Hacker Hostel with Richard, Big Head, and Dinesh. He is pompous and purports to be good at system architecture, networking, and security. Gilfoyle often finds himself sparring with Dinesh about things such as their work efficiency, Dinesh\'s Pakistani ethnicity, Gilfoyle\'s religion along with other negligible matters. Often Gilfoyle triumphs in these arguments or reaches an impasse with Dinesh. He is a self-described LaVeyan Satanist, and bears an upside-down cross tattoo on his right arm. His persona is an apathetic badass programmer that has libertarian tendencies. To say he is odd is an understatement.'
  },
  {
    bookmark: 'dinesh',
    img: 'media/Dinesh_Chugtai.jpg',
    name: 'Dinesh Chugtai',
    title: 'Lead Engineer',
    text: 'Dinesh lives and works in the Hacker Hostel with Richard, Big Head, and Gilfoyle. He possesses a dry wit and skills at writingcode, particularly Java. Dinesh often finds himself sparring with Gilfoyle. He is originally from Pakistan but is a US citizen, unlike Gilfoyle. He claims it took him five years to get US citizenship and was asked about Al-Qaeda "like 14 times."'
  },
  {
    bookmark: 'jared',
    img: 'media/jared.jpg',
    name: 'Jared Dunn',
    title: 'Head of Business Development',
    text: 'Donald "Jared" Dunn was a Hooli executive and right-hand man to the head of the company, Gavin Belson, but after gaining a particular interest in Richard’s algorithm, quit his job at Hooli to work for Pied Piper. Jared was raised by a series of foster parents, but despite this rocky early life went on to study at Vassar College, earning a B. A. in Economics. Although his real first name is Donald, Gavin Belson started calling him \'Jared\' on his first day at Hooli, and the name stuck.'
  },
  {
    bookmark: 'monica',
    img: 'media/monica.png',
    name: 'Monica Hall',
    title: 'CFO',
    text: 'Monica joined Raviga in 2010, worked her way up quickly under Peter’s tutelage, and is now the youngest Associate Partner in Raviga’s history. Previously, she had been an analyst at McKinsey and Co., and before that did opposition research for the 2008 Obama campaign. Monica focuses on software startups. She also is passionate about both the consumer and healthcare sectors and has written several scholarly articles regarding consumer and patient rights. Monica earned her Bachelor of Science in economics from Princeton University and her MBA from the Stanford School of Business. Before Peter Gregory\'s death, Monica was Raviga’s head of operations, handling the day-to-day duties of his tech investment business and often fielding pitches and working directly with tech folks using Peter\'s money. Now she works under Laurie Bream as an associate partner. Monica took a particular interest in Pied Piper\'s algorithm from the beginning and has taken Peter\'s board seat at Richard\'s request.'
  },
  {
    bookmark: 'erlich',
    img: 'media/erlich-bachman.jpg',
    name: 'Erlich Bachman',
    title: 'Incubator Provider, founder of Aviato, Self-Proclaimed Genius',
    text: 'Erlich administers the Hacker Hostel, a tech incubator where Richard, Big Head, Dinesh, and Gilfoyle live and work in exchange for 10 percent of their potential businesses. Erlich clings to his glory days, when he sold aviation start-up Aviato, a move that, at least in his mind, qualifies him to be a svengali lording over other tech nerds. He still drives a car emblazoned with multiple Aviato logos and smokes copious amounts of weed.'
  }
];
knex.schema.hasTable('aboutCardContentFiller').then((exists) => {
  if (!exists) {
    knex('aboutCardContentFiller').insert(aboutCards).then(() => ('data inserted'))
      .catch((err) => { console.log(err); throw err; })
      .finally(() => {
        knex.destroy();
      });
  } else {
    console.log('Table aboutCardContentFiller already exists! No changes were made.');
    knex.destroy();
  }
});
