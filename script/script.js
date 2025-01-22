const projects = [
    {
      imageSrc: 'path/to/projectImage1.jpg',
      githubLink: 'hhttps://github.com/Navinkashyap/Navinkashyap',
      demoLink: 'https://navinkashyap.onrender.com/listings',
      title: 'Airbnb_Clone',
      description: 'Developed an Airbnb-like vacation rental platform that allows users to search, book, and review properties.',
    },
    // {
    //   imageSrc: 'path/to/projectImage2.jpg',
    //   githubLink: 'https://github.com/mukulpythondev/React-Dice-Game',
    //   demoLink: 'https://dice-game-mukul.netlify.app/',
    //   title: 'Dice Game in React.',
    //   description: 'Enjoy and test your luck with the dice game.',
    // },
    // {
    //     imageSrc: 'path/to/projectImage2.jpg',
    //     githubLink: 'https://github.com/mukulpythondev/Refokus-UI-Clone',
    //     demoLink: 'https://refokus-ui-clone.netlify.app/',
    //     title: 'Refokus UI Clone',
    //     description: 'Refokus Agency website clone which has interesting animations and interactions.',
    //   },
    //   {
    //     imageSrc: 'path/to/projectImage2.jpg',
    //     githubLink: 'https://github.com/mukulpythondev/Apple-vision-clone',
    //     demoLink: 'https://apple-vision-clone-mukuldev.netlify.app/',
    //     title: 'Apple Vision Clone',
    //     description: 'Apple vision  website clone which has good level scrolling animation and 3D design.',
    //   },
    // Add more projects here...
  ];
  
  const projectCardsContainer = document.getElementById('project-cards');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card', 'project-card');
  
    projectCard.innerHTML = `
      <section class="card-body d-flex-col">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-footer d-flex space-between">
          <span class="card-tag">open-source</span>
          <a class="project-link d-flex" href="${project.githubLink}" target="_blank">Source</a>
          ${project.demoLink ? `<a class="project-link d-flex" href="${project.demoLink}" target="_blank">Live</a>` : ''}
        </div>
      </section>
    `;
  
    projectCardsContainer.appendChild(projectCard);
  });
  