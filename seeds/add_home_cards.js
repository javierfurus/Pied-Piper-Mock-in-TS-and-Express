
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('cardContentFiller').del()
    .then(function () {
      // Inserts seed entries
      return knex('cardContentFiller').insert([
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
      ]);
    });
};
