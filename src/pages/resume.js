import React from "react";
import "../styles/stepper.css";
import work from "../data/Work";
import grad from "../data/Edu";
import lang from "../data/Language";
import prog from "../data/Programming";
import hobby from "../data/Interests";
import starimg from "../assets/images/star.svg";
import {
	ResumeWrapper,
	WorkWrapper,
	EdWrapper,
	EdContent,
	Stepper,
	StepperHead,
	LogoLink,
	StepperDesc
} from "../styles/workStyle.js";
import Layout from "../components/layout";

const Resume = () => (
	<Layout>
		<ResumeWrapper>
			<WorkWrapper>
				<h1>Work Resume</h1>
				<div className="resume-stepper">
					{work.map(item => (
						<div key={item.id} className="step">
							<div>
								<div className="circle" />
								<div className="line" />
							</div>
							<Stepper>
								<StepperHead>
									<div>
										<h3>{item.designation}</h3>
										<a
											href={item.companyLink}
											target="_blank"
										>
											{item.name}
										</a>
										<p>{item.dated}</p>
									</div>
									<LogoLink href={item.companyLink}>
										<img
											src={item.logo}
											alt="company"
											width="175px"
										/>
									</LogoLink>
								</StepperHead>
								<StepperDesc
									dangerouslySetInnerHTML={{
										__html: item.description
									}}
								/>
							</Stepper>
						</div>
					))}
				</div>
			</WorkWrapper>

			<EdWrapper>
				<h1>Education</h1>
				<EdContent>
					<div>
						<p>
							Espacialization year of master studies in Cybersecurity at "Ecole Polytechnique Fédérale de Lausanne".
							Master thesis included at the "DEDIS" laboratory. 2019 - 2020.
						</p>
						<p>
							Master in Telecommunication Engineering at "Universidad Politécnica de Madrid". 2018 - 2020
						</p>
						<p>
							Bachelor of Engineering in Telecommunication Technologies and Services Engineering (BETTS) at
							"Universidad Politécnica de Madrid". 23th best score out of 230 students. 2014 - 2018
						</p>
					</div>
				</EdContent>
				<h1>Language</h1>
				<EdContent>
					{lang.map(item => (
						<div key={item.id}>
							<p>
								{item.name}{"  "}
								{Array.from({ length: item.stars }, (_, k) => (
									<img
										key={k}
										src={starimg}
										alt="star"
										width="20px"
										style={{ marginBottom: "0px", marginLeft: "5px" }}
									/>
								))}
							</p>

						</div>
					))}
				</EdContent>
				<h1>Programing Languages</h1>
				<EdContent>
					{prog.map(item => (
						<div key={item.id}>
							<p>
								{item.name}{"  "}
								{Array.from({ length: item.stars }, (_, k) => (
									<img
										key={k}
										src={starimg}
										alt="star"
										width="20px"
										style={{ marginBottom: "0px", marginLeft: "5px" }}
									/>
								))}
							</p>

						</div>
					))}
				</EdContent>
				<h1>Interests</h1>
				<EdContent>
					{hobby.map(item => (
						<div key={item.id}>
							<p>{item.name}</p>
						</div>
					))}
				</EdContent>
			</EdWrapper>
		</ResumeWrapper>
	</Layout>
);

export default Resume;
