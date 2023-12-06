const projects = [
    {
        name: 'Portfolio',
        cover: '/images/portfolio/portfolio-cover.png',
        liveLink: 'https://salvatorequagliariello.com/',
        githubLink: 'https://github.com/salvatorequagliariello/personal-website',
        tech: 'JavaScript, React, NextJS, TailwindCSS, Vercel',
        descriptionOne: 'At the core of this website is the belief that simplicity and elegance can create a powerful user experience. The minimalistic design allows the focus to be on the content, ensuring that visitors can easily navigate through my projects, learn about my background, and reach out to me. The central rotating moon on the homepage symbolizes the constant evolution and growth that I strive for as a developer. The entire website is based on the SPA concept. Through the three main sections - "About," "Projects," and "Contact" - I aim to provide visitors with a holistic understanding of who I am as a developer and how I can contribute to their projects.',
        descriptionTwo: 'In the "About" section, you will find a detailed biography where I share my journey, skills, and passion for development. This section serves as an introduction, allowing you to get to know me on a personal and professional level.',
        descriptionThree: 'The "Projects" section is where I showcase my past and ongoing projects. By exploring this section, you can gain insights into my technical expertise and problem-solving abilities.',
        descriptionFour: `Lastly, the "Contact" section provides a convenient way for potential collaborators, clients, and employers to reach out to me. A user-friendly form is available, allowing you to send me a message directly. I value open and transparent communication, and I'm excited to engage with fellow developers, clients, and potential collaborators.`,
        pathName: 'Portfolio'
    },
    {
        name: 'Timeless',
        cover: '/images/timeless/timeless-cover-dark.png',
        liveLink: 'https://timeless-watches.vercel.app/',
        githubLink: 'https://github.com/salvatorequagliariello/timeless-shop',
        tech: 'TypeScript, React, NextJS, TailwindCSS, Vercel, Stripe',
        descriptionOne: 'The TIMELESS E-shop is a responsive web-app built with NextJS, React and written in TypeScript, so it can be easily refactored or manteined. The entire application is managed by my CMS, which send data about products, categories and billboards to the website via API.',
        descriptionTwo: 'The styling of the website is based on TailwindCSS, and in addition to being fully responsive, there is a Light/Dark theme mode that automatically sets itself according to the preferences of the operating system on which it is displayed.',
        descriptionThree: 'Once on the e-commerce it is possible to browse through the different collections or filter search results by material, strap material, or movement type.',
        descriptionFour: 'It is then possible to click on a specific timepiece to see its history and features in more detail, admire its case, or simply to purchase it. The E-commerce shopping cart allows customers to "buy" the watches they choose, thanks to the integration with Stripe, which will fully simulate the purchase phase.',
        imageOne: '/images/timeless/timeless-1.png',
        imageTwo: '/images/timeless/timeless-2.png',
        pathName: 'Timeless'
    },
    {
        name: 'ai.GO',
        cover: '/images/aigo/aigo-cover.png',
        liveLink: 'https://aigo-ai.vercel.app/',
        githubLink: 'https://github.com/salvatorequagliariello/aigo-app',
        tech: 'TypeScript, Angular, Bootstrap, Stripe, Firebase, Vercel',
        descriptionOne: `Integration with the OpenAI API lies at the core of ai.Go's capabilities. By leveraging the power of natural language processing and machine learning, ai.Go enables users to generate code snippets, design images, and engage in meaningful conversations with the AI assistant. ai.Go is built with Angular, is written in TypeScript and all the UI is styled with Bootstrap. The app is fully responsive and user-friendly on every device.`,
        descriptionTwo: `ai.Go makes artificial intelligence accessible to everyone. Just create an account and you're done. Once you get to the dashboard, you simply select your desired service from the three available (Chat, Image generation, and Code generation) and give ai.Go a prompt to see the magic happen.`,
        descriptionThree: `The application relies on a Token based system to regulate the requests a user can do, and each request made to the OpenAI API consumes at least 1 token. Users and their Tokens are stored in a Firebase database. When a user signs up for the first time, he or she is given 10 free Tokens. Once the 10 free Tokens have been used up, the user has the option of purchasing additional Tokens provided in three different packs, the Bronze Pack, the Silver Pack and the Gold Pack. The checkout system is managed by Stripe in Client mode.`,
        descriptionFour: `Authentication in ai.Go is based on the robust Auth0 platform. With Auth0, users can confidently log in, create accounts, and manage their authentication credentials with ease.`,
        imageOne: '/images/aigo/aigo-1.png',
        imageTwo: '/images/aigo/aigo-2.png',
        pathName: 'ai.GO'
    },
    {
        name: 'eCommerce CRM',
        cover: '/images/crm-screen.png',
        liveLink: 'https:www.salvatorequagliariello.com',
        githubLink: 'https:www.github.com',
        tech: 'React, NextJS, Tailwind',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ornare magna, at eleifend sapien faucibus eu. Etiam interdum velit vitae nunc vulputate, ac tempus metus dictum. Morbi eget ultrices velit. Nullam eu tortor est. Etiam sit amet diam vel libero hendrerit gravida. Aliquam sed posuere magna. Vivamus molestie ante eget tortor congue suscipit. Integer vulputate convallis sagittis. Aliquam fermentum ut urna lacinia posuere. Fusce facilisis aliquet eleifend. Cras condimentum bibendum eros eget blandit.',
        pathName: 'CRM'
    },
    {
        name: 'uChat',
        cover: '/images/uchat-screen.png',
        liveLink: 'https:www.salvatorequagliariello.com',
        githubLink: 'https:www.github.com',
        tech: 'React, NextJS, Tailwind',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ornare magna, at eleifend sapien faucibus eu. Etiam interdum velit vitae nunc vulputate, ac tempus metus dictum. Morbi eget ultrices velit. Nullam eu tortor est. Etiam sit amet diam vel libero hendrerit gravida. Aliquam sed posuere magna. Vivamus molestie ante eget tortor congue suscipit. Integer vulputate convallis sagittis. Aliquam fermentum ut urna lacinia posuere. Fusce facilisis aliquet eleifend. Cras condimentum bibendum eros eget blandit.',
        pathName: 'uChat'
    },
    {
        name: 'Lotto Game',
        cover: '/images/lotto-screen.png',
        liveLink: 'https:www.salvatorequagliariello.com',
        githubLink: 'https:www.github.com',
        tech: 'React, NextJS, Tailwind',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum ornare magna, at eleifend sapien faucibus eu. Etiam interdum velit vitae nunc vulputate, ac tempus metus dictum. Morbi eget ultrices velit. Nullam eu tortor est. Etiam sit amet diam vel libero hendrerit gravida. Aliquam sed posuere magna. Vivamus molestie ante eget tortor congue suscipit. Integer vulputate convallis sagittis. Aliquam fermentum ut urna lacinia posuere. Fusce facilisis aliquet eleifend. Cras condimentum bibendum eros eget blandit.',
        pathName: 'Lotto'
    },
];

export default projects;