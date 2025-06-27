import './AboutMe.css';
export function AboutMe() {
    return (
        <section className="AboutMe">
            <img 
                src="https://t4.ftcdn.net/jpg/02/63/04/43/360_F_263044311_eLTaYpz9zQ61fVP4rSWAfkpG2HlspXIK.jpg" 
                alt="cat" 
            />
            <div>
                <h2 className="aboutMe__title">About Me</h2>
                <p className="aboutMe__paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </section>
    );
}
