import empty from "../assets/images/empty.png";
import accenture from "../assets/images/accenture.png";
import upm from "../assets/images/upm.png";

export default [
	{
		id: 3,
		name: "Freelance",
		designation: "Co-owner and main programer",
		dated: "February 2019 - March 2020",
		logo: empty,
		companyLink: "https://www.linkedin.com/in/carlos-villa-sanchez/",
		description:
		`<p>
			Personal project for developing a desktop application for translators. This tool helps them in the generation of budgets,
			analyzing the documents before to translation. 
		</p>
		<p>
			Python and pyqt5.
		</p>
		`
	},
	{
		id: 2,
		name: "Universidad politécnica de Madrid (ETSIT)",
		designation: "Intership in digitalization process",
		dated: "September 2018 - June 2019",
		logo: upm,
		companyLink: "http://www.etsit.upm.es/",
		description:
			`<p>
				Member of the Digital Integration Group of the telecommunications school in the UPM.
				With a team of three interns, we aimed to carry out the centralization of school's applications into three different portals: 
				For students, teachers, and staff. In addition, we also created brand new applications.			
			</p>
			<p>
				Node.js, Express.js, React, CAS protocol, single sing-on, Docker.
			</p>
			<p>
			Main personal contributions:
			<ul>
				<li>
					Participation in the generation of the three portals. Integration of all the applications with single sign-on using the CAS protocol.
					Visit the public part of the portals: <a href="https://portal.etsit.upm.es/estudiantes/">LINK</a>
				</li>
				<li>
					ETSIT's personnel directory.
				</li>
				<li>
					Application for helping the communication between students who want to go on Erasmus and those who have already been.
				</li>
				<li>
					Application for the generation of the academic year calendar.
				</li>
			</ul>
			</p>
			`
	},
	{
		id: 1,
		name: "Accenture",
		designation: "Cybersecurity intern",
		dated: "February 2018 - July 2018",
		logo: accenture,
		companyLink: "https://www.accenture.com/",
		description:
		`<p>
			I started my professional career at Accenture in the security department. I was an intern for around 6 months in a cybersecurity project for an e-commerce. My role was to help any of the 12 members that made up the team. I helped with the analysis of security tools, the creation of auditing scripts, and the management of logs from a specific tool.
		</p>
		<p>
			It gave me a great view of how a real cybersecurity project works and gave me enough knowledge, as a beginner, to start exploring the security world on my own.
		</p>
		`
	}
];
