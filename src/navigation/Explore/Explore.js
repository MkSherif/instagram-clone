import React from 'react';
import Sidenav from '../Sidenav';
import './Explore.css'

const Explore = () => {
    const images = [
        { url: 'https://www.picgifs.com/games-gifs/games-gifs/grand-theft-auto-v/picgifs-grand-theft-auto-v-627917.gif', description: 'Image 1' },
        { url: 'https://68.media.tumblr.com/e4c250cb7e4be9ef207c4bea41dbac9b/tumblr_o8rznfxIEo1s2wlkdo1_500.gif', description: 'Image 1' },
        { url: 'https://media1.tenor.com/images/d90236f42089e5498f32b2de4ed1da65/tenor.gif?itemid=19100337', description: 'Image 1' },
        { url: 'https://media.giphy.com/media/vP7Ylt9ByFqJ6SSwy2/giphy.gif', description: 'Image 1' },
        { url: 'https://media.giphy.com/media/l46C5YyhNUlhFLlio/giphy.gif', description: 'Image 1' },
        { url: 'https://media.giphy.com/media/3o7btQ8jDTPGDpgc6I/giphy.gif', description: 'Image 1' },
        { url: 'https://media1.tenor.com/images/c5e94b6ccd8da434998b9fc6d6480e78/tenor.gif?itemid=11272449', description: 'Image 2' },
        { url: 'https://www.finetoshine.com/wp-content/uploads/2020/07/ANIME.gif', description: 'Image 2' },
        { url: 'https://38.media.tumblr.com/7c5ceda05b4da718abea56949f1a60ef/tumblr_nx5uvxPC3x1shlg3vo4_540.gif', description: 'Image 2' },
        { url: 'https://media1.tenor.com/images/6a97a33fd255a81bd9dc406249e515d5/tenor.gif?itemid=14594003', description: 'Image 2' },
        { url: 'https://media0.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif', description: 'Image 2' },
        { url: 'https://media.giphy.com/media/11kEuHSQAXXiGQ/giphy.gif', description: 'Image 2' },
       
        { url: 'https://i.gifer.com/origin/db/db06c14a3148ef1e0764641c2dc1f347.gif', description: 'Image 1' },
        { url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/35d41654933123.596f84ed7b938.gif', description: 'Image 1' },
        { url: 'https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif', description: 'Image 1' },
        { url: 'https://66.media.tumblr.com/82da0a02ca6bc927a0bd9e40cdbcb4e4/tumblr_p017bjhjzy1wzjh0ro1_500.gif', description: 'Image 1' },
        { url: 'https://th.bing.com/th/id/R.68c4b4fdd1b7889fa7c834e6a385dd52?rik=pn9s%2b7Tn9%2bKfCg&riu=http%3a%2f%2fbestanimations.com%2fNature%2fnature-scene-river-animated-gif-2.gif&ehk=NfqjIfgbD0x%2fnXtnF71DUmVnZGBenWr3kGuXiuCrTWE%3d&risl=&pid=ImgRaw&r=0', description: 'Image 1' },
        { url: 'https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif', description: 'Image 1' },
        { url: 'https://i.pinimg.com/originals/55/85/f8/5585f8e9017a2d1712d930a6cd356932.gif', description: 'Image 2' },
        { url: 'https://www.commercient.com/wp-content/uploads/2019/12/deepLearning.gif', description: 'Image 2' },
        { url: 'https://media2.giphy.com/media/3o6nV8OYdUhiuKja1i/giphy.gif', description: 'Image 2' },
        { url: 'https://th.bing.com/th/id/R.13d22e0884599115b5351f17bbde2971?rik=nXztNa1jGMpA3w&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f07%2fanime-fight-gif-14.gif&ehk=EN0S2Yh3GasjNUGFsbOZKh5hj%2f7nS6ejUjFls60AYko%3d&risl=&pid=ImgRaw&r=0', description: 'Image 2' },
        { url: 'https://orig00.deviantart.net/b00e/f/2016/080/6/9/asus_rog_gif_by_xxaries1970xx-d9vx2p4.gif', description: 'Image 2' },
        { url: 'https://media.giphy.com/media/3ohc0SY5oyTxwcnFiU/giphy.gif', description: 'Image 2' },
       
      
    ];

    return (
    <div className="explore">
        <div className="sidenav">
          <Sidenav />
        </div>
      <div className="explore-content">
      <div className="image-grid">
          {images.map((image, index) => (
              <div key={index} className="image-item">
                  <img src={image.url} alt={image.description} />
              </div>
          ))}
      </div>
      </div>
      </div>
    );
};

export default Explore;
