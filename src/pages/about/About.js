import React from 'react';

const About = () => {
	return (
		<div className='page'>
			<div className='about-title'>
				<h1>About</h1>
			</div>
			<div className='description'>
				<h1> Overview </h1>
				<p>
					This is a Marvel fan website powered by the Marvel api. While the
					Marvel api is a wonderful tool, it isn't perfect, and you may notice
					some comic books are missing some information. The movie data comes
					from my own MCU api where I have included each movie in the marvel
					cinematic universe and details for each such as poster images,
					overviews, trailers and post credit scenes, as well as the chronology
					of each movie.
				</p>
				<h1> Future Plans</h1>
				<p>
					I have many plans for this website and how to make it a great place
					for Marvel fans to quickly find information for their favorite heros
					and movies. In the future, TV Shows and details for each will be added
					so you can stay up-to-date on upcomming shows. A better user control
					system will be put into place, so you can view comics from any year.
					Also, to make this site more engaging for Marvel fans, there will be a
					discussion board where people can discuss anything marvel from comics
					to theories about the MCU.
				</p>
				<h1> Stay Updated </h1>
				<p>
					View the Github repo for this project to see the code and stay updated
					on the changed made to the website. Also, if you would like to
					collaborate on this with me or have any questions about the Marvel
					api, feel free to reach out to me. You'll find all my information on
					my Github account.
				</p>
				<p>
					Github:{' '}
					<a
						href='https://github.com/jDelille/marvel'
						target='_blank'
						rel='noreferrer'>
						https://github.com/jDelille/marvel
					</a>
				</p>
			</div>
			<div className='footer'>
				<p> Created by @jDelille </p>
			</div>
		</div>
	);
};

export default About;
